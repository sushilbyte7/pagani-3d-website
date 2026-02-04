import Image from "next/image";

export default function Gallery() {
    // Using specific frames from the sequence to act as static gallery images
    const galleryImages = [
        { src: "/images/zonda-sequence/1.jpg", alt: "Front Profile" },
        { src: "/images/zonda-sequence/40.jpg", alt: "Side Profile" },
        { src: "/images/zonda-sequence/80.jpg", alt: "Rear Three Quarter" },
        { src: "/images/zonda-sequence/120.jpg", alt: "Rear Profile" },
        { src: "/images/zonda-sequence/160.jpg", alt: "Side Profile Left" },
        { src: "/images/zonda-sequence/200.jpg", alt: "Front Three Quarter" },
    ];

    return (
        <section className="py-24 bg-pagani-black relative z-20">
            <div className="max-w-7xl mx-auto px-6">
                <h3 className="text-pagani-gold font-orbitron text-xl mb-4 tracking-widest uppercase text-center">Gallery</h3>
                <h2 className="text-4xl md:text-5xl font-orbitron text-white mb-16 uppercase leading-tight text-center">
                    Visual Symphony
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {galleryImages.map((img, index) => (
                        <div key={index} className="relative group overflow-hidden aspect-video border border-white/5 bg-[#101010]">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-contain transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                <span className="text-white font-orbitron text-sm tracking-widest uppercase">{img.alt}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
