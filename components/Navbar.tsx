"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.nav
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300",
                isScrolled
                    ? "bg-pagani-black/80 backdrop-blur-md border-b border-white/10"
                    : "bg-transparent"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="text-2xl font-bold tracking-widest text-white font-orbitron">
                PAGANI
            </div>

            <button
                className="px-6 py-2 text-sm font-bold tracking-wider text-black bg-white hover:bg-pagani-gold transition-colors duration-300 uppercase"
            >
                Inquire
            </button>
        </motion.nav>
    );
}
