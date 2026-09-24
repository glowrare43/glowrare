const GetTouch = () => {
    const contactItems = [
        {
            icon: "fa-solid fa-location-dot",
            title: "Our Location",
            content: (
                <>
                    123 Beauty Street,
                    <br />
                    Canal Road,
                    <br />
                    Faisalabad, Pakistan
                </>
            ),
        },
        {
            icon: "fa-solid fa-phone",
            title: "Call Us",
            content: (
                <>
                    +92 320 0040536
                    <br />
                    Mon - Sat (10:00 AM - 8:00 PM)
                </>
            ),
        },
        {
            icon: "fa-solid fa-envelope",
            title: "Email Us",
            content: (
                <>
                    hello@glowrare.com
                    <br />
                    We reply within 24 hours
                </>
            ),
        },
        {
            icon: "fa-regular fa-clock",
            title: "Working Hours",
            content: (
                <>
                    Monday - Saturday
                    <br />
                    10:00 AM - 8:00 PM
                </>
            ),
        },
    ];

    return (
        <section className="w-full!">

            {/* ================= HEADING ================= */}

            <div className="mb-[18px]!">
                <h2
                    className="
                        m-0!
                        font-serif!
                        text-[30px]!
                        font-medium!
                        leading-tight!
                        text-brand-text!
                    "
                >
                    Get In{" "}
                    <span className="text-brand-forest!">
                        Touch
                    </span>
                </h2>
            </div>


            {/* ================= CONTACT CARDS ================= */}

            <div className="flex! flex-col! gap-2.5!">

                {contactItems.map((item, index) => (
                    <div
                        key={index}
                        className="
                            w-full!
                            min-h-[78px]!
                            flex!
                            items-center!
                            gap-3.5!
                            px-4!
                            py-[13px]!
                            bg-brand-surface!
                            border!
                            border-brand-border!
                            rounded-xl!
                            shadow-[0_4px_14px_rgba(0,0,0,0.035)]!
                            transition-all!
                            duration-300!
                            hover:-translate-y-[3px]!
                            hover:shadow-[0_7px_20px_rgba(37,77,58,0.12)]!
                        "
                    >

                        {/* ICON */}

                        <div
                            className="
                                w-11!
                                h-11!
                                min-w-11!
                                flex!
                                items-center!
                                justify-center!
                                rounded-full!
                                bg-brand-forest!
                                text-brand-surface!
                            "
                        >
                            <i className={`${item.icon} text-[17px]!`}></i>
                        </div>


                        {/* TEXT */}

                        <div className="min-w-0!">

                            <h3
                                className="
                                    m-0!
                                    mb-1!
                                    text-sm!
                                    font-semibold!
                                    text-brand-forest!
                                "
                            >
                                {item.title}
                            </h3>

                            <p
                                className="
                                    m-0!
                                    text-xs!
                                    leading-[1.5]!
                                    text-brand-text-light!
                                "
                            >
                                {item.content}
                            </p>

                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
};

export default GetTouch;