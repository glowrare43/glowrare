import React from 'react'
import BannerPic from "../../../assets/contact-banner-bg.png"

const ContactBanner = () => {
    return (
        <section className="section pt-10!">
            <div className="custom-container">

                <div className="relative! min-h-130! overflow-hidden! rounded-3xl! bg-brand-forest! shadow-[0_12px_35px_rgba(0,0,0,0.10)]!">

                    <img src={BannerPic} alt="Glowrare Beauty Products" className="absolute! inset-0! w-full! h-full! object-cover!" />

                    <div className="absolute! inset-0! bg-linear-to-t! from-brand-forest! via-brand-forest/55! to-brand-forest/5!" />

                    {/* Content */}
                    <div className="relative! z-10! min-h-130! flex! items-end! p-8! sm:p-10! md:p-14! lg:p-16!">
                        <div className="max-w-162.5!">

                            {/* Small Heading */}
                            <span
                                className="
                        inline-block!
                        mb-3!
                        text-brand-gold!
                        text-sm!
                    font-bold!
                    tracking-[3px]!
                    uppercase!
                "
                            >
                                Contact Us
                            </span>

                            {/* Title */}
                            <h1
                                className="
                    m-0!
                    text-4xl!
                    sm:text-5xl!
                    lg:text-6xl!
                    leading-[1.1]!
                    font-serif!
                    font-medium!
                    text-brand-surface!
                    "
                            >
                                We'd Love to
                                <br />
                                <span className="text-brand-champagne!">
                                    Hear From You!
                                </span>
                            </h1>

                            {/* Description */}
                            <p
                                className="
                    mt-5!
                    mb-6!
                    max-w-140!
                    text-sm!
                    sm:text-base!
                    leading-7!
                    text-white/85!
                    "
                            >
                                Have a question, suggestion, or just want to say hello?
                                Our team is here to help you.
                            </p>

                            {/* Button */}
                            <a
                                href="#contact-form"
                                className="
                    inline-flex!
                    items-center!
                    gap-2!
                    rounded-full!
                    bg-brand-surface!
                    px-6!
                    py-3!
                    text-sm!
                    font-semibold!
                    text-brand-forest!
                    no-underline!
                    transition-all!
                    duration-300!
                    hover:-translate-y-1!
                    hover:bg-brand-gold!
                    hover:text-white!
                    "
                            >
                                <i className="fa-regular fa-envelope"></i>
                                Let's Connect
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactBanner
