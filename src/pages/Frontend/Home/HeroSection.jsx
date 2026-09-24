import { useEffect, useRef, useState } from "react";
import { SLIDES } from "../../../constant/hero_section_data";

const DURATION_MS = 3000

function HeroSection() {
    const [active, setActive] = useState(0);
    const [progress, setProgress] = useState(0);
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const startRef = useRef(performance.now());
    const rafRef = useRef(null);

    // Auto-advance with progress timer
    useEffect(() => {
        startRef.current = performance.now();
        const tick = (t) => {
            const elapsed = t - startRef.current;
            const p = Math.min(elapsed / DURATION_MS, 1);
            setProgress(p);
            if (p >= 1) {
                setActive((a) => (a + 1) % SLIDES.length);
                startRef.current = performance.now();
            }
            rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [active]);

    const goTo = (i) => {
        setActive(i);
        setProgress(0);
        startRef.current = performance.now();
    };

    const onMouseMove = (e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        setMouse({ x, y });
    };

    return (
        <main className="bg-black! text-white!">
            <section className="custom-container relative! h-[80vh]! w-full! overflow-hidden!" onMouseMove={onMouseMove} onMouseLeave={() => setMouse({ x: 0, y: 0 })}>
                {/* Background images stack */}
                {SLIDES.map((s, i) => {
                    const isActive = i === active;
                    const isPrev = i === (active - 1 + SLIDES.length) % SLIDES.length;
                    return (
                        <div
                            key={i}
                            className="absolute! inset-0! transition-all! duration-1400! ease-[cubic-bezier(0.22,1,0.36,1)]! will-change-transform!"
                            style={{
                                opacity: isActive ? 1 : 0,
                                transform: isActive ? `translateY(0%)` : isPrev ? "translateY(8%)" : "translateY(-8%)",
                                filter: isActive ? "blur(0px)" : "blur(12px)",
                                zIndex: isActive ? 1 : 0,
                            }}
                        >
                            <img
                                src={typeof s.image === "string" ? s.image : s.image.src}
                                alt={s.title}
                                width={1536}
                                height={1920}
                                {...(i === 0 ? {} : { loading: "lazy" })}
                                className="h-full! w-full! object-cover! will-change-transform!"
                                style={{ transform: isActive ? "scale(1)" : "scale(1.1)", transition: "transform 7000ms ease-out" }}
                            />
                        </div>
                    )
                })}

                {/* Overlays */}
                <div className="pointer-events-none absolute inset-0 z-2 bg-black/30" />
                <div className="pointer-events-none absolute inset-0 z-2 bg-linear-to-b from-black/40 via-transparent to-black/60" />
                <div className="pointer-events-none absolute inset-0 z-2 bg-linear-to-r from-black/50 via-black/10 to-transparent" />
                {/* Fabric texture (very subtle) */}
                <div
                    className="pointer-events-none absolute inset-0 z-3 opacity-[0.05] mix-blend-overlay"
                    style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.5 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")" }}
                />
                {/* Warm sun glow */}
                <div
                    className="pointer-events-none absolute inset-0 z-3"
                    style={{ background: "radial-gradient(circle at 80% 15%, oklch(0.85 0.10 80 / 0.18), transparent 55%)" }}
                />


                {/* Main content */}
                <div className="relative z-10 flex h-full items-center px-6 md:px-12 lg:px-20">
                    <div className="max-w-2xl">
                        {SLIDES.map((s, i) => {
                            if (i !== active) return null;
                            return (
                                <div key={i} className="relative">
                                    <h1
                                        className="text-[2rem]! leading-[1.08]! tracking-tight! uppercase! sm:text-[2.8rem]! md:text-[3.7rem]! lg:text-[4.6rem]!"
                                        style={{ fontWeight: 400, letterSpacing: "0.01em", animation: "revealUp 1100ms 250ms both cubic-bezier(0.22,1,0.36,1)", }}
                                    >
                                        {s.title}
                                    </h1>

                                    <p className="mt-5! max-w-117.5! text-[14px]! leading-7! text-white/80! md:text-[15px]!" style={{ animation: "revealUp 1100ms 500ms both cubic-bezier(0.22,1,0.36,1)" }}>
                                        {s.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right vertical navigation */}
                <nav className="absolute! right-6! top-1/2! z-20! hidden! -translate-y-1/2! md:block! md:right-10! lg:right-14!" aria-label="Slide navigation">
                    <ul className="flex! flex-col! gap-6!">
                        {SLIDES.map((_, i) => {
                            const isActive = i === active;
                            return (
                                <li key={i}>
                                    <button
                                        onClick={() => goTo(i)}
                                        className="group flex items-center gap-4"
                                        aria-label={`Go to slide ${i + 1}`}
                                    >
                                        <span
                                            className="relative block h-px overflow-hidden bg-white/20 transition-all duration-500"
                                            style={{ width: isActive ? 64 : 24 }}
                                        >
                                            <span
                                                className="absolute inset-y-0 left-0 bg-[#D9B06B]"
                                                style={{
                                                    width: isActive ? `${progress * 100}%` : "0%",
                                                    transition: isActive ? "none" : "width 400ms ease",
                                                }}
                                            />
                                        </span>
                                        <span
                                            className="font-light tabular-nums tracking-widest transition-all duration-500"
                                            style={{
                                                fontFamily: "var(--font-display)",
                                                fontSize: isActive ? "1.5rem" : "1rem",
                                                color: isActive ? "#D9B06B" : "rgba(255,255,255,0.5)",
                                            }}
                                        >
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Mobile dots */}
                <div className="absolute bottom-24 left-1/2 z-20 flex -translate-x-1/2 gap-2 md:hidden">
                    {SLIDES.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className="h-1.5 rounded-full transition-all duration-500"
                            style={{
                                width: i === active ? 28 : 8,
                                backgroundColor: i === active ? "#D9B06B" : "rgba(255,255,255,0.35)",
                            }}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </section>

            <style>{`
        @keyframes revealUp {
          0% { opacity: 0; transform: translateY(28px); filter: blur(6px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes fadePulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        @keyframes scrollLine {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
          50% { transform: translateY(-40px) translateX(10px); opacity: 0.7; }
        }
      `}</style>
        </main>
    )
}


export default HeroSection