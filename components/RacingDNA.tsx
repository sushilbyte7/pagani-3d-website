import { carData } from "@/data/carData";

export default function RacingDNA() {
    return (
        <section className="py-24 bg-[#111] relative z-20">
            <div className="max-w-7xl mx-auto px-6">
                <h3 className="text-pagani-gold font-orbitron text-xl mb-4 tracking-widest uppercase">Philosophy</h3>
                <h2 className="text-4xl md:text-5xl font-orbitron text-white mb-12 uppercase leading-tight">
                    Racing <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">DNA</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {carData.racingDNA.map((feature, index) => (
                        <div key={index} className="group relative border-l-2 border-white/10 pl-8 hover:border-pagani-gold transition-colors duration-500">
                            <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-orbitron text-white mb-4 group-hover:text-pagani-gold transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 font-rajdhani text-lg leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
