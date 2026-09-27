import React from "react";
import MissionPic from "../../../assets/our-mission.png"
import { Link } from "react-router-dom";

const OurMission = () => {
    return (
        <section className="section relative! overflow-hidden! bg-brand-background!">
            <div className="custom-container">

                <div className="pointer-events-none! absolute! -left-32! top-20! h-72! w-72! rounded-full! bg-brand-green-light! opacity-60! blur-3xl!" />
                <div className="pointer-events-none! absolute! -right-32! bottom-10! h-80! w-80! rounded-full! bg-brand-champagne! opacity-30! blur-3xl!" />

                <div className="relative! mx-auto! grid! grid-cols-1! items-center! gap-12! lg:grid-cols-2! lg:gap-17.5!">

                    <div className="group! relative!">
                        {/* Decorative Frame */}
                        <div className="absolute! -bottom-4! -left-4! h-28! w-28! rounded-bl-[28px]! border-b-2! border-l-2! border-brand-gold! opacity-70!" />
                        <div className="absolute! -right-4! -top-4! h-28! w-28! rounded-tr-[28px]! border-r-2! border-t-2! border-brand-green! opacity-70!" />

                        <div className="relative! overflow-hidden! rounded-[28px]! border! border-brand-border! bg-brand-surface! p-2! shadow-[0_20px_60px_rgba(37,77,58,0.10)]!">
                            <div className="relative! overflow-hidden! rounded-[22px]!">
                                <img
                                    src={MissionPic}
                                    alt="Glowrare Mission"
                                    className="h-90! w-full! object-cover! transition-transform! duration-700! group-hover:scale-105! sm:h-112.5! lg:h-140!"
                                />

                                {/* Image Overlay */}
                                <div className="absolute! inset-0! bg-linear-to-t! from-brand-forest/30! via-transparent! to-transparent!" />
                            </div>
                        </div>

                        {/* Small Floating Badge */}
                        <div className="absolute! bottom-7! right-5! flex! items-center! gap-3! rounded-2xl! border! border-brand-border! bg-brand-surface/95! px-4! py-3! shadow-[0_12px_35px_rgba(37,77,58,0.12)]! backdrop-blur-sm! sm:right-7!">
                            <div className="flex! h-10! w-10! items-center! justify-center! rounded-full! bg-brand-green-light! text-brand-forest!">
                                <span className="text-lg!">✦</span>
                            </div>

                            <div>
                                <p className="text-xs! font-semibold! uppercase! tracking-[1.5px]! text-brand-text-light!">
                                    Our Promise
                                </p>
                                <p className="text-sm! font-semibold! text-brand-forest!">
                                    Beauty with Purpose
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex! flex-col! justify-center! text-center! lg:text-left!">
                        <div className="mb-4! flex! items-center! justify-center! gap-3! text-xs! font-bold! uppercase! tracking-[3px]! text-brand-green! lg:justify-start!">
                            <span className="h-px! w-10! bg-brand-green!" />
                            Our Mission
                            <span className="hidden! h-px! w-16! bg-brand-green! lg:block!" />
                        </div>

                        <h2 className="mb-5! font-serif! text-[32px]! font-medium! leading-[1.15]! text-brand-forest! sm:text-[40px]! lg:text-[50px]!">
                            Enhancing Your
                            <span className="block! text-brand-green!">
                                Natural Beauty
                            </span>
                        </h2>

                        <div className="mx-auto! mb-7! flex! items-center! justify-center! gap-2! lg:mx-0! lg:justify-start!">
                            <span className="h-1! w-12! rounded-full! bg-brand-green!" />
                            <span className="h-1! w-2! rounded-full! bg-brand-gold!" />
                        </div>

                        {/* Description */}
                        <div className="max-w-155!">
                            <p className="mb-5! text-[15px]! leading-[1.9]! text-brand-text-light! sm:text-[16px]! lg:text-[17px]!">
                                At Glowrare, our mission is to provide premium skincare
                                and beauty products that inspire confidence and promote
                                healthy, glowing skin. We believe everyone deserves
                                access to safe, effective, and affordable beauty
                                solutions.
                            </p>

                            <p className="mb-7! text-[15px]! leading-[1.9]! text-brand-text-light! sm:text-[16px]! lg:text-[17px]!">
                                Every product we offer is carefully selected for its
                                quality, authenticity, and performance. We are committed
                                to helping our customers achieve their skincare goals
                                while delivering an exceptional shopping experience.
                            </p>
                        </div>

                        {/* CTA */}
                        <Link to="/products" className="group mx-auto! inline-flex! w-fit! items-center! gap-3! rounded-full! bg-brand-forest! px-7! py-3.5! text-[15px]! font-semibold! text-white! shadow-[0_10px_30px_rgba(37,77,58,0.18)]! transition-all! duration-300! hover:-translate-y-1! hover:bg-brand-green! hover:shadow-[0_15px_35px_rgba(37,77,58,0.25)]! lg:mx-0!">
                            Explore Products
                            <span className="transition-transform! duration-300! group-hover:translate-x-1!">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurMission