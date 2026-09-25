import { useEffect, useState } from "react";
import { Phone, ShoppingBag, Menu, X} from "lucide-react";
import { Link } from "react-router-dom";

const GOLD = "#D4AF37";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [cartCount] = useState(3);
    const [pulse, setPulse] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setPulse(true);
        const t = setTimeout(() => setPulse(false), 600);
        return () => clearTimeout(t);
    }, [cartCount]);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    return (
        <>
            <header className={`sticky! top-0! z-50! w-full! transition-all! duration-300! shadow-sm bg-white`}>
                <div className={`custom-container flex! items-center! justify-between! transition-all! duration-300! h-20!`}>
                    {/* LEFT: Logo */}
                    <Link to="/" className="flex items-center gap-3 shrink-0 group">
                        <div className="leading-tight">
                            <div className={`font-serif font-semibold tracking-wide text-[#111827] transition-all duration-300 text-xl`}>
                                GLOWRARE
                            </div>
                        </div>
                    </Link>

                    {/* CENTER: Navigation */}
                    <nav className="hidden! lg:flex! items-center! gap-1!">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/about">About Us</NavLink>
                        <NavLink href="/product">Products</NavLink>
                        <NavLink href="/bundles">Bundles</NavLink>
                        <NavLink href="/contact">Contact</NavLink>
                    </nav>

                    {/* RIGHT: Icons */}
                    <div className="flex! items-center! gap-1! sm:gap-2!">
                        <IconBtn label="Cart">
                            <ShoppingBag className="w-5! h-5!" />
                            <span
                                className={`absolute -top-0.5 -right-0.5 min-w-4.5! h-4.5! px-1! rounded-full! text-[10px]! font-bold! flex! items-center! justify-center! text-[#111827]! ${pulse ? "animate-ping-once" : ""}`}
                                style={{ backgroundColor: GOLD }}
                            >
                                {cartCount}
                            </span>
                        </IconBtn>
                        <button aria-label="Open menu" onClick={() => setMobileOpen(true)} className="lg:hidden p-2! text-[#1F2937]! hover:text-[#D4AF37]! transition-colors!">
                            <Menu className="w-6! h-6!" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile drawer */}
            <div className={`fixed! inset-0! z-60! lg:hidden! transition-opacity! duration-300! ${mobileOpen ? "opacity-100! visible!" : "opacity-0! pointer-events-none!"}`}>
                <div className="absolute! inset-0! bg-black/50!" onClick={() => setMobileOpen(false)} />

                <aside className={`absolute! top-0! left-0! h-full! w-[85%]! max-w-sm! bg-white! shadow-2xl! flex! flex-col! transform! transition-transform! duration-500! ease-in-out! ${mobileOpen ? "translate-x-0!" : "-translate-x-full!"}`}>
                    <div className="flex! items-center! justify-between! p-5! border-b! border-[#F9FAFB]!">
                        <div className="flex! items-center! gap-2!">
                            <div className="h-9! w-9! flex! items-center! justify-center! rounded-full! border-2!" style={{ borderColor: GOLD }}>
                                <span className="font-serif! font-bold!" style={{ color: GOLD }}>
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
                        <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className="p-2! text-[#1F2937]! hover:text-[#D4AF37]! transition-colors!">
                            <X className="w-6! h-6!" />
                        </button>
                    </div>

                    <nav className="flex-1! overflow-y-auto! py-2!">
                        <MobileLink href="/" onClick={() => setMobileOpen(false)}>Home</MobileLink>
                        <MobileLink href="#about" onClick={() => setMobileOpen(false)}>About Us</MobileLink>
                        <MobileLink href="#contact" onClick={() => setMobileOpen(false)}>Products</MobileLink>
                        <MobileLink href="#contact" onClick={() => setMobileOpen(false)}>Bundles</MobileLink>
                        <MobileLink href="#blog" onClick={() => setMobileOpen(false)}>Contact </MobileLink>
                    </nav>

                    <div className="border-t! border-[#F9FAFB]! p-5! space-y-3!">
                        <div className="flex! items-center! justify-around!">
                            <IconBtn label="Cart">
                                <ShoppingBag className="w-5! h-5!" />
                            </IconBtn>
                        </div>
                        <a href="tel:+923000000000" className="flex! items-center! justify-center! gap-2! text-md! text-[#1F2937]!">
                            <Phone className="w-4! h-4!" style={{ color: GOLD }} />
                            +92 300 0000000
                        </a>
                    </div>
                </aside>
            </div>
        </>
    )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link to={href} className="group/link px-4! py-2! text-md! font-medium! text-[#1F2937]! hover:text-brand-forest! transition-colors!">
            <span className="relative!">
                {children}
                <span className="absolute! left-0! -bottom-1! h-px! w-full! origin-left! scale-x-0! bg-brand-forest! transition-transform! duration-300! group-hover/link:scale-x-100!" />
            </span>
        </Link>
    )
}

function IconBtn({ children, label, className = "", }: { children: React.ReactNode; label: string; className?: string }) {
    return (
        <button aria-label={label} className={`relative! p-2! rounded-full! text-[#1F2937]! hover:text-brand-forest! hover:bg-[#F9FAFB]! transition-all! duration-200! ${className}`}>
            {children}
        </button>
    )
}

function MobileLink({ href, onClick, children }: { href: string; onClick?: () => void; children: React.ReactNode }) {
    return (
        <Link to={href} onClick={onClick} className="block! px-6! py-3! text-[15px]! font-medium! text-[#1F2937]! hover:text-[#D4AF37]! hover:bg-[#F9FAFB]! transition-colors!">
            {children}
        </Link>
    )
}