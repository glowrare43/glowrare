import React from "react";

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

                            <a href="/assests/promotion video.mp4" target="_blank" rel="noreferrer" className="relative! block! overflow-hidden! rounded-[22px]!">
                                <img src="/assests/promtion 1.jpeg" alt="Glowrare Story"
                                    className="h-95! w-full! object-cover! transition-transform! duration-700! group-hover:scale-105! sm:h-112.5!"
                                />

                                {/* Image Overlay */}
                                <div className="absolute! inset-0! bg-linear-to-t! from-brand-forest/80! via-brand-forest/15! to-transparent!" />

                                {/* Play Button */}
                                <div className="absolute! left-1/2! top-[43%]! flex! h-18! w-18! -translate-x-1/2! -translate-y-1/2! items-center! justify-center! rounded-full! border! border-white/70! bg-white/95! text-brand-forest! shadow-[0_10px_35px_rgba(0,0,0,0.18)]! transition-all! duration-300! group-hover:scale-110! group-hover:bg-brand-green! group-hover:text-white! sm:h-22! sm:w-22!">
                                    <i className="fa-solid fa-play ml-1! text-xl! sm:text-2xl!" />
                                </div>

                                {/* Bottom Content */}
                                <div className="absolute! bottom-7! left-1/2! w-[85%]! -translate-x-1/2! text-center! text-white!">
                                    <div className="mb-3! flex! items-center! justify-center! gap-2! text-[10px]! font-bold! uppercase! tracking-[3px]! text-brand-champagne!">
                                        <span className="h-px! w-6! bg-brand-champagne!" />
                                        Our Journey
                                        <span className="h-px! w-6! bg-brand-champagne!" />
                                    </div>

                                    <h3 className="mb-2! font-serif! text-3xl! leading-tight! sm:text-[38px]!">
                                        Watch Our Journey
                                    </h3>

                                    <p className="mx-auto! max-w-125! text-sm! leading-[1.7]! text-white/85! sm:text-[15px]!">
                                        Discover how Glowrare is creating a
                                        thoughtful and confident approach to beauty.
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default OurStory