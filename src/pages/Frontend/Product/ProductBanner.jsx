import bannerImg from '../../../assets/top-seller-bundle.png'

const ProductBanner = () => {
    return (
        <section className="section pt-10!">
            <div className="custom-container">

                <div className="relative! min-h-130! overflow-hidden! rounded-3xl! bg-brand-forest! shadow-[0_12px_35px_rgba(0,0,0,0.10)]!">
                    <img src={bannerImg} alt="Glowrare Beauty Products" className="absolute! inset-0! w-full! h-full! object-cover!" />
                    <div className="absolute! inset-0! bg-linear-to-t! from-brand-forest! via-brand-forest/55! to-brand-forest/5!" />

                    <div className="relative! z-10! min-h-130! flex! items-end! p-8! sm:p-10! md:p-14! lg:p-16!">
                        <div className="max-w-162.5!">
                            <span className="inline-block! mb-3! text-brand-gold! text-sm! font-bold! tracking-[3px]! uppercase!">
                               OUR COLLECTION
                            </span>

                            <h1 className="m-0! text-4xl! sm:text-5xl! lg:text-6xl! leading-[1.1]! font-serif! font-medium! text-brand-surface!">
                                 Discover Your
                                <span className="text-brand-champagne!"> Glow</span>
                            </h1>

                            <p className="mt-5! mb-6! max-w-140! text-sm! sm:text-base! leading-7! text-white/85!">
                                Premium skincare products carefully crafted to nourish,
                                brighten and protect your skin every single day.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductBanner