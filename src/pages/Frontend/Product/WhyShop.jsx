import React from 'react'

const WhyShop = () => {
    const whyItems = [
        {
            icon: "fa-regular fa-gem",
            title: "Premium Quality",
            description:
                "Every product is carefully selected for the best results.",
        },
        {
            icon: "fa-solid fa-truck-fast",
            title: "Fast Delivery",
            description:
                "Quick and reliable delivery straight to your door.",
        },
        {
            icon: "fa-solid fa-headset",
            title: "Customer Support",
            description:
                "We're always here to help with any questions.",
        },
    ];
    return (
        <section className="px-[6%] py-[50px] bg-white">

            {/* Heading */}

            <div
                className="
                        max-w-[650px]
                        mx-auto
                        text-center
                    "
            >

                <span
                    className="
                            text-[#b66d82]
                            text-[13px]
                            font-bold
                            tracking-[3px]
                        "
                >
                    THE GLOWRARE DIFFERENCE
                </span>

                <h2
                    className="
                            text-[#3b242b]
                            font-serif
                            text-[40px]
                            mt-2.5
                            mb-2.5
                            max-[650px]:text-[32px]
                        "
                >
                    Why Shop With Us?
                </h2>

                <p
                    className="
                            text-[#777]
                            leading-[1.7]
                        "
                >
                    Quality, authenticity and care in every product we offer.
                </p>

            </div>


            {/* Why Grid */}

            <div
                className="
                        max-w-[1100px]
                        mx-auto
                        mt-10
                        grid
                        grid-cols-3
                        gap-5
                        max-[850px]:grid-cols-1
                    "
            >

                {whyItems.map((item) => (
                    <div
                        key={item.title}
                        className="
                                text-center
                                px-[25px]
                                py-[35px]
                                border
                                border-[#f2dce3]
                                rounded-[20px]
                                transition-all
                                duration-300
                                hover:-translate-y-2
                                hover:shadow-[0_15px_35px_rgba(90,40,55,0.10)]
                            "
                    >

                        <div
                            className="
                                    w-[65px]
                                    h-[65px]
                                    mx-auto
                                    mb-5
                                    flex
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#fff0f5]
                                    text-[#b66d82]
                                    text-[25px]
                                "
                        >
                            <i className={item.icon}></i>
                        </div>

                        <h3
                            className="
                                    text-[#3b242b]
                                    mb-3
                                    text-lg
                                    font-semibold
                                "
                        >
                            {item.title}
                        </h3>

                        <p
                            className="
                                    text-[#777]
                                    leading-[1.6]
                                    text-sm
                                "
                        >
                            {item.description}
                        </p>

                    </div>
                ))}

            </div>

        </section>
    )
}

export default WhyShop
