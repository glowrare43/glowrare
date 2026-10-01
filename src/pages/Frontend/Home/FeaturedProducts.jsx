import { Link } from "react-router-dom";
import ProductCard from "../../../components/cards/ProductCard";
import { productsData } from "../../../constant/cards_data";

const FeaturedProducts = () => {
    return (
        <section className="section bg-brand-mist!">
            <div className="custom-container">

                <div className="mb-8! flex! items-end! justify-between! gap-5! max-[576px]:flex-col! max-[576px]:items-start!">
                    <div>
                        <span className="mb-2! block! text-[12px]! font-semibold! tracking-[2px]! text-brand-green!">OUR COLLECTION</span>
                        <h2 className="m-0! text-[32px]! font-semibold! leading-tight! text-brand-forest! max-[576px]:text-[25px]!">Featured Products</h2>
                    </div>

                    <Link to="/products" className="group flex! items-center! gap-2! text-[13px]! font-semibold! text-brand-forest! no-underline! transition-all! duration-300! hover:text-brand-gold!">
                        View All Products
                        <i className="fa-solid fa-arrow-right text-[11px]! transition-transform! duration-300! group-hover:translate-x-1!"></i>
                    </Link>
                </div>


                <div className="grid! grid-cols-1! gap-5! sm:grid-cols-2! lg:grid-cols-3!">
                    {productsData.map((product, index) => (
                        <ProductCard data={product} key={index} />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default FeaturedProducts