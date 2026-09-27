import { productsData } from '../../../constant/cards_data'
import ProductCard from '../../../components/cards/ProductCard'

const ProductSection = () => {
    return (
        <section className="section pt-0!">
            <div className="custom-container">

                <div className=" text-center! mb-15!">
                    <span className="text-brand-forest! text-sm! font-bold! tracking-[3px]!">OUR COLLECTION</span>
                    <h2 className="mt-3.5! mb-3.5! text-[#222]! font-serif! text-[46px]! uppercase! max-[650px]:text-[36px]!">
                        Shop All Products
                    </h2>

                    <p className="text-[#777] text-base max-[650px]:text-sm">
                        Explore our full range of premium skincare essentials.
                    </p>
                </div>

                <div className="grid grid-cols-2! gap-8.75! max-[850px]:gap-6.25! max-[650px]:grid-cols-1!">
                    {productsData.map((product, index) => (
                        <div key={index} className={`${index === 2 ? "col-span-2! flex! justify-center! max-[650px]:col-span-1!" : ""}`}>
                            <div className={index === 2 ? "w-full! max-w-[calc(50%-17.5px)]! max-[850px]:max-w-[calc(50%-12.5px)]! max-[650px]:max-w-none!" : "w-full!"}>
                                <ProductCard data={product} />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default ProductSection