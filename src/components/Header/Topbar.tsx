const Topbar = () => {
    return (
        <div className="hidden md:block bg-brand-forest text-white text-xs">
            
            <div className="custom-container flex! items-center! justify-between! py-3!">
                <a href="tel:+923200040536" className="flex! items-center! gap-2! text-brand-green-light! hover:text-white! transition-colors!">
                    <i className="fa-solid fa-phone text-brand-gold"></i>
                    <span className="font-medium!">+92 320 0040536</span>
                </a>

                <div className="flex! items-center! gap-2!">
                    <i className="fa-solid fa-gem text-brand-gold"></i>
                    <span className="font-medium! tracking-wide! text-brand-green-light!">
                        Premium Unstitched & Stitched Fabrics
                    </span>
                </div>

                <div className="flex! items-center! gap-2! text-brand-green-light!">
                    <i className="fa-solid fa-rotate-left text-brand-gold"></i>
                    <span>
                        7-Day Easy Returns
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Topbar