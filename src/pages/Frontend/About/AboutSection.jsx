import React from "react";
import AboutPic from "../../../assets/product-2.jpg";

const Introduction = () => {
    return (
        <section className="section relative! overflow-hidden!">
            <div className="custom-container">

                {/* Decorative Background */}
                <div className="pointer-events-none! absolute! -left-32! top-10! h-56! w-56! rounded-full! bg-brand-green-light! opacity-40! blur-3xl! sm:top-20! sm:h-72! sm:w-72!" />

                <div className="pointer-events-none! absolute! -right-32! bottom-0! h-64! w-64! rounded-full! bg-brand-mist! opacity-70! blur-3xl! sm:h-80! sm:w-80!" />

                <div className="relative! mx-auto! grid! grid-cols-1! items-center! gap-10! sm:gap-12! lg:grid-cols-2! lg:gap-16! xl:gap-20!">

                    {/* ================= CONTENT ================= */}
                    <div className="flex! min-w-0! flex-col! justify-center! text-center! lg:text-left!">

                        {/* Section Label */}
                        <div className="mb-4! flex! items-center! justify-center! gap-3! sm:mb-5! lg:justify-start!">
                            <span className="h-0.5! w-7! bg-brand-green! sm:w-10!" />

                            <span className="text-xs! font-semibold! uppercase! tracking-[2px]! text-brand-green! sm:text-sm! sm:tracking-[3px]!">
                                About Glowrare
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="mb-3! font-serif! text-4xl! font-bold! leading-[1.05]! text-brand-forest! sm:mb-4! sm:text-5xl! md:text-6xl! lg:text-[64px]! xl:text-[72px]!">
                            Glowrare
                        </h1>

                        {/* Tagline */}
                        <h2 className="mb-5! max-w-137.5! text-xl! font-semibold! leading-snug! text-brand-text! sm:mb-6! sm:text-2xl! md:text-3xl! lg:text-[30px]! xl:text-[32px]!">
                            Beauty that
                            <span className="text-brand-ruby!">
                                {" "}Glows,
                            </span>
                            Confidence that
                            <span className="text-brand-ruby!">
                                {" "}Shows.
                            </span>
                        </h2>

                        {/* Divider */}
                        <div className="mb-5! h-px! w-full! max-w-125! bg-brand-border! sm:mb-6!" />

                        {/* Description */}
                        <div className="max-w-150! space-y-3! sm:space-y-4!">
                            <p className="text-sm! leading-[1.8]! text-brand-text-light! sm:text-base! sm:leading-[1.9]! md:text-[17px]!">
                                At Glowrare, we believe that everyone deserves to feel
                                confident in their own skin. Our carefully curated range
                                of skincare and beauty products is designed to bring out
                                your natural glow.
                            </p>

                            <p className="text-sm! leading-[1.8]! text-brand-text-light! sm:text-base! sm:leading-[1.9]! md:text-[17px]!">
                                We are committed to quality, authenticity, and customer
                                satisfaction. Every product is selected with love and care
                                to help you look and feel your best every day.
                            </p>
                        </div>

                        {/* Small Brand Features */}
                        <div className="mt-6! flex! flex-wrap! items-center! justify-center! gap-2! sm:mt-8! sm:gap-3! md:gap-5! lg:justify-start!">

                            <div className="flex! items-center! gap-2! rounded-full! border! border-brand-border! bg-brand-surface! px-3! py-2! shadow-[0_5px_20px_rgba(37,77,58,0.08)]! sm:px-4! sm:py-2.5!">
                                <i className="fa-solid fa-heart text-sm! text-brand-green! sm:text-base!" />

                                <span className="text-xs! font-medium! text-brand-text! sm:text-sm!">
                                    Carefully Curated
                                </span>
                            </div>

                            <div className="flex! items-center! gap-2! rounded-full! border! border-brand-border! bg-brand-surface! px-3! py-2! shadow-[0_5px_20px_rgba(37,77,58,0.08)]! sm:px-4! sm:py-2.5!">
                                <i className="fa-solid fa-gem text-sm! text-brand-gold! sm:text-base!" />

                                <span className="text-xs! font-medium! text-brand-text! sm:text-sm!">
                                    Quality Products
                                </span>
                            </div>

                        </div>

                    </div>

                    {/* ================= IMAGE ================= */}
                    <div className="relative! flex! min-w-0! items-center! justify-center!">

                        <div className="relative! z-10! w-full! max-w-100! sm:max-w-120! md:max-w-140! lg:max-w-125! xl:max-w-140!">

                            <div className="relative! overflow-hidden! rounded-2xl! shadow-[0_20px_50px_rgba(37,77,58,0.12)]! sm:rounded-[28px]! lg:rounded-[35px]!">

                                <img
                                    src={AboutPic}
                                    alt="Glowrare skincare and beauty products"
                                    className="relative! z-10! mx-auto! block! h-auto! w-full! object-contain! transition-transform! duration-700! hover:scale-[1.03]!"
                                />

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Introduction;