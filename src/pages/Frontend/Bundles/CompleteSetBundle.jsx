import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/slices/cart_slice";
import CompleteSetBundlePic from "../../../assets/CompleteSetBundle.png";

const CompleteSetBundle = () => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(
            addToCart({
                id: "complete-glow-set",
                name: "Complete Glow Set",
                price: 2600,
                image: CompleteSetBundlePic,
                quantity: 1,
            })
        )
    }

    return (
        <section className="section">
            <div className="custom-container">

                <div className="flex! justify-center!">
                    <div className="group grid! w-full!  overflow-hidden! rounded-3xl! border! border-brand-border! bg-brand-surface! shadow-[0_18px_50px_-28px_rgba(37,77,58,0.35)]! transition-all! duration-500! hover:-translate-y-1! hover:shadow-[0_28px_60px_-25px_rgba(37,77,58,0.4)]! min-[901px]:grid-cols-[0.9fr_1.1fr]! max-[900px]:grid-cols-1!">

                        {/* Image */}
                        <div className="relative! flex! min-h-95! items-center! justify-center! overflow-hidden! bg-brand-mist! px-8! py-10! max-[900px]:min-h-87.5! max-[600px]:min-h-75! max-[600px]:px-6! max-[600px]:py-7!">
                            <img
                                src={CompleteSetBundlePic}
                                alt="Glowrare Complete Glow Set"
                                className="relative! z-2! block! h-full! w-full! max-h-77.5! max-w-97.5! object-contain! drop-shadow-[0_22px_28px_rgba(37,77,58,0.18)]! transition-all! duration-700! scale-[1.7]! max-[900px]:max-h-70! max-[600px]:max-h-58.75!"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex! flex-col! justify-center! px-10! py-10! max-[900px]:px-9! max-[900px]:py-9! max-[600px]:px-6! max-[600px]:py-8! max-[600px]:text-center!">
                            <div className="mb-4! flex! items-center! gap-2! text-[10px]! font-bold! uppercase! tracking-[2px]! text-brand-green! max-[600px]:justify-center!">
                                <span className="h-2! w-2! rounded-full! bg-brand-ruby!" />
                                Glow Essentials
                            </div>

                            <h3 className="mb-3! font-['Playfair_Display',serif]! text-[29px]! font-bold! leading-tight! text-brand-forest! max-[600px]:text-[27px]!">
                                Complete Glow Set
                            </h3>

                            <p className="mb-6! max-w-112.5! border-l-2! border-brand-champagne! pl-4! text-[14px]! leading-[1.8]! text-brand-text-light! max-[600px]:mx-auto! max-[600px]:border-l-0! max-[600px]:border-t-2! max-[600px]:pl-0! max-[600px]:pt-3!">
                                Includes Glowrare Whitening Face Wash (100ml) &amp;
                                Glowrare Skin Whitening Cream (30g) — cleanses,
                                exfoliates and protects for a radiant glow.
                            </p>

                            <div className="mb-6! flex! flex-wrap! items-center! gap-2! max-[600px]:justify-center!">
                                <span className="rounded-full! border! border-brand-green-light! bg-brand-mist! px-3! py-1.5! text-[11px]! font-medium! text-brand-forest!">
                                    Face Wash
                                </span>

                                <span className="rounded-full! border! border-brand-green-light! bg-brand-mist! px-3! py-1.5! text-[11px]! font-medium! text-brand-forest!">
                                    Skin Cream
                                </span>
                            </div>

                            <div className="mb-7! flex! flex-wrap! items-center! gap-3.5! max-[600px]:justify-center!">
                                <span className="text-[25px]! font-bold! text-brand-ruby!">
                                    Rs. 2,600/-
                                </span>

                                <span className="text-[15px]! text-brand-text-light! line-through! opacity-70!">
                                    Rs. 2,900/-
                                </span>

                                <span className="rounded-full! border! border-brand-green-light! bg-brand-mist! px-3! py-1! text-[11px]! font-semibold! text-brand-forest!">
                                    Save Rs. 300
                                </span>
                            </div>

                            <button
                                type="button"
                                onClick={handleAddToCart}
                                className="inline-flex! w-fit! items-center! justify-center! gap-2.5! rounded-[7px]! border! border-brand-forest! bg-brand-forest! px-7! py-3.5! text-[13.5px]! font-semibold! text-white! shadow-[0_12px_25px_-14px_rgba(37,77,58,0.7)]! transition-all! duration-300! hover:-translate-y-0.5! hover:border-brand-ruby! hover:bg-brand-ruby! hover:shadow-[0_16px_28px_-14px_rgba(167,25,36,0.45)]! active:translate-y-0! max-[600px]:mx-auto! max-[500px]:w-full!"
                            >
                                <i className="fa-solid fa-cart-shopping" />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CompleteSetBundle