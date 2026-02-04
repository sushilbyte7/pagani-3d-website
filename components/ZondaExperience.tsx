"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { carData } from "@/data/carData";

interface ZondaExperienceProps {
    scrollYProgress: MotionValue<number>;
}

export default function ZondaExperience({ scrollYProgress }: ZondaExperienceProps) {
    // Hero Phase: 0 - 0.3
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

    // Design Phase: 0.3 - 0.6
    const designOpacity = useTransform(scrollYProgress, [0.3, 0.35, 0.55, 0.6], [0, 1, 1, 0]);
    const designY = useTransform(scrollYProgress, [0.3, 0.35, 0.6], [50, 0, -50]);

    // Engine Phase: 0.6 - 1.0
    const engineOpacity = useTransform(scrollYProgress, [0.6, 0.65, 0.95, 1], [0, 1, 1, 0]);
    const engineX = useTransform(scrollYProgress, [0.6, 0.65], [100, 0]);

    // Phase Active States (for indicators)
    const isHeroActive = useTransform(scrollYProgress, (v) => v < 0.33 ? 1 : 0.5);
    const isDesignActive = useTransform(scrollYProgress, (v) => v >= 0.33 && v < 0.66 ? 1 : 0.5);
    const isEngineActive = useTransform(scrollYProgress, (v) => v >= 0.66 ? 1 : 0.5);

    const activePhaseNumber = useTransform(scrollYProgress, (v) => {
        if (v < 0.33) return "01";
        if (v < 0.66) return "02";
        return "03";
    });

    return (
        <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between items-center py-10 md:py-16">

            {/* Phase Navigation (Top) - Adjusted margin as per user request */}
            <div className="flex gap-8 md:gap-24 text-xs md:text-sm font-rajdhani tracking-widest uppercase z-50 mt-4 md:mt-6">
                <motion.div style={{ opacity: isHeroActive, color: useTransform(isHeroActive, v => v === 1 ? "#D4AF37" : "#fff") }} className="transition-colors duration-300">
                    01 Start
                </motion.div>
                <motion.div style={{ opacity: isDesignActive, color: useTransform(isDesignActive, v => v === 1 ? "#D4AF37" : "#fff") }} className="transition-colors duration-300">
                    02 Design
                </motion.div>
                <motion.div style={{ opacity: isEngineActive, color: useTransform(isEngineActive, v => v === 1 ? "#D4AF37" : "#fff") }} className="transition-colors duration-300">
                    03 Engine
                </motion.div>
            </div>

            {/* Central Content Area */}
            <div className="relative w-full flex-grow flex items-center justify-center">
                {/* Hero Section */}
                <motion.div
                    style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-4"
                >
                    <h2 className="text-pagani-gold text-lg md:text-xl tracking-[0.5em] uppercase font-orbitron mb-4">
                        The Apex Predator
                    </h2>
                    <h1 className="text-[6vw] md:text-[8vw] font-bold font-orbitron text-white uppercase tracking-tighter mb-6 leading-none text-center drop-shadow-2xl">
                        {carData.hero.title}
                    </h1>
                    <div className="flex flex-col items-center gap-4">
                        <p className="text-2xl text-white font-orbitron">€ 1,500,000</p>
                        <p className="text-xs text-gray-500 font-rajdhani uppercase tracking-widest">Inclusive of applicable taxes</p>
                        <button className="border border-white/30 px-6 py-2 text-xs font-orbitron uppercase tracking-widest hover:bg-white hover:text-black transition-colors pointer-events-auto">
                            Contact Dealer
                        </button>
                    </div>
                </motion.div>

                {/* Design Section */}
                <motion.div
                    style={{ opacity: designOpacity, y: designY }}
                    className="absolute inset-0 flex flex-col items-start justify-center px-10 md:px-32 max-w-7xl mx-auto"
                >
                    <div className="bg-black/30 backdrop-blur-sm p-8 border-l-2 border-pagani-gold max-w-xl">
                        <h3 className="text-4xl md:text-6xl font-orbitron text-white mb-6 uppercase">
                            {carData.design.title}
                        </h3>
                        <h4 className="text-2xl text-pagani-gold font-rajdhani mb-4 uppercase tracking-widest">
                            {carData.design.heading}
                        </h4>
                        <p className="text-gray-300 font-rajdhani text-lg leading-relaxed">
                            {carData.design.description}
                        </p>
                    </div>
                </motion.div>

                {/* Engine Section */}
                <motion.div
                    style={{ opacity: engineOpacity, x: engineX }}
                    className="absolute inset-0 flex flex-col items-end justify-center px-10 md:px-32 max-w-7xl mx-auto"
                >
                    <div className="bg-gradient-to-l from-black/60 to-transparent p-8 border-r md:border-r-2 border-pagani-gold/50 text-right w-full md:w-auto backdrop-blur-none">
                        <h3 className="text-4xl md:text-6xl font-orbitron text-white mb-8 uppercase drop-shadow-lg">
                            {carData.engine.title}
                        </h3>
                        <ul className="space-y-4">
                            {carData.engine.specs.map((spec, i) => (
                                <li key={i} className="flex justify-end items-center gap-4">
                                    <span className="text-gray-300 font-rajdhani uppercase tracking-wider text-sm font-bold shadow-black drop-shadow-md">
                                        {spec.label}
                                    </span>
                                    <span className="text-2xl text-white font-orbitron drop-shadow-lg">
                                        {spec.value}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Controls / Indicators */}
            <div className="w-full max-w-[95%] md:max-w-7xl px-6 flex justify-between items-end z-50">
                <div className="pointer-events-auto cursor-pointer flex items-center gap-2 group">
                    <span className="text-white font-orbitron text-sm tracking-widest uppercase group-hover:text-pagani-gold transition-colors">Discover More</span>
                    <div className="w-6 h-6 rounded-full border border-white/50 flex items-center justify-center group-hover:border-pagani-gold transition-colors">
                        <span className="text-[10px]">→</span>
                    </div>
                </div>

                {/* Vertical Scroll Text */}
                <div className="hidden md:flex flex-col items-center absolute right-8 bottom-32 gap-4">
                    <span className="text-gray-500 font-rajdhani text-xs tracking-[0.3em] uppercase rotate-[-90deg] origin-center whitespace-nowrap">
                        Scroll
                    </span>
                    <div className="w-[1px] h-12 bg-white/20"></div>
                </div>

                <div className="text-[4rem] md:text-[8rem] font-bold font-orbitron text-white/10 leading-none">
                    <motion.span>{activePhaseNumber as any}</motion.span>
                </div>
            </div>
        </div>
    );
}
