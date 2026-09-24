import React from 'react'

const TestimonialCard = ({ data }) => {
    return (
        <div className="group! relative! overflow-hidden! rounded-[28px]! border! border-brand-border! bg-brand-surface! p-7! transition-all! duration-500!
                hover:-translate-y-2! hover:border-brand-green-light! hover:shadow-[0_25px_55px_rgba(37,77,58,0.12)]!">

            <div className="pointer-events-none! absolute! -right-5! -top-8! text-[150px]! leading-none! text-brand-green-light/10!
                    transition-all! duration-500! group-hover:scale-110! group-hover:text-brand-green-light/15!">
                <i className="fa-solid fa-quote-right" />
            </div>

            <div className="absolute! left-7! top-0! h-1! w-12! rounded-b-full! bg-brand-gold! transition-all! duration-500! group-hover:w-24!" />

            <div className="relative! mb-5! flex! h-11! w-11! items-center! justify-center! rounded-2xl!bg-brand-forest! text-brand-gold! shadow-sm! transition-all! duration-500! group-hover:rotate-3! group-hover:scale-105!">
                <i className="fa-solid fa-quote-left text-lg!" />
            </div>

            <div className="relative! z-1!">
                <p className="mb-7! text-[18px]! font-medium! leading-8! tracking-[-0.01em]! text-brand-text!">
                    “{data.review}”
                </p>
            </div>

            {/* Stars */}
            <div className="mb-6! flex! items-center! gap-1.5!">
                {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star text-sm! text-brand-gold!" />
                ))}
                <span className="ml-2! text-xs! font-medium! text-brand-text-light!">5.0</span>
            </div>

            <div className="mb-5! h-px! w-full! bg-brand-border!" />

            <div className="flex! items-center! justify-between! gap-4!">
                <div className="flex! items-center! gap-3!">

                    <div className="flex! h-12! w-12! shrink-0! items-center! justify-center! rounded-full! border! border-brand-green-light! bg-brand-green-light/15 !text-brand-green! transition-all! duration-500! group-hover:bg-brand-forest! group-hover:text-white!">
                        <i className="fa-solid fa-user text-base!" />
                    </div>

                    <div>
                        <h3 className="text-base! font-semibold! text-brand-text!">
                            {data.name}
                        </h3>
                        <span className="text-sm! text-brand-text-light!">
                            {data.city}
                        </span>
                    </div>
                </div>

                <div className=" flex! h-9! w-9! items-center! justify-center! rounded-full! bg-brand-surface! text-brand-green! opacity-60! transition-all! duration-500! group-hover:opacity-100!">
                    <i className="fa-solid fa-quote-right text-xs!" />
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard