const SendMessage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        // Your form submission logic here
    };

    return (
        <div
            className="
                w-full!
                box-border!
                p-6!
                sm:p-7!
                md:px-8!
                md:py-7!
                bg-gradient-to-br!
                from-brand-mist!
                to-brand-surface!
                border!
                border-brand-border!
                rounded-2xl!
                shadow-[0_7px_22px_rgba(0,0,0,0.04)]!
            "
        >

            {/* ================= HEADING ================= */}

            <h2
                className="
                    m-0!
                    mb-5!
                    font-serif!
                    text-[28px]!
                    font-medium!
                    leading-tight!
                    text-brand-text!
                "
            >
                Send Us a{" "}
                <span className="text-brand-forest!">
                    Message
                </span>
            </h2>


            {/* ================= FORM ================= */}

            <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="
                    w-full!
                    flex!
                    flex-col!
                    gap-[11px]!
                "
            >

                {/* ROW 1 */}

                <div
                    className="
                        w-full!
                        grid!
                        grid-cols-1!
                        sm:grid-cols-2!
                        gap-[11px]!
                    "
                >
                    <input
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        autoComplete="name"
                        className="
                            w-full!
                            box-border!
                            px-3.5!
                            py-3!
                            border!
                            border-brand-border!
                            rounded-lg!
                            outline-none!
                            bg-brand-surface!
                            text-brand-text!
                            text-[13px]!
                            transition-all!
                            duration-300!
                            placeholder:text-brand-text-light!
                            focus:border-brand-forest!
                            focus:ring-4!
                            focus:ring-brand-green-light!
                        "
                    />

                    <input
                        type="email"
                        id="email"
                        placeholder="Email Address"
                        autoComplete="email"
                        className="
                            w-full!
                            box-border!
                            px-3.5!
                            py-3!
                            border!
                            border-brand-border!
                            rounded-lg!
                            outline-none!
                            bg-brand-surface!
                            text-brand-text!
                            text-[13px]!
                            transition-all!
                            duration-300!
                            placeholder:text-brand-text-light!
                            focus:border-brand-forest!
                            focus:ring-4!
                            focus:ring-brand-green-light!
                        "
                    />
                </div>


                {/* ROW 2 */}

                <div
                    className="
                        w-full!
                        grid!
                        grid-cols-1!
                        sm:grid-cols-2!
                        gap-[11px]!
                    "
                >
                    <input
                        type="tel"
                        id="phone"
                        placeholder="Phone Number"
                        autoComplete="tel"
                        className="
                            w-full!
                            box-border!
                            px-3.5!
                            py-3!
                            border!
                            border-brand-border!
                            rounded-lg!
                            outline-none!
                            bg-brand-surface!
                            text-brand-text!
                            text-[13px]!
                            transition-all!
                            duration-300!
                            placeholder:text-brand-text-light!
                            focus:border-brand-forest!
                            focus:ring-4!
                            focus:ring-brand-green-light!
                        "
                    />

                    <input
                        type="text"
                        id="product"
                        placeholder="Product"
                        className="
                            w-full!
                            box-border!
                            px-3.5!
                            py-3!
                            border!
                            border-brand-border!
                            rounded-lg!
                            outline-none!
                            bg-brand-surface!
                            text-brand-text!
                            text-[13px]!
                            transition-all!
                            duration-300!
                            placeholder:text-brand-text-light!
                            focus:border-brand-forest!
                            focus:ring-4!
                            focus:ring-brand-green-light!
                        "
                    />
                </div>


                {/* MESSAGE */}

                <textarea
                    id="message"
                    placeholder="Your Message"
                    className="
                        w-full!
                        box-border!
                        h-[105px]!
                        min-h-[105px]!
                        px-3.5!
                        py-3!
                        border!
                        border-brand-border!
                        rounded-lg!
                        outline-none!
                        resize-none!
                        bg-brand-surface!
                        text-brand-text!
                        text-[13px]!
                        transition-all!
                        duration-300!
                        placeholder:text-brand-text-light!
                        focus:border-brand-forest!
                        focus:ring-4!
                        focus:ring-brand-green-light!
                    "
                />


                {/* SEND BUTTON */}

                <button
                    type="submit"
                    id="send-message-btn"
                    className="
                        w-full!
                        sm:w-[155px]!
                        px-4!
                        py-3!
                        flex!
                        items-center!
                        justify-center!
                        gap-2!
                        border-0!
                        rounded-lg!
                        bg-brand-forest!
                        text-brand-surface!
                        text-[13px]!
                        font-semibold!
                        cursor-pointer!
                        transition-all!
                        duration-300!
                        hover:-translate-y-0.5!
                        hover:bg-brand-green!
                        active:translate-y-0!
                    "
                >
                    <i className="fa-solid fa-paper-plane"></i>

                    <span>Send Message</span>
                </button>


                {/* FORM STATUS */}

                <div
                    id="form-status"
                    aria-live="polite"
                    className="
                        min-h-[18px]!
                        mt-[5px]!
                        text-[13px]!
                        font-semibold!
                        text-brand-text-light!
                    "
                ></div>

            </form>

        </div>
    );
};

export default SendMessage;