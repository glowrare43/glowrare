import TestimonialCard from "../../../components/cards/TestimonialCard";
import { testimonialsCardData } from "../../../constant/cards_data";

const Testimonials = () => {
    return (
        <section className="section bg-brand-background">
            <div className="custom-container">

                <div className="mx-auto! mb-14! max-w-3xl! text-center! lg:mb-18!">

                    <span className="mb-3! inline-block! text-sm! font-semibold! uppercase! tracking-[0.2em]! text-brand-ruby!">
                        Our Testimonials
                    </span>

                    <h2 className="mb-5! text-4xl! font-semibold! leading-tight! text-brand-text! sm:text-5xl!">
                        What Our Customers Say
                    </h2>

                    <p className="mx-auto! max-w-2xl! text-base! leading-8! text-brand-text-light! sm:text-lg!">
                        Thousands of happy customers trust Glowrare for premium
                        skincare products and a beautiful skincare experience.
                    </p>
                </div>

                <div className="grid! grid-cols-1! gap-6! md:grid-cols-2! lg:grid-cols-3!">
                    {testimonialsCardData.map((testimonial, index) => (
                        <TestimonialCard data={testimonial} key={index} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;