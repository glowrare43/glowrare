import React from "react";

const OurFeatures = () => {
    const features = [
        ["fa-regular fa-gem", "Premium Quality", "We ensure the highest quality in every product.",],
        ["fa-solid fa-leaf", "Natural Ingredients", "Carefully selected natural ingredients for healthy skin."],
        ["fa-solid fa-truck-fast", "Fast Delivery", "Quick and reliable delivery all over the country."],
        ["fa-regular fa-heart", "Customer Satisfaction", "Your satisfaction is our top priority."],
        ["fa-solid fa-headset", "24/7 Support", "Always available for your assistance."],
        ["fa-solid fa-users", "10,000+", "Happy Customers"]
    ]

    return (
        <section className="section relative! overflow-hidden! bg-brand-background!">
            <div className="custom-container">
                <div className="relative! mx-auto! grid! grid-cols-1! overflow-hidden! rounded-[28px]! border! border-brand-border! bg-brand-surface! shadow-xl! sm:grid-cols-2! lg:grid-cols-3! xl:grid-cols-6!">

                    {features.map(([icon, title, text], i) => (
                        <div key={i} className="group! relative! border-b! border-brand-border! p-7! text-center! transition-all! duration-300! hover:bg-brand-mist! sm:p-8! xl:border-b-0! xl:border-r! xl:last:border-r-0!">
                            <div className="mx-auto! mb-5! flex! h-15.5! w-15.5! items-center! justify-center! rounded-full! border! border-brand-green-light! bg-brand-mist! text-brand-green! transition-all! duration-300! group-hover:border-brand-green! group-hover:bg-brand-green! group-hover:text-white! group-hover:shadow-[0_8px_20px_rgba(111,143,114,0.25)]!">
                                <i className={`${icon} text-[25px]!`} />
                            </div>

                            <h3 className="mb-2.5! font-serif! text-[20px]! font-medium! leading-tight! text-brand-forest! transition-colors! duration-300! group-hover:text-brand-green!">
                                {title}
                            </h3>

                            <p className="text-[14px]! leading-[1.75]! text-brand-text-light!">{text}</p>

                            {i === features.length - 1 && (<div className="mx-auto! mt-4! h-px! w-10! bg-brand-gold!" />)}
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default OurFeatures