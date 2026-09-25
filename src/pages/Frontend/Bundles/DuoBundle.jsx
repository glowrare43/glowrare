import React from 'react'

const DuoBundle = () => {
    const bundles = [
        {
            name: "Radiance Duo Bundle",
            description:
                "Includes: Glowrare Skin Whitening Cream (30ml) & Glowrare Whitening Face Wash (100ml).",
            price: "Rs. 2,600/-",
            oldPrice: "Rs. 2,900/-",
            image: "/assests/bundle 02.png",
        },
        {
            name: "Glow Duo Bundle",
            description:
                "Includes: Glowrare Whitening Face Wash (100ml) & Glowrare Skin Whitening Cream (30ml).",
            price: "Rs. 2,600/-",
            oldPrice: "Rs. 2,900/-",
            image: "/assests/bundle 03.png",
        },
    ];

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
                    More Bundles To Love
                </h2>

                <p className="mt-2! text-[14.5px]! text-[#6d6d78]!">
                    Pair up our favorites and save on every order.
                </p>
            </div>

            <div
                className="
                        grid! grid-cols-2! gap-7!
                        max-[860px]:grid-cols-1!
                    "
            >
                {bundles.map((bundle, index) => (
                    <div
                        key={index}
                        className="
                                group!
                                flex! flex-col! overflow-hidden!
                                rounded-2xl!
                                border! border-[#ece5d8]!
                                bg-white!
                                shadow-[0_18px_40px_-22px_rgba(19,31,73,0.28)]!
                                transition-all! duration-300!
                                hover:-translate-y-[5px]!
                                hover:shadow-[0_26px_54px_-20px_rgba(19,31,73,0.34)]!
                            "
                    >
                        {/* Product Image */}
                        <div
                            className="
                                    relative! bg-[linear-gradient(160deg,#fff_0%,#fbeef0_100%)]!
                                    p-[30px]!
                                "
                        >
                            <img
                                src={bundle.image}
                                alt={bundle.name}
                                className="
                                        block! w-full! rounded-lg!
                                        drop-shadow-[0_14px_18px_rgba(19,31,73,0.14)]!
                                        transition-transform! duration-400!
                                        group-hover:scale-[1.03]!
                                    "
                            />
                        </div>

                        {/* Body */}
                        <div
                            className="
                                    flex! flex-1! flex-col!
                                    px-[26px]! pb-7! pt-1.5!
                                    max-[480px]:px-[22px]!
                                "
                        >
                            <h3
                                className="
                                        mb-2!
                                        font-['Playfair_Display',serif]!
                                        text-xl! font-bold!
                                        text-[#1B2B65]!
                                    "
                            >
                                {bundle.name}
                            </h3>

                            <p
                                className="
                                        mb-[18px]!
                                        text-[13.5px]! leading-[1.7]!
                                        text-[#6d6d78]!
                                    "
                            >
                                {bundle.description}
                            </p>

                            <div className="mb-[18px]! flex! flex-wrap! items-baseline! gap-3.5!">
                                <span className="text-[21px]! font-bold! text-[#C81E2C]!">
                                    {bundle.price}
                                </span>

                                <span className="text-base! text-[#9a9aa4]! line-through!">
                                    {bundle.oldPrice}
                                </span>
                            </div>

                            <button
                                data-name={bundle.name}
                                data-price="2600"
                                data-image={bundle.image}
                                className="
                                        mt-auto! inline-flex! w-full!
                                        items-center! justify-center! gap-2.5!
                                        rounded-[6px]! border-0!
                                        bg-[#1B2B65]!
                                        px-5! py-[13px]!
                                        text-[13.5px]! font-semibold!
                                        text-white!
                                        transition-all! duration-300!
                                        hover:bg-[#C81E2C]!
                                    "
                            >
                                <i className="fa-solid fa-cart-shopping" />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DuoBundle
