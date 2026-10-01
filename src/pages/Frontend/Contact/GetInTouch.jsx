const GetTouch = () => {
    const contactItems = [
        {
            icon: "fa-solid fa-location-dot",
            title: "Our Location",
            content: (<>Canal Road,<br />Faisalabad, Pakistan</>),
        },
        {
            icon: "fa-solid fa-phone",
            title: "Call Us",
            content: (<>+92 320 0040536<br />Mon - Sat (10:00 AM - 8:00 PM)</>),
        },
        {
            icon: "fa-solid fa-envelope",
            title: "Email Us",
            content: (<>glowrare43@gmail.com<br />We reply within 24 hours</>),
        },
        {
            icon: "fa-regular fa-clock",
            title: "Working Hours",
            content: (<>Monday - Saturday<br />10:00 AM - 8:00 PM</>),
        }
    ]

    return (
        <section className="section w-full!">
            <h2 className="section-title">Get In Touch</h2>

            <div className="flex! flex-col! gap-2.5!">
                {contactItems.map((item, index) => (
                    <div key={index} className="w-full! min-h-19.5! flex! items-center! gap-3.5! px-4! py-3.25! border! border-brand-border! rounded-xl!
                            shadow-[0_4px_14px_rgba(0,0,0,0.035)]! transition-all! duration-300! hover:-translate-y-0.75! hover:shadow-[0_7px_20px_rgba(37,77,58,0.12)]!">
                        <div className="w-11! h-11! min-w-11! flex! items-center! justify-center! rounded-full! bg-brand-forest! text-brand-surface!">
                            <i className={`${item.icon} text-[17px]!`}></i>
                        </div>

                        <div className="min-w-0!">
                            <h3 className="m-0! mb-1! text-sm! font-semibold! text-brand-forest!">{item.title}</h3>
                            <p className="m-0! text-xs! leading-normal! text-brand-text-light!">{item.content}</p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default GetTouch