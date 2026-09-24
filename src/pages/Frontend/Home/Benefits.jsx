import React from 'react'

const Benefits = () => {
    return (
        <section className="section">
            <div className="custom-container">

                <div className="grid! grid-cols-1! overflow-hidden! rounded-[18px]! bg-brand-surface! border border-brand-border! shadow-[0_10px_40px_rgba(37,77,58,0.08)]! md:grid-cols-2! lg:grid-cols-4!">

                    <div className="flex! items-center! gap-4.5! border-b! border-brand-border! p-7.5! lg:border-b-0! lg:border-r!">
                        <div className="flex! h-15! w-15! shrink-0! items-center! justify-center! rounded-full! bg-brand-green-light! text-[24px]! text-brand-forest!">
                            <i className="fa-solid fa-truck-fast"></i>
                        </div>

                        <div>
                            <h3 className="mb-2! text-[18px]! font-semibold! text-brand-text!">Fast Delivery</h3>
                            <p className="text-[14px]! leading-[1.6]! text-brand-text-light!">
                                Quick & Reliable delivery at your door.
                            </p>
                        </div>
                    </div>

                    <div className="flex! items-center! gap-4.5! border-b! border-brand-border! p-7.5! lg:border-b-0! lg:border-r!">
                        <div className="flex! h-15! w-15! shrink-0! items-center! justify-center! rounded-full! bg-brand-green-light! text-[24px]! text-brand-forest!">
                            <i className="fa-regular fa-gem"></i>
                        </div>

                        <div>
                            <h3 className="mb-2! text-[18px]! font-semibold! text-brand-text!">Premium Quality</h3>
                            <p className="text-[14px]! leading-[1.6]! text-brand-text-light!">
                                Carefully selected high quality products.
                            </p>
                        </div>
                    </div>

                    <div className="flex! items-center! gap-4.5! border-b! border-brand-border! p-7.5! lg:border-b-0! lg:border-r!">
                        <div className="flex! h-15! w-15! shrink-0! items-center! justify-center! rounded-full! bg-brand-green-light! text-[24px]! text-brand-forest!">
                            <i className="fa-solid fa-lock"></i>
                        </div>

                        <div>
                            <h3 className="mb-2! text-[18px]! font-semibold! text-brand-text!">Secure Shopping</h3>
                            <p className="text-[14px]! leading-[1.6]! text-brand-text-light!">
                                100% secure payment & privacy protection.
                            </p>
                        </div>
                    </div>

                    <div className="flex! items-center! gap-4.5! p-7.5!">
                        <div className="flex! h-15! w-15! shrink-0! items-center! justify-center! rounded-full! bg-brand-green-light! text-[24px]! text-brand-forest!">
                            <i className="fa-regular fa-heart"></i>
                        </div>

                        <div>
                            <h3 className="mb-2! text-[18px]! font-semibold! text-brand-text!">1000+ Happy Customers</h3>
                            <p className="text-[14px]! leading-[1.6]! text-brand-text-light!">
                                Loved by thousands of happy customers.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Benefits
