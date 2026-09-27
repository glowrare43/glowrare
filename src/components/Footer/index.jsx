import { Link } from "react-router-dom";

const socialLinks = [
    {
        name: "Facebook",
        url: window.links.facebook,
        icon: "fa-brands fa-facebook-f",
    },
    {
        name: "WhatsApp",
        url: window.links.whatsapp,
        icon: "fa-brands fa-whatsapp",
    },
    {
        name: "Instagram",
        url: window.links.instagram,
        icon: "fa-brands fa-instagram",
    },
    {
        name: "LinkedIn",
        url: window.links.tiktok,
        icon: "fa-brands fa-tiktok",
    },
];

const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Product", path: "/products" },
    { label: "Contact", path: "/contact" },
    { label: "Bundles", path: "/bundles" },
];

const policies = [
    {
        label: "Privacy Policy",
        path: "/policies/privacy-policy",
    },
    {
        label: "Exchange & Return Policy",
        path: "/policies/exchange-return-policy",
    },
    {
        label: "Contact Information",
        path: "/policies/contact-information",
    },
    {
        label: "Terms of Service",
        path: "/policies/terms-of-service",
    },
    {
        label: "Shipping Policy",
        path: "/policies/shipping-policy",
    },
];

const contactInfo = [
    {
        icon: "fa-solid fa-phone",
        content: "+92 320 0040536",
    },
    {
        icon: "fa-solid fa-envelope",
        content: "info@glowrare.com",
    },
    {
        icon: "fa-solid fa-clock",
        content: "Mon - Sat (10:00 AM - 8:00 PM)",
    },
    {
        icon: "fa-solid fa-location-dot",
        content: "123 Beauty Street, Canal Road, Faisalabad, Pakistan",
    },
];

const FooterHeading = ({ children }) => (
    <h4 className="text-base! sm:text-lg! font-semibold! text-brand-gold! tracking-wide! border-b! border-brand-border/20! pb-2! sm:pb-3! mb-4! sm:mb-5!">
        {children}
    </h4>
);

const FooterLink = ({ to, children }) => (
    <li>
        <Link to={to} className="inline-block! text-sm! sm:text-base! no-underline! transition-all! duration-200! hover:text-brand-gold! hover:translate-x-1!">
            {children}
        </Link>
    </li>
);

const MainFooter = () => {
    return (
        <footer className="bg-brand-forest! text-brand-surface!">

            {/* Main Footer */}
            <div className="custom-container py-10! sm:py-12! lg:py-14!">

                <div
                    className="
                        grid!
                        grid-cols-1!
                        sm:grid-cols-2!
                        lg:grid-cols-4!
                        gap-x-8!
                        gap-y-10!
                        lg:gap-y-0!
                    "
                >

                    {/* About */}
                    <div className="w-full">
                        <FooterHeading>Glowrare</FooterHeading>

                        <p className="text-sm! sm:text-base! leading-6! sm:leading-7! m-0! max-w-md!">
                            Premium skincare and beauty products for healthy, glowing skin.
                        </p>

                        {/* Social Links */}
                        <div className="flex! flex-wrap! items-center! gap-2! sm:gap-3! mt-5! sm:mt-6!">
                            {socialLinks.map(({ name, url, icon }) => (
                                <Link
                                    key={name}
                                    to={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={name}
                                    className="
                                        w-9! h-9!
                                        sm:w-10! sm:h-10!
                                        flex! items-center! justify-center!
                                        rounded-full!
                                        bg-brand-surface/10!
                                        no-underline!
                                        transition-all!
                                        duration-300!
                                        hover:bg-brand-gold!
                                        hover:text-brand-forest!
                                        hover:-translate-y-1!
                                    "
                                >
                                    <i className={`${icon} text-sm! sm:text-base!`}></i>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="w-full">
                        <FooterHeading>Quick Links</FooterHeading>

                        <ul className="list-none! p-0! m-0! space-y-2! sm:space-y-3!">
                            {quickLinks.map(({ label, path }) => (
                                <FooterLink key={label} to={path}>
                                    {label}
                                </FooterLink>
                            ))}
                        </ul>
                    </div>

                    {/* Policies */}
                    <div className="w-full">
                        <FooterHeading>Policies</FooterHeading>

                        <ul className="list-none! p-0! m-0! space-y-2! sm:space-y-3!">
                            {policies.map(({ label, path }) => (
                                <li key={path}>
                                    <Link
                                        to={path}
                                        className="
                        inline-block!
                        text-sm! sm:text-base!
                        no-underline!
                        transition-all!
                        duration-200!
                        hover:text-brand-gold!
                        hover:translate-x-1!
                    "
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="w-full">
                        <FooterHeading>Contact Us</FooterHeading>

                        <div className="space-y-3! sm:space-y-4!">
                            {contactInfo.map(
                                ({ icon, content, alignTop }) => (
                                    <div
                                        key={content}
                                        className={`
                                            flex!
                                            gap-3!
                                            transition-colors!
                                            duration-300!
                                            hover:text-brand-gold!
                                            ${alignTop
                                                ? "items-start!"
                                                : "items-center!"
                                            }
                                        `}
                                    >
                                        <i
                                            className={`
                                                ${icon}
                                                text-brand-gold!
                                                shrink-0!
                                                w-4!
                                                text-center!
                                                ${alignTop
                                                    ? "mt-1!"
                                                    : ""
                                                }
                                            `}
                                        ></i>

                                        <span
                                            className="
                                                text-sm! sm:text-base!
                                                leading-6!
                                            "
                                        >
                                            {content}
                                        </span>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t! border-brand-surface/10!">
                <div className="custom-container py-4! sm:py-5!">
                    <p
                        className="
                            text-xs! sm:text-sm!
                            text-center!
                            leading-5!
                            m-0!
                        "
                    >
                        © 2026 Glowrare. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default MainFooter;