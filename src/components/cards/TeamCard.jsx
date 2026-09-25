import React from 'react'

const TeamCard = ({data}) => {
    return (
        <div className="group! overflow-hidden! rounded-[26px]! border! border-brand-border! bg-brand-surface! shadow-lg! transition-all! duration-500! hover:-translate-y-2! hover:shadow-[0_22px_50px_rgba(37,77,58,0.13)]!">

            <div className="relative! overflow-hidden! p-2!">
                <div className="relative! overflow-hidden! rounded-[20px]!">
                    <img src={data?.image} alt={`${data?.name} - ${data?.role}`} className="h-77.5! w-full! object-cover! transition-transform! duration-700! group-hover:scale-105! md:h-87.5!" />

                    <div className="absolute! inset-0! bg-linear-to-t! from-brand-forest/45! via-transparent! to-transparent! opacity-60! transition-opacity! duration-500! group-hover:opacity-80!" />

                    <div className="absolute! bottom-4! left-1/2! -translate-x-1/2! whitespace-nowrap! rounded-full! border! border-white/40! bg-brand-forest/85! px-4! py-2! text-xs! font-semibold! tracking-wide! text-white! backdrop-blur-sm!">
                        {data?.role}
                    </div>
                </div>
            </div>

            <div className="px-6! pb-7! pt-4! text-center!">
                <div className="mx-auto! mb-3! h-px! w-10! bg-brand-gold! transition-all! duration-300! group-hover:w-16!" />
                <h3 className="font-serif! text-[25px]! font-medium! text-brand-forest! transition-colors! duration-300! group-hover:text-brand-green!">
                    {data?.name}
                </h3>
                <p className="mt-2! text-sm! text-brand-text-light!">{data?.role}</p>
            </div>
        </div>
    )
}

export default TeamCard
