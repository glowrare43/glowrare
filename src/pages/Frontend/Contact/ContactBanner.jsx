import BannerPic from "../../../assets/contact-banner-bg.png"

const ContactBanner = () => {
    return (
        <section className="relative! min-h-100! flex! items-center! justify-center! text-center! px-5! py-13.75! bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${BannerPic})` }}>
            <div className="absolute inset-0 bg-black/55"></div>

            <div className="relative! z-10! max-w-175!">
                <span className="text-brand-gold text-[13px]! font-bold! tracking-[3px]!">Contact Us</span>

                <h1 className="mt-3! mb-3! text-white text-[45px] leading-[1.2] max-[650px]:text-[36px]">
                    We'd Love to Hear From You!
                </h1>
                <p className="max-w-137.5 mx-auto mb-7.5 text-gray-300 leading-[1.8] max-[650px]:text-sm">
                    Have a question, suggestion, or just want to say hello?
                    Our team is here to help you.
                </p>
            </div>

        </section>
    )
}

export default ContactBanner