import React from 'react'

const ProductBanner = () => {
    return (
        <section
            className="
                    min-h-[400px]
                    flex
                    items-center
                    justify-center
                    text-center
                    px-5
                    py-[55px]
                    bg-linear-to-b
                    from-[#fff0f5]
                    to-white
                "
        >
            <div className="max-w-[700px]">

                <span
                    className="
                            text-[#b66d82]
                            text-[13px]
                            font-bold
                            tracking-[3px]
                        "
                >
                    OUR COLLECTION
                </span>

                <h1
                    className="
                            mt-3
                            mb-3
                            text-[#3b242b]
                            font-serif
                            text-[45px]
                            leading-[1.2]
                            max-[650px]:text-[36px]
                        "
                >
                    Discover Your Glow
                </h1>

                <p
                    className="
                            max-w-[550px]
                            mx-auto
                            mb-[30px]
                            text-[#777]
                            leading-[1.8]
                            max-[650px]:text-sm
                        "
                >
                    Premium skincare products carefully crafted to nourish,
                    brighten and protect your skin every single day.
                </p>

            </div>
        </section>
    )
}

export default ProductBanner
