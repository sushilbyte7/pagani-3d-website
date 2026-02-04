export default function Footer() {
    return (
        <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 border-t border-white/10 relative z-20">

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
                <h3 className="text-pagani-gold font-orbitron text-sm tracking-[0.3em] uppercase mb-4">Claim Your Legend</h3>
                <h2 className="text-5xl md:text-9xl font-orbitron font-bold uppercase tracking-tighter mb-8 text-white">
                    PAGANI
                </h2>
                <p className="max-w-2xl mx-auto text-gray-400 font-rajdhani text-lg mb-12">
                    Horacio Pagani's vision: Where art and engineering collide. The Zonda R is the ultimate expression of this philosophy.
                </p>
            </div>

            {/* Links Grid */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/5 pt-16">

                {/* Explore */}
                <div>
                    <h4 className="font-orbitron text-lg mb-6 uppercase tracking-wider">Explore</h4>
                    <ul className="space-y-3 font-rajdhani text-gray-400">
                        <li className="hover:text-pagani-gold transition-colors cursor-pointer">Models</li>
                        <li className="hover:text-pagani-gold transition-colors cursor-pointer">Heritage</li>
                        <li className="hover:text-pagani-gold transition-colors cursor-pointer">Technology</li>
                        <li className="hover:text-pagani-gold transition-colors cursor-pointer">Art</li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 className="font-orbitron text-lg mb-6 uppercase tracking-wider">Support</h4>
                    <ul className="space-y-3 font-rajdhani text-gray-400">
                        <li className="hover:text-pagani-gold transition-colors cursor-pointer">Contact</li>
                        <li className="hover:text-pagani-gold transition-colors cursor-pointer">Dealers</li>
                        <li className="hover:text-pagani-gold transition-colors cursor-pointer">Service</li>
                        <li className="hover:text-pagani-gold transition-colors cursor-pointer">Press</li>
                    </ul>
                </div>

                {/* Stay Updated */}
                <div className="md:col-span-2">
                    <h4 className="font-orbitron text-lg mb-6 uppercase tracking-wider">Stay Updated</h4>
                    <form className="flex gap-0 border-b border-white/20 pb-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-transparent w-full text-white font-rajdhani focus:outline-none placeholder-gray-600"
                        />
                        <button className="text-pagani-gold font-orbitron text-sm uppercase tracking-widest hover:text-white transition-colors">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Copyright */}
            <div className="max-w-7xl mx-auto px-6 mt-24 text-center text-gray-600 font-rajdhani text-sm">
                &copy; {new Date().getFullYear()} Pagani Automobili S.p.A. | Crafted with obsession by <span className="text-gray-400 hover:text-pagani-gold transition-colors">Sushil Kumar</span>.
            </div>
        </footer>
    );
}
