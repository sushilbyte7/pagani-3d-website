"use client";

import { MotionValue, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";

interface ZondaScrollCanvasProps {
    scrollYProgress: MotionValue<number>;
    totalFrames: number;
    imageFolderPath: string;
    onLoadComplete?: () => void;
}

export default function ZondaScrollCanvas({
    scrollYProgress,
    totalFrames,
    imageFolderPath,
    onLoadComplete,
}: ZondaScrollCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const imgArray: HTMLImageElement[] = [];

        // Clear existing images to prevent duplicates on remount
        imagesRef.current = [];

        for (let i = 1; i <= totalFrames; i++) {
            const img = new Image();
            img.src = `${imageFolderPath}/${i}.jpg`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === totalFrames) {
                    setIsLoaded(true);
                    if (onLoadComplete) onLoadComplete();
                }
            };
            imgArray.push(img);
        }
        imagesRef.current = imgArray;
    }, [totalFrames, imageFolderPath, onLoadComplete]);

    // Draw frame function - Stable reference via useRef
    const drawFrame = useCallback((index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        const img = imagesRef.current[index];

        if (!canvas || !ctx || !img) return;

        // High-DPI support
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();

        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;

        ctx.scale(dpr, dpr);
        ctx.clearRect(0, 0, rect.width, rect.height);

        // Object-fit: contain logic (Prevents zooming/cutting off)
        const hRatio = rect.width / img.width;
        const vRatio = rect.height / img.height;
        const ratio = Math.min(hRatio, vRatio);

        const centerShift_x = (rect.width - img.width * ratio) / 2;
        const centerShift_y = (rect.height - img.height * ratio) / 2;

        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }, []);

    // React to scroll changes
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded || imagesRef.current.length === 0) return;

        // Clamp latest between 0 and 1
        const progress = Math.max(0, Math.min(1, latest));
        const frameIndex = Math.min(
            totalFrames - 1,
            Math.floor(progress * totalFrames)
        );

        requestAnimationFrame(() => drawFrame(frameIndex));
    });

    // Initial draw when loaded
    useEffect(() => {
        if (isLoaded) {
            drawFrame(0);
        }
    }, [isLoaded, drawFrame]);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full object-contain pointer-events-none"
        />
    );
}
