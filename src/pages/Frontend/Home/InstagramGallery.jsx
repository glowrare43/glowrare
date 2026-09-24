import testPic from "../../../assets/about-pic.png"

const instagramImages = [
    {
        image: testPic,
        alt: 'Glowrare beauty collection',
    },
    {
        image: testPic,
        alt: 'Glowrare skincare',
    },
    {
        image: testPic,
        alt: 'Glowrare beauty products',
    },
    {
        image: testPic,
        alt: 'Glowrare skincare collection',
    },
]

const InstagramGallery = () => {
    return (
        <section className="section w-full!">
            <div className="custom-container">
                <div className="mb-14! text-center!">
                    <span className="mb-3! inline-block! text-xs! font-semibold! uppercase! tracking-[0.22em]! text-brand-green!">
                        Follow Us
                    </span>
                    <h2 className="mb-4! font-serif! text-4xl! font-semibold! tracking-tight! text-brand-text! sm:text-5xl!">
                        @Glowrare
                    </h2>
                    <p className="mx-auto! max-w-xl! text-sm! leading-7! text-brand-text-light! sm:text-[15px]!">
                        Join our Instagram community and discover skincare
                        tips, beauty inspiration, and our latest collection.
                    </p>
                    <div className="mx-auto! mt-6! flex! items-center! justify-center! gap-2!">
                        <span className="h-px! w-10! bg-brand-border!" />
                        <span className="h-1.5! w-1.5! rounded-full! bg-brand-gold!" />
                        <span className="h-px! w-10! bg-brand-border!" />
                    </div>

                </div>

                {/* ================= INSTAGRAM GRID ================= */}
                <div className="grid! grid-cols-1! gap-5! sm:grid-cols-2! lg:grid-cols-4!">
                    {instagramImages.map((item, index) => (
                        <a href="https://www.instagram.com/glowrare43" target='_blank' key={index} className="group relative! block! aspect-square! overflow-hidden! rounded-3xl! border! border-brand-border! bg-brand-surface! shadow-[0_8px_30px_rgba(37,77,58,0.06)]!">
                            <img src={item.image} alt={item.alt} className="h-full! w-full! object-cover! transition-transform! duration-700! ease-out! group-hover:scale-110!" />

                            <div className="absolute! inset-0! flex! flex-col! items-center! justify-center! bg-brand-forest! opacity-0! transition-all! duration-500! group-hover:bg-brand-forest/80! group-hover:opacity-100!">
                                <div className="mb-3! flex! h-14! w-14! items-center! justify-center! rounded-full! border! border-white/30! bg-white/10! text-white! backdrop-blur-sm! transition-all! duration-500! group-hover:scale-100!">
                                    <i className="fa-brands fa-instagram text-2xl!" />
                                </div>
                                <span className="text-sm! font-medium! tracking-wide! text-white!">View on Instagram</span>
                            </div>

                            {/* Corner Number */}
                            <span className="absolute! right-4! top-4! flex! h-8! w-8! items-center! justify-center! rounded-full! bg-brand-surface/90! text-xs! font-semibold!
                                    text-brand-green! shadow-sm! backdrop-blur-sm! transition-all! duration-500! group-hover:scale-0! group-hover:opacity-0!">
                                0{index + 1}
                            </span>
                        </a>
                    ))}
                </div>

                {/* ================= FOLLOW BUTTON ================= */}
                <div className="mt-10! flex! justify-center!">
                    <a href="https://www.instagram.com/glowrare43" target="_blank" className="inline-flex! items-center! gap-3! rounded-full! border! border-brand-forest! bg-brand-forest! px-7! py-3.5! text-sm! font-semibold! text-white! shadow-[0_8px_25px_rgba(37,77,58,0.12)]!
                            transition-all! duration-300! hover:-translate-y-1! hover:bg-brand-green! hover:shadow-[0_12px_30px_rgba(37,77,58,0.18)]!">
                        <i className="fa-brands fa-instagram text-base!" />
                        Follow @Glowrare
                        <i className="fa-solid fa-arrow-right text-xs!" />
                    </a>
                </div>

            </div>
        </section>
    )
}

export default InstagramGallery