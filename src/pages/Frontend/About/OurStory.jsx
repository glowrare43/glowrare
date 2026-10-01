import React from "react";
import PromotionVideo from "../../../assets/promotion.mp4"

const OurStory = () => {
    return (
        <section className="section relative! overflow-hidden! bg-brand-surface!">
            <div className="custom-container">

                <div className="relative! mx-auto! grid! grid-cols-1! items-center! gap-10! lg:grid-cols-2! lg:gap-16.25!">

                    {/* Story Content */}
                    <div className="relative! overflow-hidden! rounded-[28px]! border! border-brand-border! bg-brand-mist! p-7! shadow-xl! sm:p-9! md:p-11!">

                        {/* Decorative Corner */}
                        <div className="absolute! right-0! top-0! h-24! w-24! rounded-bl-[70px]! bg-brand-green-light! opacity-70!" />

                        <div className="relative!">
                            {/* Heading */}
                            <h2 className="mb-5! font-serif! text-[32px]! font-medium! leading-[1.15]! text-brand-forest! sm:text-[38px]! md:text-[44px]!">
                                The Glowrare <span className="text-brand-green!">Story</span>
                            </h2>

                            {/* Accent */}
                            <div className="mb-7! flex! items-center! gap-2!">
                                <span className="h-1! w-12! rounded-full! bg-brand-green!" />
                                <span className="h-1! w-2! rounded-full! bg-brand-gold!" />
                            </div>

                            {/* Paragraphs */}
                            <p className="mb-5! text-[15px]! leading-[1.9]! text-brand-text-light! md:text-[16px]!">
                                Glowrare was born from a passion for skincare and
                                beauty. We understand that healthy skin is the
                                foundation of confidence, which is why we carefully
                                curate premium products that truly work.
                            </p>

                            <p className="mb-7! text-[15px]! leading-[1.9]! text-brand-text-light! md:text-[16px]!">
                                Our mission is to provide authentic, high-quality
                                skincare solutions that help customers achieve
                                radiant and healthy skin while enjoying a seamless
                                shopping experience.
                            </p>

                            {/* Quote */}
                            <div className="border-l-2! border-brand-gold! pl-5!">
                                <h4 className="font-serif! text-xl! italic! leading-relaxed! text-brand-forest! md:text-2xl!">
                                    “Glow Naturally, Shine Confidently.”
                                </h4>
                            </div>
                        </div>
                    </div>

                    {/* Video / Journey */}
                    <div className="group! relative!">

                        {/* Decorative Frame */}
                        <div className="absolute! -bottom-4! -right-4! h-28! w-28! rounded-br-[28px]! border-b-2! border-r-2! border-brand-gold! opacity-70!" />

                        <div className="absolute! -left-4! -top-4! h-28! w-28! rounded-tl-[28px]! border-l-2! border-t-2! border-brand-green! opacity-70!" />

                        <div className="relative! overflow-hidden! rounded-[28px]! border! border-brand-border! bg-brand-surface! p-2! shadow-xl!">

                            <div className="relative! overflow-hidden! rounded-[22px]!">

                                {/* Video */}
                                <video
                                    src={PromotionVideo}
                                    playsInline
                                    preload="metadata"
                                    muted
                                    autoPlay
                                    loop
                                    className="h-95! w-full! object-cover! sm:h-112.5!"
                                >
                                    Your browser does not support video playback.
                                </video>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default OurStory