import React from "react";
import TopSellerBundlePic from "../../../assets/top-seller-bundle.png";

const TopSellerBundle = () => {
    return (
        <section className="section pt-0!">
            <div className="custom-container">

                <div className="mb-11! text-center! max-[500px]:mb-8!">
                    <span className="mb-3! inline-block! text-[11px]! font-semibold! uppercase! tracking-[2.5px]! text-brand-green!">
                        Customer Favorite
                    </span>
                    <h2 className="font-['Playfair_Display',serif]! text-[32px]! font-bold! leading-tight! text-brand-forest! max-[600px]:text-[27px]!">
                        Our Top Seller Bundle
                    </h2>
                    <p className="mx-auto! mt-2.5! max-w-130! text-[14.5px]! leading-7! text-brand-text-light! max-[500px]:text-[14px]!">
                        The complete Glowrare routine, loved by our customers.
                    </p>
                </div>

                <div className="group relative! grid! overflow-hidden! rounded-3xl! border! border-brand-border! bg-brand-surface! shadow-[0_18px_50px_-28px_rgba(37,77,58,0.35)]! transition-all! duration-500! hover:-translate-y-1! hover:shadow-[0_28px_60px_-25px_rgba(37,77,58,0.4)]! min-[901px]:grid-cols-[1.02fr_0.98fr]! max-[900px]:grid-cols-1!">

                    {/* Image */}
                    <div className="relative! flex! min-h-125! items-center! justify-center! overflow-hidden! bg-brand-mist! px-10! py-12! max-[900px]:min-h-100! max-[900px]:px-8! max-[900px]:py-10! max-[600px]:min-h-82.5! max-[600px]:px-5! max-[600px]:py-7!">
                        <img
                            src={TopSellerBundlePic}
                            alt="Glowrare Top Seller Bundle"
                            className="relative! z-2! block! h-full! w-full! object-cover! drop-shadow-[0_25px_30px_rgba(37,77,58,0.18)]! transition-all! duration-700! scale-[1.45]!"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex! flex-col! justify-center! px-12! py-12! max-[1000px]:px-9! max-[900px]:px-10! max-[900px]:py-11! max-[600px]:px-6! max-[600px]:py-8!">
                        <div className="mb-5! flex! items-center! gap-2! text-[11px]! font-bold! uppercase! tracking-[2px]! text-brand-green!">
                            <span className="h-2! w-2! rounded-full! bg-brand-ruby!" />
                            Top Seller
                        </div>

                        <h3 className="mb-4! font-['Playfair_Display',serif]! text-[34px]! font-bold! leading-[1.2]! text-brand-forest! max-[600px]:text-[28px]!">
                            Complete Glow Trio
                        </h3>

                        <p className="mb-6! max-w-112.5! border-l-2! border-brand-champagne! pl-4! text-[14.5px]! leading-[1.8]! text-brand-text-light! max-[600px]:text-[14px]!">
                            Includes Glowrare Hand &amp; Foot Cream (60g), Whitening Face Wash (100ml) &amp; Skin Whitening Cream (30g).
                        </p>

                        <div className="mb-6! flex! flex-wrap! gap-2!">
                            {["Hand & Foot Cream", "Face Wash", "Skin Cream"].map((item) => (
                                <span key={item} className="rounded-full! border! border-brand-green-light! bg-brand-mist! px-3! py-1.5! text-[11px]! font-medium! text-brand-forest!">
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="mb-7! flex! flex-wrap! items-center! gap-x-3! gap-y-2!">
                            <span className="text-[30px]! font-bold! tracking-tight! text-brand-ruby! max-[600px]:text-[27px]!">
                                Rs. 3,800/-
                            </span>
                            <span className="text-[15px]! text-brand-text-light! line-through! opacity-70!">
                                Rs. 4,350/-
                            </span>
                            <span className="rounded-full! border! border-brand-green-light! bg-brand-mist! px-3! py-1! text-[11px]! font-semibold! text-brand-forest!">
                                Save Rs. 550
                            </span>
                        </div>

                        <button
                            data-name="Complete Glow Trio Bundle"
                            data-price="3800"
                            data-image="/assests/allpic.png"
                            className="inline-flex! w-fit! items-center! justify-center! gap-2.5! rounded-[7px]! border! border-brand-forest! bg-brand-forest! px-7! py-3.5! text-sm! font-semibold! tracking-[0.2px]! text-white! shadow-[0_12px_25px_-14px_rgba(37,77,58,0.7)]! transition-all! duration-300! hover:-translate-y-0.5! hover:border-brand-ruby! hover:bg-brand-ruby! active:translate-y-0! max-[500px]:w-full!"
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

export default TopSellerBundle