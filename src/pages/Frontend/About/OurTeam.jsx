import React from "react";
import TeamCard from "../../../components/cards/TeamCard";
import Team1 from "../../../assets/team-ceo.jpg"
import Team2 from "../../../assets/team-marketing.jpg"
import Team3 from "../../../assets/team-sale.jpg"


const OurTeam = () => {
    const team = [
        { image: Team1, name: "Ayesha Khan", role: "Founder & CEO" },
        { image: Team2, name: "Sara Malik", role: "Marketing Manager" },
        { image: Team3, name: "Hina Raza", role: "Customer Support" },
    ]

    return (
        <section className="section relative! overflow-hidden!">

            <div className="custom-container relative! mx-auto!">

                <div className="mx-auto! mb-10! text-center! md:mb-12!">
                    <div className="mb-4! flex! items-center! justify-center! gap-3! text-xs! font-bold! uppercase! tracking-[3px]! text-brand-green!">
                        <span className="h-px! w-10! bg-brand-green!" />
                        Meet Our Team
                        <span className="h-px! w-10! bg-brand-green!" />
                    </div>

                    <h2 className="mb-4! font-serif! text-[34px]! font-medium! leading-tight! text-brand-forest! sm:text-[40px]! md:text-[48px]!">
                        The Faces Behind
                        <span className=" text-brand-green!">Glowrare</span>
                    </h2>
                </div>

                <div className="grid! grid-cols-1! gap-7! md:grid-cols-2! lg:grid-cols-3! lg:gap-8!">
                    {team.map((item, index) => (
                        <TeamCard data={item} key={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurTeam