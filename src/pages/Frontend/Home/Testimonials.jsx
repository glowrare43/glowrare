import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TestimonialCard from "../../../components/cards/TestimonialCard";
import { testimonialsCardData } from "../../../constant/cards_data";

const Testimonials = () => {
    return (
        <section className="section overflow-hidden! bg-brand-background">
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

                <Swiper
                    modules={[Autoplay, FreeMode]}
                    slidesPerView={1}
                    spaceBetween={20}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                    loop={true}
                    freeMode={true}
                    speed={2000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    allowTouchMove={false}
                    className="client-swiper"
                >
                    {testimonialsCardData.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <TestimonialCard data={testimonial} />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
};

export default Testimonials;