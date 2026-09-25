import Product1 from "../../../assets/product-1.png";
import Product2 from "../../../assets/product-2.jpg"

const ProductRemarks = () => {
    const reviews = [
        {
            image: Product1,
            name: 'Ayesha Khan',
            review: 'I absolutely love this product. It feels gentle on my skin and leaves it feeling fresh, smooth and beautifully nourished.',
        },
        {
            image: Product2,
            name: 'Hassan Ali',
            review: 'The quality is excellent and the results have been amazing. Definitely one of my favorite skincare products.',
        },
    ]

    return (
        <section className="section w-full! bg-brand-background!">
            <div className="custom-container">

                <div className="mb-10! flex! items-center! justify-between!">
                    <h2 className="section-title">What People Say</h2>
                </div>

                <div className="grid! grid-cols-2! gap-5! max-[850px]:grid-cols-1!">
                    {reviews.map((review, index) => (
                        <div key={index} className="flex min-h-45! overflow-hidden! rounded-2xl! bg-white shadow-[0_5px_25px_rgba(0,0,0,0.04)]!">
                            <div className="w-47.5! shrink-0 overflow-hidden max-[600px]:w-32.5! max-[450px]:w-27.5!">
                                <img src={review.image} alt={review.name} className="h-full! w-full! object-cover!" />
                            </div>

                            <div className="flex! flex-1! flex-col! justify-between! p-6! min-[600px]:p-4!">
                                <p className="text-[14px]! leading-normal! text-gray-500! font-normal! min-[600px]:text-xl!">
                                    {review.review}
                                </p>


                                {/* Customer */}
                                <div className="mt-5! flex! items-center! justify-between!">
                                    <div className="flex! items-center! gap-3!">
                                        <div className="flex h-9.5! w-9.5! shrink-0! items-center! justify-center! rounded-full! bg-brand-green/45! text-brand-forest!">
                                            <i className="fa-solid fa-user min-[600px]:text-lg!"></i>
                                        </div>

                                        <div>
                                            <h4 className="text-[12px] min-[600px]:text-[16px]! font-semibold! text-[#333]">{review.name}</h4>
                                            <div className="mt-1! flex! gap-0.5! text-[#e7a52b]!">
                                                <i className="fa-solid fa-star text-[9px] min-[600px]:text-[11px]"></i>
                                                <i className="fa-solid fa-star text-[9px] min-[600px]:text-[11px]"></i>
                                                <i className="fa-solid fa-star text-[9px] min-[600px]:text-[11px]"></i>
                                                <i className="fa-solid fa-star text-[9px] min-[600px]:text-[11px]"></i>
                                                <i className="fa-solid fa-star text-[9px] min-[600px]:text-[11px]"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default ProductRemarks