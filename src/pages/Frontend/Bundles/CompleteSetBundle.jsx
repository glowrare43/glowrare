import React from 'react'

const CompleteSetBundle = () => {
    return (
        <section
            className="
                    mx-auto! max-w-[1180px]!
                    px-6! py-[72px]!
                    max-[860px]:px-[22px]! max-[860px]:py-[52px]!
                "
        >
            <div className="flex! justify-center!">
                <div
                    className="
                            grid! w-full! max-w-[920px]!
                            items-center! overflow-hidden!
                            rounded-[20px]!
                            border! border-[#ece5d8]!
                            bg-white!
                            shadow-[0_18px_40px_-22px_rgba(19,31,73,0.28)]!
                            min-[901px]:grid-cols-[0.85fr_1fr]!
                            max-[900px]:grid-cols-1!
                        "
                >
                    {/* Image */}
                    <div
                        className="
                                flex! h-full! items-center! justify-center!
                                bg-[linear-gradient(160deg,#fff_0%,#fbeef0_100%)]!
                                p-[34px]!
                            "
                    >
                        <img
                            src="/assests/bundle 04.png"
                            alt="Glowrare Complete Glow Set"
                            className="
                                    block! w-full!
                                    drop-shadow-[0_18px_22px_rgba(19,31,73,0.16)]!
                                "
                        />
                    </div>

                    {/* Content */}
                    <div
                        className="
                                px-10! py-[30px]!
                                min-[901px]:pl-2!
                                max-[900px]:px-8! max-[900px]:pb-[34px]! max-[900px]:pt-2!
                                max-[900px]:text-center!
                            "
                    >
                        <h3
                            className="
                                    mb-2.5!
                                    font-['Playfair_Display',serif]!
                                    text-[25px]! font-bold!
                                    text-[#1B2B65]!
                                "
                        >
                            Complete Glow Set
                        </h3>

                        <p
                            className="
                                    mb-5!
                                    text-[14.5px]! leading-[1.75]!
                                    text-[#6d6d78]!
                                    max-[900px]:mx-auto! max-[900px]:max-w-[420px]!
                                "
                        >
                            Includes: Glowrare Whitening Face Wash (100ml)
                            &amp; Glowrare Skin Whitening Cream (30g) —
                            cleanses, exfoliates and protects for a radiant
                            glow.
                        </p>

                        <div
                            className="
                                    mb-6! flex! items-baseline! gap-3.5!
                                    max-[900px]:justify-center!
                                "
                        >
                            <span className="text-[21px]! font-bold! text-[#C81E2C]!">
                                Rs. 2,600/-
                            </span>

                            <span className="text-base! text-[#9a9aa4]! line-through!">
                                Rs. 2,900/-
                            </span>
                        </div>

                        <button
                            data-name="Complete Glow Set"
                            data-price="2600"
                            data-image="/assests/bundle 04.png"
                            className="
                                    inline-flex! items-center! justify-center! gap-2.5!
                                    rounded-[6px]! border-0!
                                    bg-[#1B2B65]!
                                    px-8! py-3.5!
                                    text-[13.5px]! font-semibold!
                                    text-white!
                                    transition-all! duration-300!
                                    hover:-translate-y-0.5!
                                    hover:bg-[#C81E2C]!
                                    max-[900px]:mx-auto!
                                "
                        >
                            <i className="fa-solid fa-cart-shopping" />
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CompleteSetBundle
