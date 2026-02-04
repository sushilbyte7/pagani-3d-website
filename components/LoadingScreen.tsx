"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
    return (
        <div className="fixed inset-0 z-[100] bg-[#1a1a1a] flex flex-col items-center justify-center">
            {/* Spinner */}
            <motion.div
                className="w-16 h-16 border-2 border-pagani-gold border-t-transparent rounded-full mb-8"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />

            {/* Text */}
            <h2 className="text-pagani-gold font-orbitron text-xl md:text-2xl tracking-[0.2em] uppercase animate-pulse">
                Loading Excellence...
            </h2>
        </div>
    );
}
