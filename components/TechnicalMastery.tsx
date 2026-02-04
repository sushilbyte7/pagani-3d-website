import { carData } from "@/data/carData";

export default function TechnicalMastery() {
    return (
        <section className="py-24 px-6 bg-pagani-black relative z-20">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-pagani-gold font-orbitron text-xl mb-4 tracking-widest uppercase text-center">Specifications</h3>
                <h2 className="text-4xl md:text-6xl font-orbitron text-white mb-16 text-center uppercase">
                    Technical <span className="text-pagani-gold">Mastery</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {carData.technicalMastery.map((category, index) => (
                        <div key={index} className="border border-white/10 p-8 hover:border-pagani-gold transition-colors duration-300 bg-white/5 backdrop-blur-sm">
                            <h3 className="text-xl text-pagani-gold font-orbitron mb-6 border-b border-pagani-gold/30 pb-2">{category.category}</h3>
                            <ul className="space-y-3 text-gray-300 font-rajdhani">
                                {category.items.map((item, idx) => (
                                    <li key={idx} className="flex justify-between items-center text-sm">
                                        <span className="text-gray-500 uppercase tracking-wider">{item.label}</span>
                                        <span className="text-white font-semibold">{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
