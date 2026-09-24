import AboutPic from "../../../assets/about-pic.png"

const MissionSection = () => {
    return (
        <section className="section w-full!">
            <div className="custom-container">

                <div className="grid grid-cols-1! md:grid-cols-2! items-stretch!">

                    {/* ================= LEFT IMAGE ================= */}
                    <div className="group relative! min-h-75! h-75! sm:h-95! md:h-130! overflow-hidden! rounded-2xl!">
                        <img
                            src={AboutPic} alt="Glowrare Mission"
                            className="w-full! h-full! object-cover! object-center! rounded-2xl! transition-transform! duration-700! ease-out! group-hover:scale-105!"
                        />

                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all duration-500"></div>
                    </div>


                    {/* ================= RIGHT CONTENT ================= */}
                    <div className="relative! flex! flex-col! justify-center! px-6! py-12! sm:px-10! sm:py-14! md:px-[8%]! lg:px-[10%]! lg:py-20! overflow-hidden!">


                        <div className="relative z-10 max-w-xl">
                            <span className="inline-block mb-4 text-[11px] sm:text-xs font-bold tracking-[3px] uppercase text-brand-forest">
                                About Glowrare
                            </span>


                            <h2 className="text-[32px] sm:text-[38px] md:text-[42px] lg:text-[46px] leading-[1.15] font-semibold text-brand-text!">
                                Beauty That Begins With Confidence
                            </h2>

                            <div className="w-20! h-0.75! bg-brand-forest! rounded-full! mt-5! mb-7!"></div>


                            <p className="section-paragraph text-left! mb-3!">
                                Glowrare brings together premium skincare and beauty
                                products designed to help you feel confident in your own skin.
                            </p>
                            <p className="section-paragraph text-left! mb-3!">
                                Every product is carefully selected for its quality,
                                authenticity, and effectiveness, so you can choose with confidence.
                            </p>
                            <p className="section-paragraph text-left! mb-3!">
                                Because skincare is more than a routine it is a moment
                                to care for yourself, celebrate your beauty, and simply glow.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default MissionSection