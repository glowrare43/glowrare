import React from 'react'
import { shopProductsCardData } from '../../../constant/cards_data'

const ProductSection = () => {
    return (
        <section
            className="
                    w-[90%]
                    max-w-[1200px]
                    mx-auto
                    my-[90px]
                    max-[650px]:w-[92%]
                    max-[650px]:my-[60px]
                "
        >

            {/* Heading */}

            <div
                className="
                        text-center
                        mb-[60px]
                    "
            >
                <span
                    className="
                            text-[#e85c88]
                            text-sm
                            font-bold
                            tracking-[3px]
                        "
                >
                    OUR COLLECTION
                </span>

                <h2
                    className="
                            mt-[14px]
                            mb-[14px]
                            text-[#222]
                            font-serif
                            text-[46px]
                            uppercase
                            max-[650px]:text-[36px]
                        "
                >
                    Shop All Products
                </h2>

                <p
                    className="
                            text-[#777]
                            text-base
                            max-[650px]:text-sm
                        "
                >
                    Explore our full range of premium skincare essentials.
                </p>
            </div>


            {/* Product Grid */}

            <div
                className="
                        grid
                        grid-cols-2
                        gap-[35px]
                        max-[850px]:gap-[25px]
                        max-[650px]:grid-cols-1
                    "
            >

                {shopProductsCardData.map((product, index) => (
                    <div
                        key={product.id}
                        className={`
                                group
                                relative
                                bg-white
                                rounded-[20px]
                                overflow-hidden
                                border
                                border-[#f3dce4]
                                shadow-[0_8px_25px_rgba(0,0,0,0.07)]
                                transition-all
                                duration-400
                                hover:-translate-y-2.5
                                hover:shadow-[0_20px_45px_rgba(232,92,136,0.20)]
                                ${index === 2
                                ? `
                                        col-span-2
                                        justify-self-center
                                        w-[calc(50%-17.5px)]
                                        max-[850px]:w-full
                                        max-[650px]:col-span-1
                                        max-[650px]:w-full
                                    `
                                : ""
                            }
                            `}
                    >

                        {/* Badge */}

                        <span
                            className={`
                                    absolute
                                    top-[18px]
                                    left-[18px]
                                    z-10
                                    px-[15px]
                                    py-[7px]
                                    rounded-full
                                    text-white
                                    text-[11px]
                                    font-bold
                                    tracking-[1px]
                                    ${product.badgeClass}
                                `}
                        >
                            {product.badge}
                        </span>


                        {/* Wishlist */}

                        <button
                            type="button"
                            className="
                                    absolute
                                    top-4
                                    right-4
                                    z-10
                                    w-[42px]
                                    h-[42px]
                                    flex
                                    items-center
                                    justify-center
                                    border-none
                                    rounded-full
                                    bg-white
                                    text-[#e85c88]
                                    text-lg
                                    cursor-pointer
                                    shadow-[0_5px_15px_rgba(0,0,0,0.12)]
                                    transition-all
                                    duration-300
                                    hover:bg-[#e85c88]
                                    hover:text-white
                                    hover:scale-110
                                "
                        >
                            <i className="fa-regular fa-heart"></i>
                        </button>


                        {/* Product Image */}

                        <div
                            className="
                                    w-full
                                    h-[340px]
                                    overflow-hidden
                                    bg-[#fff7f9]
                                    max-[650px]:h-[300px]
                                "
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="
                                        w-full
                                        h-full
                                        object-cover
                                        block
                                        transition-transform
                                        duration-500
                                        group-hover:scale-[1.07]
                                    "
                            />
                        </div>


                        {/* Product Info */}

                        <div
                            className="
                                    px-[25px]
                                    pt-7
                                    pb-[30px]
                                    text-center
                                "
                        >

                            {/* Rating */}

                            <div
                                className="
                                        text-[#f5b400]
                                        text-[17px]
                                        tracking-[3px]
                                        mb-3
                                    "
                            >
                                ★★★★★
                            </div>


                            {/* Name */}

                            <h3
                                className="
                                        text-[#222]
                                        text-[21px]
                                        min-h-[50px]
                                        m-0
                                        mb-2.5
                                        font-serif
                                    "
                            >
                                {product.name}
                            </h3>


                            {/* Price */}

                            <div
                                className="
                                        text-[#e85c88]
                                        text-xl
                                        font-bold
                                        mb-[22px]
                                    "
                            >
                                {product.price}
                            </div>


                            {/* Buttons */}

                            <div
                                className="
                                        flex
                                        gap-3
                                        justify-center
                                        items-center
                                        max-[400px]:flex-col
                                    "
                            >

                                <button
                                    type="button"
                                    className="
                                            flex-1
                                            min-h-[44px]
                                            flex
                                            items-center
                                            justify-center
                                            rounded-lg
                                            border
                                            border-[#e85c88]
                                            bg-transparent
                                            text-[#e85c88]
                                            text-[13px]
                                            font-semibold
                                            transition-all
                                            duration-300
                                            hover:bg-[#e85c88]
                                            hover:text-white
                                            max-[400px]:w-full
                                        "
                                >
                                    View Details
                                </button>


                                <button
                                    type="button"
                                    data-name={product.name}
                                    data-price={product.priceValue}
                                    data-image={product.image}
                                    className="
                                            flex-1
                                            min-h-[44px]
                                            flex
                                            items-center
                                            justify-center
                                            gap-[7px]
                                            rounded-lg
                                            border-none
                                            bg-[#e85c88]
                                            text-white
                                            text-[13px]
                                            font-semibold
                                            cursor-pointer
                                            transition-all
                                            duration-300
                                            hover:bg-[#d94473]
                                            hover:-translate-y-0.5
                                            max-[400px]:w-full
                                        "
                                >
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    Add to Cart
                                </button>

                            </div>

                        </div>

                    </div>
                ))}

            </div>

        </section>
    )
}

export default ProductSection
