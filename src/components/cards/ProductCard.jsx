import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cart_slice";

const ProductCard = ({ data }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(
            addToCart({
                id: data.id,
                slug: data.slug,
                name: data.name,
                image: data.image,
                price: Number(data.price.replace(/[^0-9]/g, "")),
                quantity: 1,
            })
        )
    }

    return (
        <div className="group relative! overflow-hidden! rounded-xl! border! border-brand-border! bg-white! shadow-[0_4px_18px_rgba(37,77,58,0.06)]! transition-all! duration-500! hover:shadow-[0_18px_40px_rgba(37,77,58,0.14)]!">

            <div className="relative! m-1.75! h-75! overflow-hidden! rounded-[9px]! bg-brand-mist! max-[576px]:h-62.5!">

                <div className="pointer-events-none! absolute! inset-0! z-1! bg-linear-to-t! from-black/10! via-transparent! to-transparent! opacity-0! transition-opacity! duration-500! group-hover:opacity-100!" />

                <span
                    className={`absolute! left-3! top-3! z-3! rounded-full! px-2.75! py-1.25! text-[9px]! font-bold! tracking-[0.5px]! text-white! shadow-[0_4px_10px_rgba(0,0,0,0.12)]!
                        ${data?.badge === "SALE"
                            ? "bg-brand-ruby!"
                            : "bg-brand-forest!"
                        }`}
                >
                    {data?.badge}
                </span>

                <img
                    src={data?.image}
                    alt={data?.name}
                    className="block! h-full! w-full! object-cover! transition-transform! duration-700! ease-out! group-hover:scale-[1.07]!"
                />

                <div className="pointer-events-none! absolute! bottom-0! left-0! right-0! h-13.75! bg-linear-to-t! from-black/10! to-transparent! opacity-0! transition-opacity! duration-500! group-hover:opacity-100!" />
            </div>

            <div className="px-3.75! pb-4! pt-0.5! text-center!">

                <div className="mb-1.5! flex! items-center! justify-center! gap-0.5!">
                    <span className="text-[13px]! tracking-[1px]! text-brand-gold! sm:text-[15px]! md:text-[18px]!">
                        ★★★★★
                    </span>

                    <span className="ml-1! text-[10px]! text-brand-muted! sm:text-[11px]! md:text-[12px]!">
                        {data?.rating}
                    </span>
                </div>

                <h3 className="m-0! min-h-9! px-1.25! text-[14px]! font-semibold! leading-5! text-brand-text! transition-colors! duration-300! group-hover:text-brand-forest! sm:text-[15px]! md:text-[16px]!">
                    {data?.name}
                </h3>

                <p className="mx-auto! mb-2! mt-1.25! min-h-8.5! max-w-72.5! overflow-hidden! text-[11px]! font-normal! leading-4.5! text-brand-muted! line-clamp-2! sm:text-[11.5px]! md:text-[12px]!">
                    {data?.shortDescription}
                </p>

                {/* Price */}
                <div className="mb-3.25!">
                    <h4 className="m-0! text-[18px]! font-bold! tracking-[-0.2px]! text-brand-forest! sm:text-[19px]! md:text-[20px]!">
                        {data?.price}
                    </h4>
                </div>

                <div className="mt-3.25! flex! gap-2!">
                    <Link
                        to={`/productDetails/${data?.slug}`}
                        className="flex! min-h-9.25! flex-1! items-center! justify-center! gap-1.5! rounded-md! border! border-brand-forest! bg-transparent! px-3! py-2.25! text-[11px]! font-semibold! tracking-[0.2px]! text-brand-forest! no-underline! transition-all! duration-300! hover:-translate-y-0.5! hover:bg-brand-forest! hover:text-white! hover:shadow-[0_8px_18px_rgba(37,77,58,0.14)]! sm:text-[11.5px]! md:text-[12px]!"
                    >
                        <i className="fa-regular fa-eye text-[11px]! sm:text-[11.5px]! md:text-[12px]!" />

                        <span>
                            View Detail
                        </span>
                    </Link>

                    <button
                        type="button"
                        onClick={handleAddToCart}
                        className="group/cart relative! flex! min-h-9.25! flex-1! items-center! justify-center! gap-1.5! overflow-hidden! rounded-md! border! border-brand-forest! bg-brand-forest! px-3! py-2.25! text-[11px]! font-semibold! tracking-[0.2px]! text-white! transition-all! duration-300! hover:-translate-y-0.5! hover:border-brand-green! hover:bg-brand-green! hover:shadow-[0_8px_18px_rgba(37,77,58,0.18)]! sm:text-[11.5px]! md:text-[12px]!"
                    >
                        <i className="fa-solid fa-cart-shopping relative! z-1! text-[11px]! transition-transform! duration-300! group-hover/cart:scale-110! sm:text-[11.5px]! md:text-[12px]!" />

                        <span className="relative! z-1!">
                            Add to Cart
                        </span>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default ProductCard