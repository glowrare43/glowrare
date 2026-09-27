import React from "react";

const PolicyLayout = ({ title, children }) => {
    return (
        <section className="section bg-brand-background!">
            <div className="custom-container">
                <div className="mx-auto! max-w-225!">
                    <div className="mb-10! text-center!">
                        <span className="text-xs! font-bold! uppercase! tracking-[2px]! text-brand-forest!">Glowrare</span>
                        <h1 className="mt-3! text-3xl! font-bold! text-brand-text! md:text-4xl!">{title}</h1>
                    </div>

                    <div className="rounded-2xl! bg-white! p-7! shadow-[0_8px_30px_rgba(37,77,58,0.06)]! md:p-10!">{children}</div>
                </div>
            </div>
        </section>
    )
}

export default PolicyLayout