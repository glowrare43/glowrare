import { useState, useRef, useEffect } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const FloatingSocialMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const closeTimeoutRef = useRef(null);

    const socialLinks = [
        {
            icon: faInstagram,
            href: "https://www.instagram.com/glowrare43?igsh=M21oOGp0YWdqNzhl&igsi=M21oOGp0YWdqNzhl",
            label: "Instagram",
            color: "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]",
        },
        {
            icon: faFacebookF,
            href: "https://www.facebook.com/share/1JmPyGdGjx/",
            label: "Facebook",
            color: "hover:bg-[#1877F2]",
        },
        {
            icon: faWhatsapp,
            href: "https://api.whatsapp.com/send?phone=923200040536",
            label: "WhatsApp",
            color: "hover:bg-[#25D366]",
        },
    ];

    const baseOffset = 60;

    const handleMouseEnter = () => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        closeTimeoutRef.current = setTimeout(() => setIsOpen(false), 200);
    };

    useEffect(() => {
        return () => {
            if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        };
    }, []);

    const handleClick = () => setIsOpen((prev) => !prev);

    return (
        <div className="fixed bottom-6 right-6 z-9999" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="relative">
                {socialLinks.map((social, index) => {
                    const translateY = -(baseOffset * (index + 0.5));

                    return (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className={`absolute right-0 bottom-0 flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-green text-lg shadow-lg transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] will-change-transform ${social.color} hover:text-white hover:shadow-xl ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"}`}
                            style={{
                                transform: isOpen ? `translateY(${translateY}px) scale(1)` : "translateY(0px) scale(0.5)",
                                transitionDelay: isOpen ? `${index * 60}ms` : `${(socialLinks.length - 1 - index) * 40}ms`,
                            }}
                        >
                            <FontAwesomeIcon icon={social.icon} />
                        </a>
                    );
                })}
            </div>

            <button
                type="button"
                onClick={handleClick}
                aria-label={isOpen ? "Close social menu" : "Open social menu"}
                aria-expanded={isOpen}
                className="relative z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-xl text-white shadow-xl transition-all duration-300 ease-out cursor-pointer! hover:scale-110 hover:shadow-2xl active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-green/40"
            >
                <FontAwesomeIcon
                    icon={faPlus}
                    className={`transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen ? "rotate-[135deg]" : "rotate-0"}`}
                />
            </button>
        </div>
    );
};

export default FloatingSocialMenu;