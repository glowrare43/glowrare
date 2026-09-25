const Map = () => {
    return (
        <section className="section ">
            <div className="custom-container">
                <div className="relative! w-full! h-100! sm:h-87.5! md:h-100! overflow-hidden! rounded-2xl! border! border-brand-border! shadow-[0_7px_22px_rgba(0,0,0,0.05)]!">

                    <iframe
                        src="https://www.google.com/maps?q=Canal%20Road%20Faisalabad%20Pakistan&output=embed"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Canal Road Faisalabad Location"
                        className="absolute! inset-0! w-full! h-full! border-0! block! "
                    />

                    <div className="absolute! top-4! left-4! right-4! sm:right-auto! sm:w-61.25! p-4! sm:px-5! sm:py-4.5! bg-brand-surface! rounded-xl! shadow-[0_7px_20px_rgba(0,0,0,0.12)]!">
                        <h2 className="m-0! mb-2! font-serif! text-xl! leading-tight! text-brand-text!">
                            Find Us Here
                        </h2>

                        <p className="m-0! mb-3! text-xs! leading-[1.6]! text-brand-text-light!">
                            Canal Road, <br /> Faisalabad, Pakistan
                        </p>

                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Canal+Road+Faisalabad+Pakistan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex! items-center! gap-1.5! text-xs! font-semibold! text-brand-forest! no-underline! transition-colors! duration-300! hover:text-brand-gold!"
                        >
                            View on Google Maps

                            <i className="fa-solid fa-arrow-up-right-from-square text-[11px]!"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Map