export default function History() {
    return (
        <section className="py-24 bg-[#151515] relative z-20 border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h3 className="text-pagani-gold font-orbitron text-xl mb-4 tracking-widest uppercase">Legacy</h3>
                <h2 className="text-4xl md:text-5xl font-orbitron text-white mb-12 uppercase leading-tight">
                    The Evolution of <br /> A Legend
                </h2>

                <div className="space-y-12 text-left">
                    <div className="relative pl-8 border-l border-pagani-gold/30">
                        <span className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-pagani-gold rounded-full"></span>
                        <h4 className="text-2xl font-orbitron text-white mb-2">2007</h4>
                        <p className="text-gray-400 font-rajdhani text-lg leading-relaxed">
                            The project begins with a simple brief: total freedom. The Zonda R was conceived as a testbed for the upcoming Huayra, allowing Pagani to experiment with new materials, suspension geometries, and aerodynamic concepts without the constraints of road regulations.
                        </p>
                    </div>

                    <div className="relative pl-8 border-l border-pagani-gold/30">
                        <span className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-pagani-gold rounded-full"></span>
                        <h4 className="text-2xl font-orbitron text-white mb-2">2009</h4>
                        <p className="text-gray-400 font-rajdhani text-lg leading-relaxed">
                            The Zonda R is unveiled in Vienna. It shares only 10% of its components with the Zonda F. The chassis is a new carbon-titanium monocoque, significantly increasing stiffness while reducing weight.
                        </p>
                    </div>

                    <div className="relative pl-8 border-l border-pagani-gold/30">
                        <span className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-pagani-gold rounded-full"></span>
                        <h4 className="text-2xl font-orbitron text-white mb-2">2010</h4>
                        <p className="text-gray-400 font-rajdhani text-lg leading-relaxed">
                            The Nürburgring Record. Marc Basseng pilots the Zonda R to a lap time of 6:47.50, smashing the previous record for non-road-legal cars. This cemented the Zonda R's status as a legend of engineering.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
