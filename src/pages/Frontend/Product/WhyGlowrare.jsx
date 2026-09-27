import React from "react";

const WhyGlowrare = () => {
    const features = [
        {
            icon: "fa-regular fa-gem",
            title: "Premium Quality",
            description: "Every product is carefully selected for the best results.",
        },
        {
            icon: "fa-solid fa-truck-fast",
            title: "Fast Delivery",
            description: "Quick and reliable delivery straight to your door.",
        },
        {
            icon: "fa-solid fa-headset",
            title: "Customer Support",
            description: "We're always here to help with any questions.",
        },
    ];

    return (
        <section className="section">
            <div className="custom-container">

                <div className="mx-auto! text-center!">
                    <h2 className="my-2.5! font-serif! text-[40px]! font-medium! text-brand-forest! max-[650px]:text-[32px]!">
                        Why Shop With Us?
                    </h2>

                    <p className="leading-[1.7]! text-brand-text-light!">
                        Quality, authenticity and care in every product we offer.
                    </p>
                </div>

                <div className="mt-10! grid grid-cols-3 gap-5! max-[650px]:grid-cols-1!">

                    {features.map((feature, index) => (
                        <div key={index} className="group rounded-[20px]! border! border-brand-border! bg-brand-background! px-6.25! py-8.75! text-center transition-all! duration-300! hover:-translate-y-2! hover:shadow-[0_15px_35px_rgba(37,77,58,0.10)]!">

                            <div className="mx-auto! mb-5! flex h-16.25! w-16.25! items-center justify-center rounded-full! bg-brand-green-light! text-[25px]! text-brand-forest! transition-all! duration-300! group-hover:bg-brand-forest! group-hover:text-white!">
                                <i className={feature.icon}></i>
                            </div>

                            <h3 className="mb-3! text-lg! font-semibold! text-brand-forest!">
                                {feature.title}
                            </h3>

                            <p className="text-sm! leading-[1.6]! text-brand-text-light!">
                                {feature.description}
                            </p>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default WhyGlowrare