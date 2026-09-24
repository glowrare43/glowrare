import promoBg from '../../../assets/promo-bg.png'

const PromoBanner = () => {
    return (
        <section className="section w-full!">
            <div className="custom-container">
                <div className="relative! h-125! overflow-hidden! rounded-3xl! sm:h-125! lg:rounded-[30px]!">

                    <img src={promoBg} alt="Promo Banner" className="absolute! inset-0! h-full! w-full! object-cover! object-center!" />
                    <div className="absolute! inset-0! bg-brand-forest/45!"></div>

                    <div className="absolute! inset-0! bg-linear-to-b from-brand-forest/25 via-brand-forest/35 to-brand-forest/55"></div>


                    {/* ================= CONTENT ================= */}
                    <div className="relative! z-10! flex! min-h-125! items-center! justify-center! px-5! py-14! text-center! sm:min-h-125! sm:px-10!">

                        <div className="mx-auto! max-w-180!">
                            <span
                                className="inline-flex! rounded-full! border! border-brand-champagne/60 bg-brand-forest/30 
                                    px-5! py-2! text-[10px]! font-semibold! uppercase! tracking-[2.5px]! text-brand-champagne! backdrop-blur-sm! sm:text-[11px]!"
                            >
                                Special Offer
                            </span>

                            <h2 className="mt-6! text-[36px]! font-semibold! leading-[1.12]! text-white! sm:text-[44px]! md:text-[50px]! lg:text-[58px]!">
                                Your Skin Deserves
                                <br />
                                <span className="text-brand-champagne">The Best Care.</span>
                            </h2>

                            <p className="mx-auto! mt-6! max-w-155! text-[13px]! leading-[1.8]! text-white/90! sm:text-[14px]! md:text-[15px]!">
                                Discover Glowrare's premium skincare collection
                                specially designed to nourish, protect and brighten
                                your skin. Enjoy exclusive discounts for a limited time.
                            </p>

                            <a href="/catalog"  className="group
                                    mt-7! inline-flex! items-center! gap-3! rounded-lg! px-7! py-3.5! text-[13px]! font-semibold!
                                    bg-brand-champagne !text-brand-forest! shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                                    transition-all duration-300  hover:bg-brand-gold hover:text-white hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)]"
                            >
                                Shop Now
                                <i className="fa-solid fa-arrow-right text-xs! transition-transform! duration-300! group-hover:translate-x-1!"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PromoBanner