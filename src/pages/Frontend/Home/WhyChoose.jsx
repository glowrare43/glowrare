const WhyChoose = () => {
    const features = [
        {
            icon: "fa-solid fa-leaf",
            title: "Carefully Selected Products",
            description: "Only the best for your skin.",
        },
        {
            icon: "fa-solid fa-award",
            title: "Quality You Can Trust",
            description: "Premium quality, always guaranteed.",
        },
        {
            icon: "fa-solid fa-wand-magic-sparkles",
            title: "Beauty Made Simple",
            description: "Effective products for everyday glow.",
        },
        {
            icon: "fa-solid fa-headset",
            title: "Customer First Service",
            description: "We're here for you, always.",
        },
    ]

    return (
        <section className="section w-full! bg-brand-forest!">
            <div className="custom-container">

                <div className="mb-7! text-center!">
                    <span className="text-[11px] font-bold! uppercase tracking-[2px] text-brand-champagne sm:text-2xl!">Why Choose Glowrare?</span>
                </div>


                <div className="grid grid-cols-1! sm:grid-cols-2! lg:grid-cols-4!">

                    {features.map((feature, index) => (
                        <div key={feature.title} className={`group flex! items-center! gap-4! px-4! py-5! transition-all! duration-300!
                            ${index !== 0 ? "border-t border-white/15 sm:border-t-0" : ""}
                            ${index % 2 !== 0 ? "sm:border-l sm:border-white/15" : ""}
                            ${index !== 0 ? "lg:border-l lg:border-white/15" : ""}
                            `}>

                            <div className="flex! h-16! w-16! min-w-11! items-center! justify-center! rounded-full!
                                border border-brand-gold/30! bg-brand-champagne/10! transition-all! duration-300! group-hover:bg-brand-gold! group-hover:border-brand-gold!">
                                <i className={`${feature.icon} text-[19px]! text-brand-champagne! transition-all! duration-300! group-hover:scale-110! group-hover:text-brand-forest!`}></i>
                            </div>


                            <div className="min-w-0!">
                                <h3 className="mb-1! text-[12px]! font-semibold! leading-[1.4]! text-brand-surface! sm:text-[14px]!">
                                    {feature.title}
                                </h3>
                                <p className="text-[10px]! leading-normal! text-brand-green-light sm:text-[12px]!">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default WhyChoose