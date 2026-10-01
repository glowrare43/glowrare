import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { productsData } from "../../../constant/cards_data"
import { addToCart } from "../../../store/slices/cart_slice"

const ProductDetails = () => {
    const { slug } = useParams()
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)

    const product = productsData.find((item) => item.slug === slug);

    if (!product) {
        return (
            <section className="section">
                <div className="custom-container text-center!">
                    <h1 className="text-2xl! font-bold! text-brand-text!">
                        Product Not Found
                    </h1>
                    <Link
                        to="/products"
                        className="mt-5! inline-flex! rounded-md! bg-brand-forest! px-5! py-3! text-white! no-underline! transition-all! hover:bg-brand-green!"
                    >
                        Back To Products
                    </Link>
                </div>
            </section>
        );
    }


    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    }

    const decreaseQuantity = () => {
        setQuantity((prev) => Math.max(1, prev - 1));
    }


    const unitPrice = Number(product?.price?.replace(/[^0-9]/g, "") || 0);
    const totalPrice = unitPrice * quantity;

    const handleAddToCart = () => {
        const productDetails = {
            id: product.id,
            slug: product.slug,
            name: product.name,
            image: product.image,
            price: Number(product.price.replace(/[^0-9]/g, "")),
            quantity,
        }

        dispatch(addToCart(productDetails))
    }

    return (
        <section className="section bg-brand-background!">
            <div className="custom-container">
                {/* Breadcrumb */}
                <div className="mb-7! flex! flex-wrap! items-center! gap-2! text-sm! text-brand-muted!">
                    <Link to="/" className="text-brand-muted! no-underline! transition-colors! hover:text-brand-forest!">Home</Link>
                    <span>/</span>
                    <Link to="/products" className="text-brand-muted! no-underline! transition-colors! hover:text-brand-forest!">Products</Link>
                    <span>/</span>
                    <span className="font-medium! text-brand-text!">{product.name}</span>
                </div>

                {/* Main Product */}
                <div className="grid! grid-cols-1! items-center! gap-10! lg:grid-cols-2! lg:gap-16!">
                    {/* Product Image */}
                    <div className="group! relative! overflow-hidden! rounded-[28px]! bg-brand-mist! p-5! shadow-[0_12px_40px_rgba(37,77,58,0.07)]!">
                        {product.badge && (
                            <span
                                className={`absolute! left-8! top-8! z-10! rounded-full! px-4! py-2! text-[11px]! font-bold! tracking-[1px]! text-white! shadow-md!
                                ${product.badge === "SALE"
                                        ? "bg-brand-ruby!"
                                        : "bg-brand-forest!"
                                    }`}
                            >
                                {product.badge}
                            </span>
                        )}

                        <div className="flex! min-h-125! items-center! justify-center! overflow-hidden! rounded-[22px]! bg-white!">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-125! w-full! object-cover! transition-transform! duration-700! group-hover:scale-[1.03]!"
                            />
                        </div>
                    </div>

                    {/* Product Information */}
                    <div className="py-3!">
                        <span className="mb-3! block! text-xs! font-bold! uppercase! tracking-[2px]! text-brand-forest!">
                            {product.category}
                        </span>

                        <h1 className="m-0! max-w-150! text-3xl! font-bold! leading-[1.15]! text-brand-text! md:text-[42px]!">
                            {product.name}
                        </h1>

                        {/* Rating */}
                        <div className="mt-5! flex! items-center! gap-3!">
                            <div className="flex! items-center! gap-1! text-brand-gold!">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span key={star} className="text-base!">★</span>
                                ))}
                            </div>

                            <span className="text-sm! text-brand-muted!">
                                {product.rating} · {product.reviews} Reviews
                            </span>
                        </div>

                        {/* Price */}
                        <div className="mt-6! flex! flex-wrap! items-center! gap-3!">
                            <span className="text-3xl! font-bold! text-brand-forest!">
                                Rs. {totalPrice.toLocaleString("en-PK")}
                            </span>

                            {product.oldPrice && (
                                <span className="text-base! text-brand-muted! line-through!">
                                    {product.oldPrice}
                                </span>
                            )}
                        </div>

                        <div className="my-6! h-px! bg-brand-border!" />

                        {/* Description */}
                        <p className="max-w-150! text-[15px]! leading-7! text-brand-muted!">
                            {product.shortDescription}
                        </p>

                        {/* Quantity + Cart */}
                        <div className="mt-7! flex! flex-col! gap-3! sm:flex-row!">
                            <div className="flex! h-14! w-fit! items-center! overflow-hidden! rounded-xl! border! border-brand-border! bg-white!">
                                <button
                                    type="button"
                                    onClick={decreaseQuantity}
                                    className="h-full! w-12! text-lg! text-brand-text! transition-colors! hover:bg-brand-mist! disabled:cursor-not-allowed! disabled:opacity-40!"
                                >
                                    −
                                </button>

                                <span className="w-10! text-center! text-sm! font-semibold! text-brand-text!">
                                    {quantity}
                                </span>

                                <button
                                    type="button"
                                    onClick={increaseQuantity}
                                    className="h-full! w-12! text-lg! text-brand-text! transition-colors! hover:bg-brand-mist! disabled:cursor-not-allowed! disabled:opacity-40!"
                                >
                                    +
                                </button>
                            </div>

                            <button
                                className="flex! h-14! flex-1! items-center! justify-center! gap-3! rounded-xl! bg-brand-forest! px-7! font-semibold! text-white! shadow-[0_10px_25px_rgba(37,77,58,0.16)]! transition-all! duration-300! hover:-translate-y-0.5! hover:bg-brand-green! hover:shadow-[0_14px_30px_rgba(37,77,58,0.22)]! disabled:cursor-not-allowed! disabled:opacity-50!"
                                onClick={handleAddToCart}
                            >
                                <i className="fa-solid fa-cart-shopping text-sm!" />
                                Add To Cart
                            </button>
                        </div>

                        {/* Quick Info */}
                        <div className="mt-7! grid! grid-cols-2! gap-3! border-t! border-brand-border! pt-6! sm:grid-cols-3!">
                            <div>
                                <span className="block! text-xs! text-brand-muted!">Size</span>
                                <span className="mt-1! block! text-sm! font-semibold! text-brand-text!">
                                    {product.size}
                                </span>
                            </div>

                            <div>
                                <span className="block! text-xs! text-brand-muted!">Skin Type</span>
                                <span className="mt-1! block! text-sm! font-semibold! text-brand-text!">
                                    {product.skinType}
                                </span>
                            </div>

                            <div>
                                <span className="block! text-xs! text-brand-muted!">SKU</span>
                                <span className="mt-1! block! text-sm! font-semibold! text-brand-text!">
                                    {product.sku}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Details */}
                <div className="mt-20! rounded-[26px]! border! border-brand-border! bg-white! p-7! shadow-[0_10px_40px_rgba(37,77,58,0.05)]! md:p-10!">
                    <div className="grid! grid-cols-1! gap-10! lg:grid-cols-3!">
                        {/* Description */}
                        <div>
                            <div className="mb-4! flex! items-center! gap-3!">
                                <span className="flex! h-9! w-9! items-center! justify-center! rounded-full! bg-brand-mist! text-brand-forest!">
                                    <i className="fa-solid fa-leaf text-sm!" />
                                </span>
                                <h2 className="m-0! text-lg! font-bold! text-brand-text!">
                                    Description
                                </h2>
                            </div>

                            <p className="m-0! text-sm! leading-7! text-brand-muted!">
                                {product.description}
                            </p>
                        </div>

                        {/* Benefits */}
                        <div>
                            <div className="mb-4! flex! items-center! gap-3!">
                                <span className="flex! h-9! w-9! items-center! justify-center! rounded-full! bg-brand-mist! text-brand-forest!">
                                    <i className="fa-solid fa-check text-sm!" />
                                </span>
                                <h2 className="m-0! text-lg! font-bold! text-brand-text!">
                                    Benefits
                                </h2>
                            </div>

                            <ul className="m-0! list-none! space-y-3! p-0!">
                                {product.benefits?.map((benefit, index) => (
                                    <li
                                        key={index}
                                        className="flex! items-start! gap-3! text-sm! leading-6! text-brand-muted!"
                                    >
                                        <i className="fa-solid fa-circle-check mt-1! text-xs! text-brand-forest!" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Ingredients */}
                        <div>
                            <div className="mb-4! flex! items-center! gap-3!">
                                <span className="flex! h-9! w-9! items-center! justify-center! rounded-full! bg-brand-mist! text-brand-forest!">
                                    <i className="fa-solid fa-flask text-sm!" />
                                </span>
                                <h2 className="m-0! text-lg! font-bold! text-brand-text!">
                                    Ingredients
                                </h2>
                            </div>

                            <ul className="m-0! list-none! space-y-3! p-0!">
                                {product.ingredients?.map(
                                    (ingredient, index) => (
                                        <li
                                            key={index}
                                            className="flex! items-center! gap-3! text-sm! text-brand-muted!"
                                        >
                                            <span className="h-1.5! w-1.5! rounded-full! bg-brand-forest!" />
                                            {ingredient}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>

                    {/* How To Use */}
                    <div className="mt-10! border-t! border-brand-border! pt-8!">
                        <div className="flex! items-center! gap-3!">
                            <span className="flex! h-9! w-9! items-center! justify-center! rounded-full! bg-brand-mist! text-brand-forest!">
                                <i className="fa-solid fa-hand-sparkles text-sm!" />
                            </span>

                            <h2 className="m-0! text-lg! font-bold! text-brand-text!">
                                How To Use
                            </h2>
                        </div>

                        <p className="mt-4! max-w-225! text-sm! leading-7! text-brand-muted!">
                            {product.howToUse}
                        </p>
                    </div>
                </div>

                {/* Additional Information */}
                <div className="mt-8! grid! grid-cols-1! gap-5! md:grid-cols-3!">
                    <div className="rounded-2xl! border! border-brand-border! bg-white! p-6!">
                        <i className="fa-solid fa-truck-fast text-xl! text-brand-forest!" />
                        <h3 className="mt-4! text-base! font-bold! text-brand-text!">
                            Delivery Information
                        </h3>
                        <p className="mt-2! text-sm! leading-6! text-brand-muted!">
                            {product.shippingInfo}
                        </p>
                    </div>

                    <div className="rounded-2xl! border! border-brand-border! bg-white! p-6!">
                        <i className="fa-solid fa-rotate-left text-xl! text-brand-forest!" />
                        <h3 className="mt-4! text-base! font-bold! text-brand-text!">
                            Return Policy
                        </h3>
                        <p className="mt-2! text-sm! leading-6! text-brand-muted!">
                            {product.returnPolicy}
                        </p>
                    </div>

                    <div className="rounded-2xl! border! border-brand-border! bg-white! p-6!">
                        <i className="fa-solid fa-shield-heart text-xl! text-brand-forest!" />
                        <h3 className="mt-4! text-base! font-bold! text-brand-text!">
                            Suitable For
                        </h3>
                        <p className="mt-2! text-sm! leading-6! text-brand-muted!">
                            {product.suitableFor}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;