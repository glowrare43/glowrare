import React from 'react'

const TopSellerBundle = () => {
  return (
     <section
                className="
                    mx-auto! max-w-[1180px]!
                    px-6! py-[72px]!
                    max-[860px]:px-[22px]! max-[860px]:py-[52px]!
                "
            >
                <div className="mb-11! text-center!">
                    <h2
                        className="
                            font-['Playfair_Display',serif]!
                            text-[30px]! font-bold!
                            text-[#1B2B65]!
                        "
                    >
                        Our Top Seller Bundle
                    </h2>

                    <p className="mt-2! text-[14.5px]! text-[#6d6d78]!">
                        The complete Glowrare routine, loved by our customers.
                    </p>
                </div>

                <div
                    className="
                        group!
                        relative! grid! overflow-hidden!
                        rounded-[20px]!
                        border! border-[#ece5d8]!
                        bg-white!
                        shadow-[0_18px_40px_-22px_rgba(19,31,73,0.28)]!
                        transition-shadow! duration-300!
                        hover:shadow-[0_26px_54px_-20px_rgba(19,31,73,0.34)]!
                        min-[901px]:grid-cols-[1.05fr_0.95fr]!
                        max-[900px]:grid-cols-1!
                    "
                >

                    {/* Image */}
                    <div
                        className="
                            relative! flex! items-center! justify-center!
                            p-[46px]!
                            bg-[radial-gradient(120%_120%_at_20%_15%,#fff_0%,#fbeef0_55%,#f7e4e7_100%)]!
                            before:pointer-events-none!
                            before:absolute! before:inset-[22px]!
                            before:rounded-[14px]!
                            before:border! before:border-[rgba(27,43,101,0.09)]!
                            max-[900px]:p-8!
                        "
                    >
                        <img
                            src="/assests/allpic.png"
                            alt="Glowrare Top Seller Bundle"
                            className="
                                relative! block! w-full! max-w-[340px]!
                                drop-shadow-[0_22px_30px_rgba(19,31,73,0.18)]!
                                transition-transform! duration-500!
                                group-hover:-translate-y-1!
                                group-hover:scale-[1.02]!
                            "
                        />
                    </div>

                    {/* Content */}
                    <div
                        className="
                            flex! flex-col! justify-center!
                            py-12! pr-[52px]! pl-2!
                            max-[900px]:px-[30px]! max-[900px]:pb-10! max-[900px]:pt-2!
                        "
                    >
                        <span
                            className="
                                relative! mb-5! inline-flex! w-fit!
                                items-center! gap-2!
                                rounded-[3px]!
                                bg-[#1B2B65]!
                                px-4! py-2!
                                text-[11px]! font-semibold! tracking-[2px]!
                                text-white!
                                before:h-1.5! before:w-1.5!
                                before:rounded-full! before:bg-[#C81E2C]!
                            "
                        >
                            TOP SELLER
                        </span>

                        <h3
                            className="
                                mb-3.5!
                                font-['Playfair_Display',serif]!
                                text-[30px]! font-bold! leading-[1.25]!
                                text-[#1B2B65]!
                            "
                        >
                            Complete Glow Trio
                        </h3>

                        <p
                            className="
                                mb-[22px]! max-w-[420px]!
                                border-l-2! border-[#ece5d8]!
                                pl-4!
                                text-[14.5px]! leading-[1.8]!
                                text-[#6d6d78]!
                            "
                        >
                            Includes: Glowrare Hand &amp; Foot Cream (60g),
                            Glowrare Whitening Face Wash (100ml) &amp; Glowrare
                            Skin Whitening Cream (30g).
                        </p>

                        <div className="mb-[26px]! flex! flex-wrap! items-baseline! gap-3.5!">
                            <span className="text-[28px]! font-bold! tracking-[0.2px]! text-[#C81E2C]!">
                                Rs. 3,800/-
                            </span>

                            <span className="text-base! text-[#9a9aa4]! line-through!">
                                Rs. 4,350/-
                            </span>

                            <span
                                className="
                                    rounded-[3px]! border!
                                    border-[#dcefdc]!
                                    bg-[#f1f7ef]!
                                    px-[11px]! py-1!
                                    text-xs! font-semibold! tracking-[0.3px]!
                                    text-[#2c7a44]!
                                "
                            >
                                Save Rs. 550
                            </span>
                        </div>

                        <button
                            data-name="Complete Glow Trio Bundle"
                            data-price="3800"
                            data-image="/assests/allpic.png"
                            className="
                                inline-flex! w-fit!
                                items-center! justify-center! gap-2.5!
                                rounded-[6px]! border-0!
                                bg-[#1B2B65]!
                                px-[34px]! py-[15px]!
                                text-sm! font-semibold! tracking-[0.3px]!
                                text-white!
                                shadow-[0_12px_24px_-12px_rgba(27,43,101,0.6)]!
                                transition-all! duration-300!
                                hover:-translate-y-0.5!
                                hover:bg-[#C81E2C]!
                                hover:shadow-[0_16px_28px_-12px_rgba(200,30,44,0.45)]!
                                active:translate-y-0!
                            "
                        >
                            <i className="fa-solid fa-cart-shopping" />
                            Add to Cart
                        </button>
                    </div>
                </div>
            </section>
  )
}

export default TopSellerBundle
