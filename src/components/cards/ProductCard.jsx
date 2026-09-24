import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
    return (
        <div className="group relative! overflow-hidden! rounded-xl! border! border-brand-border! bg-white! shadow-[0_4px_18px_rgba(37,77,58,0.06)]! transition-all! duration-500! hover:shadow-[0_18px_40px_rgba(37,77,58,0.14)]!">

            <div className="relative! m-1.75! h-75! overflow-hidden! rounded-[9px]! bg-brand-mist! max-[576px]:h-62.5!">

                <div className="pointer-events-none! absolute! inset-0! z-1! bg-linear-to-t! from-black/10! via-transparent! to-transparent! opacity-0! transition-opacity! duration-500! group-hover:opacity-100!" />

                <span
                    className={`absolute! left-3! top-3! z-3! rounded-full! px-2.75! py-1.25! text-[9px]! font-bold! tracking-[0.5px]! text-white! shadow-[0_4px_10px_rgba(0,0,0,0.12)]!
                        ${data?.badge === "SALE" ? "bg-brand-ruby!" : "bg-brand-forest!"}
                        `}
                >
                    {data?.badge}
                </span>

                <img src={data?.image} alt={data?.name} className="block! h-full! w-full! object-cover! transition-transform! duration-700! ease-out! group-hover:scale-[1.07]!" />

                <div className="pointer-events-none! absolute! bottom-0! left-0! right-0! h-13.75! bg-linear-to-t! from-black/10! to-transparent! opacity-0! transition-opacity! duration-500! group-hover:opacity-100!" />
            </div>


            <div className="px-3.75! pb-4! pt-0.5! text-center!">
                <div className="mb-1.5! flex! items-center! justify-center! gap-0.5!">
                    <span className="text-[13px]! tracking-[1px]! text-brand-gold!">
                        ★★★★★
                    </span>
                    <span className="ml-1! text-[9px]! text-brand-muted!">{data?.rating}</span>
                </div>


                {/* Product Name */}
                <h3 className="m-0! min-h-9! px-1.25! text-[13px]! font-semibold! leading-4.5! text-brand-text! transition-colors! duration-300! group-hover:text-brand-forest!">
                    {data?.name}
                </h3>


                {/* Short Description */}
                <p className="mx-auto! mt-1.25! mb-2! min-h-8.5! max-w-72.5! overflow-hidden! text-[10px]! font-normal! leading-4.25! text-brand-muted! line-clamp-2!">
                    {data?.description}
                </p>


                {/* Price */}
                <div className="mb-3.25!">
                    <h4 className="m-0! text-[17px]! font-bold! tracking-[-0.2px]! text-brand-forest!">{data?.price}</h4>
                </div>


                {/* Add To Cart */}
                <Link to="#" className="group/cart relative! flex! min-h-9.25! w-full! items-center! justify-center! gap-2! overflow-hidden!
                rounded-md! border! border-brand-forest! bg-brand-forest! px-5! py-2.25! text-[11px]! font-semibold! tracking-[0.2px]!
            text-white! no-underline! transition-all! duration-300! hover:-translate-y-0.5! hover:bg-brand-green! hover:border-brand-green! hover:shadow-[0_8px_18px_rgba(37,77,58,0.18)]!">
                    
                    <i className="fa-solid fa-cart-shopping relative! z-1! text-[10px]! transition-transform! duration-300! group-hover/cart:scale-110!" />

                    <span className="relative! z-1!">Add to Cart</span>
                </Link>
            </div>

        </div>
    )
}

export default ProductCard