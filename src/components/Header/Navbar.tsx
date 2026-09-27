import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Phone, ShoppingBag, Menu, X } from "lucide-react";

const GOLD = "#D4AF37";

export default function Navbar() {
    // Redux Cart
    const cartItems = useSelector((state: any) => state.cart.items);

    const cartCount = cartItems.reduce(
        (total: number, item: any) => total + item.quantity,
        0
    );

    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [pulse, setPulse] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);

        onScroll();

        window.addEventListener("scroll", onScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    // Cart count change par animation
    useEffect(() => {
        if (cartCount === 0) return;

        setPulse(true);

        const timer = setTimeout(() => {
            setPulse(false);
        }, 600);

        return () => clearTimeout(timer);
    }, [cartCount]);

    // Mobile menu ke waqt body scroll disable
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    return (
        <>
            <header
                className={`sticky! top-0! z-50! w-full! bg-white! shadow-sm! transition-all! duration-300!`}
            >
                <div
                    className={`custom-container flex! h-20! items-center! justify-between! transition-all! duration-300!`}
                >
                    {/* LEFT: Logo */}
                    <Link
                        to="/"
                        className="group flex! shrink-0! items-center! gap-3! no-underline!"
                    >
                        <div className="leading-tight!">
                            <div className="font-serif! text-xl! font-semibold! tracking-wide! text-[#111827]! transition-all! duration-300!">
                                GLOWRARE
                            </div>
                        </div>
                    </Link>

                    {/* CENTER: Navigation */}
                    <nav className="hidden! items-center! gap-1! lg:flex!">
                        <NavLink href="/">
                            Home
                        </NavLink>

                        <NavLink href="/about">
                            About Us
                        </NavLink>

                        <NavLink href="/products">
                            Products
                        </NavLink>

                        <NavLink href="/bundles">
                            Bundles
                        </NavLink>

                        <NavLink href="/contact">
                            Contact
                        </NavLink>
                    </nav>

                    {/* RIGHT: Icons */}
                    <div className="flex! items-center! gap-1! sm:gap-2!">

                        {/* Cart */}
                        <Link
                            to="/cart"
                            aria-label="Cart"
                            className="
                                relative!
                                rounded-full!
                                p-2!
                                text-[#1F2937]!
                                no-underline!
                                transition-all!
                                duration-200!
                                hover:bg-[#F9FAFB]!
                                hover:text-brand-forest!
                            "
                        >
                            <ShoppingBag className="h-5! w-5!" />

                            {/* Cart Count */}
                            {cartCount > 0 && (
                                <span
                                    className={`absolute! -right-0.5! -top-0.5! flex! h-4.5! min-w-4.5! items-center! justify-center! rounded-full! px-1! text-[10px]! font-bold! text-[#111827]! ${pulse
                                        ? "animate-ping-once"
                                        : ""
                                        }`}
                                    style={{
                                        backgroundColor: GOLD,
                                    }}
                                >
                                    {cartCount > 99 ? "99+" : cartCount}
                                </span>
                            )}
                        </Link>

                        {/* Mobile Menu */}
                        <button
                            type="button"
                            aria-label="Open menu"
                            onClick={() => setMobileOpen(true)}
                            className="
                                p-2!
                                text-[#1F2937]!
                                transition-colors!
                                hover:text-[#D4AF37]!
                                lg:hidden!
                            "
                        >
                            <Menu className="h-6! w-6!" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Drawer */}
            <div
                className={`fixed! inset-0! z-60! transition-opacity! duration-300! lg:hidden! ${mobileOpen
                    ? "visible! opacity-100!"
                    : "pointer-events-none! opacity-0!"
                    }`}
            >
                {/* Overlay */}
                <div
                    className="absolute! inset-0! bg-black/50!"
                    onClick={() => setMobileOpen(false)}
                />

                {/* Drawer */}
                <aside
                    className={`absolute! left-0! top-0! flex! h-full! w-[85%]! max-w-sm! transform! flex-col! bg-white! shadow-2xl! transition-transform! duration-500! ease-in-out! ${mobileOpen
                        ? "translate-x-0!"
                        : "-translate-x-full!"
                        }`}
                >
                    {/* Drawer Header */}
                    <div className="flex! items-center! justify-between! border-b! border-[#F9FAFB]! p-5!">
                        <div className="flex! items-center! gap-2!">
                            <div
                                className="flex! h-9! w-9! items-center! justify-center! rounded-full! border-2!"
                                style={{
                                    borderColor: GOLD,
                                }}
                            >
                                <span
                                    className="font-serif! font-bold!"
                                    style={{
                                        color: GOLD,
                                    }}
                                >
                                    G
                                </span>
                            </div>

                            <div>
                                <div className="font-serif! font-semibold! text-[#111827]!">
                                    GLOWRARE
                                </div>

                                <div className="text-[9px]! uppercase! tracking-[0.18em]! text-[#6B7280]!">
                                    Since 1995
                                </div>
                            </div>
                        </div>

                        <button
                            type="button"
                            aria-label="Close menu"
                            onClick={() => setMobileOpen(false)}
                            className="p-2! text-[#1F2937]! transition-colors! hover:text-[#D4AF37]!"
                        >
                            <X className="h-6! w-6!" />
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    <nav className="flex-1! overflow-y-auto! py-2!">
                        <MobileLink
                            href="/"
                            onClick={() => setMobileOpen(false)}
                        >
                            Home
                        </MobileLink>

                        <MobileLink
                            href="/about"
                            onClick={() => setMobileOpen(false)}
                        >
                            About Us
                        </MobileLink>

                        <MobileLink
                            href="/products"
                            onClick={() => setMobileOpen(false)}
                        >
                            Products
                        </MobileLink>

                        <MobileLink
                            href="/bundles"
                            onClick={() => setMobileOpen(false)}
                        >
                            Bundles
                        </MobileLink>

                        <MobileLink
                            href="/contact"
                            onClick={() => setMobileOpen(false)}
                        >
                            Contact
                        </MobileLink>

                        {/* Mobile Cart */}
                        <Link
                            to="/cart"
                            onClick={() => setMobileOpen(false)}
                            className="
                                mx-4!
                                mt-3!
                                flex!
                                items-center!
                                justify-between!
                                rounded-lg!
                                bg-[#F9FAFB]!
                                px-4!
                                py-3!
                                text-sm!
                                font-semibold!
                                text-[#1F2937]!
                                no-underline!
                            "
                        >
                            <span className="flex! items-center! gap-3!">
                                <ShoppingBag
                                    className="h-5! w-5!"
                                    style={{
                                        color: GOLD,
                                    }}
                                />

                                Shopping Cart
                            </span>

                            {cartCount > 0 && (
                                <span
                                    className="flex! h-6! min-w-6! items-center! justify-center! rounded-full! px-1.5! text-[10px]! font-bold! text-[#111827]!"
                                    style={{
                                        backgroundColor: GOLD,
                                    }}
                                >
                                    {cartCount > 99
                                        ? "99+"
                                        : cartCount}
                                </span>
                            )}
                        </Link>
                    </nav>

                    {/* Mobile Footer */}
                    <div className="space-y-3! border-t! border-[#F9FAFB]! p-5!">
                        <div className="flex! items-center! justify-around!">
                            <Link
                                to="/cart"
                                onClick={() => setMobileOpen(false)}
                                className="relative! rounded-full! p-2! text-[#1F2937]!"
                            >
                                <ShoppingBag className="h-5! w-5!" />

                                {cartCount > 0 && (
                                    <span
                                        className="absolute! -right-1! -top-1! flex! h-5! min-w-5! items-center! justify-center! rounded-full! px-1! text-[10px]! font-bold! text-[#111827]!"
                                        style={{
                                            backgroundColor: GOLD,
                                        }}
                                    >
                                        {cartCount > 99
                                            ? "99+"
                                            : cartCount}
                                    </span>
                                )}
                            </Link>
                        </div>

                        <a
                            href="tel:+923000000000"
                            className="flex! items-center! justify-center! gap-2! text-md! text-[#1F2937]! no-underline!"
                        >
                            <Phone
                                className="h-4! w-4!"
                                style={{
                                    color: GOLD,
                                }}
                            />

                            +92 300 0000000
                        </a>
                    </div>
                </aside>
            </div>
        </>
    );
}

/* --------------------------------
   Desktop Navigation Link
-------------------------------- */

function NavLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            to={href}
            className="
                group/link
                px-4!
                py-2!
                text-md!
                font-medium!
                text-[#1F2937]!
                no-underline!
                transition-colors!
                hover:text-brand-forest!
            "
        >
            <span className="relative!">
                {children}

                <span
                    className="
                        absolute!
                        -bottom-1!
                        left-0!
                        h-px!
                        w-full!
                        origin-left!
                        scale-x-0!
                        bg-brand-forest!
                        transition-transform!
                        duration-300!
                        group-hover/link:scale-x-100!
                    "
                />
            </span>
        </Link>
    );
}

/* --------------------------------
   Mobile Navigation Link
-------------------------------- */

function MobileLink({
    href,
    onClick,
    children,
}: {
    href: string;
    onClick?: () => void;
    children: React.ReactNode;
}) {
    return (
        <Link
            to={href}
            onClick={onClick}
            className="
                block!
                px-6!
                py-3!
                text-[15px]!
                font-medium!
                text-[#1F2937]!
                no-underline!
                transition-colors!
                hover:bg-[#F9FAFB]!
                hover:text-[#D4AF37]!
            "
        >
            {children}
        </Link>
    )
}