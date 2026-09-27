import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { increaseQuantity, decreaseQuantity, removeFromCart, clearCart } from "../../../store/slices/cart_slice"

const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart.items)

    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

    const formatPrice = (price) => {
        return `Rs. ${price.toLocaleString()}/-`
    }

    if (cartItems.length === 0) {
        return (
            <section className="section bg-brand-background!">
                <div className="custom-container">
                    <div className="mx-auto! flex! min-h-100! max-w-150! flex-col! items-center! justify-center! text-center!">
                        <div className="flex! h-20! w-20! items-center! justify-center! rounded-full! bg-brand-mist! text-brand-forest!">
                            <i className="fa-solid fa-cart-shopping text-2xl!" />
                        </div>

                        <h1 className="mt-6! text-3xl! font-bold! text-brand-text!">Your Cart Is Empty</h1>

                        <p className="mt-3! max-w-110! text-sm! leading-6! text-brand-muted!">
                            Looks like you haven't added anything to your cart yet. Explore our products and find something you love.
                        </p>

                        <Link to="/products" className="mt-7! inline-flex! items-center! gap-2! rounded-xl! bg-brand-forest! px-7! py-3.5! text-sm! font-semibold! text-white! no-underline! transition-all! duration-300! hover:-translate-y-0.5! hover:bg-brand-green!">
                            <i className="fa-solid fa-arrow-left text-xs!" />
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="section bg-brand-background!">
            <div className="custom-container">
                {/* Heading */}
                <div className="mb-10!">
                    <span className="text-xs! font-bold! uppercase! tracking-[2px]! text-brand-forest!">Shopping Cart</span>
                    <h1 className="mt-2! text-3xl! font-bold! text-brand-text! md:text-4xl!">Your Cart</h1>
                    <p className="mt-2! text-sm! text-brand-muted!">
                        Review your selected products before checkout.
                    </p>
                </div>

                <div className="grid! grid-cols-1! gap-8! lg:grid-cols-[1fr_360px]!">
                    {/* Cart Items */}
                    <div className="space-y-4!">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex! flex-col! gap-5! rounded-2xl! border! border-brand-border! bg-white! p-4! shadow-[0_8px_30px_rgba(37,77,58,0.05)]! sm:flex-row! sm:items-center!">
                                {/* Image */}
                                <div className="h-28! w-full! shrink-0! overflow-hidden! rounded-xl! bg-brand-mist! sm:h-28! sm:w-28!">
                                    <img src={item.image} alt={item.name} className="h-full! w-full! object-cover!" />
                                </div>

                                {/* Product Info */}
                                <div className="min-w-0! flex-1!">
                                    <h2 className="m-0! text-base! font-bold! text-brand-text!">{item.name}</h2>

                                    <p className="mt-1! text-sm! font-semibold! text-brand-forest!">{formatPrice(item.price)}</p>

                                    {/* Quantity */}
                                    <div className="mt-4! flex! items-center! gap-3!">
                                        <div className="flex! h-9! items-center! overflow-hidden! rounded-lg! border! border-brand-border! bg-white!">
                                            <button type="button" onClick={() => dispatch(decreaseQuantity(item.id))}
                                                className="flex! h-full! w-9! items-center! justify-center! text-brand-text! transition-colors! hover:bg-brand-mist!"
                                            >
                                                −
                                            </button>

                                            <span className="w-9! text-center! text-sm! font-semibold! text-brand-text!">{item.quantity}</span>

                                            <button type="button" onClick={() => dispatch(increaseQuantity(item.id))}
                                                className="flex! h-full! w-9! items-center! justify-center! text-brand-text! transition-colors! hover:bg-brand-mist!"
                                            >
                                                +
                                            </button>
                                        </div>

                                        <button type="button" onClick={() => dispatch(removeFromCart(item.id))}
                                            className="text-xs! font-medium! text-brand-ruby! transition-colors! hover:underline!"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>

                                {/* Item Total */}
                                <div className="shrink-0! text-left! sm:text-right!">
                                    <span className="text-xs! text-brand-muted!">Total</span>
                                    <p className="mt-1! text-lg! font-bold! text-brand-forest!">
                                        {formatPrice(item.price * item.quantity)}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {/* Clear Cart */}
                        <div className="flex! justify-end!">
                            <button type="button" onClick={() => dispatch(clearCart())}
                                className="text-xs! font-medium! text-brand-muted! transition-colors! cursor-pointer! hover:text-brand-ruby!"
                            >
                                <i className="fa-solid fa-trash-can mr-1!" />
                                Clear Cart
                            </button>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="h-fit! rounded-2xl! border! border-brand-border! bg-white! p-6! shadow-[0_8px_30px_rgba(37,77,58,0.05)]! lg:sticky! lg:top-28!">
                        <h2 className="m-0! text-lg! font-bold! text-brand-text!">Order Summary</h2>

                        <div className="my-5! h-px! bg-brand-border!" />

                        <div className="flex! items-center! justify-between! text-sm!">
                            <span className="text-brand-muted!">Subtotal</span>
                            <span className="font-semibold! text-brand-text!">{formatPrice(subtotal)}</span>
                        </div>

                        <div className="mt-3! flex! items-center! justify-between! text-sm!">
                            <span className="text-brand-muted!">Delivery</span>
                            <span className="font-medium! text-brand-forest!">Calculated at checkout</span>
                        </div>

                        <div className="my-5! h-px! bg-brand-border!" />

                        <div className="flex! items-center! justify-between!">
                            <span className="font-bold! text-brand-text!">Total</span>
                            <span className="text-xl! font-bold! text-brand-forest!">{formatPrice(subtotal)}</span>
                        </div>

                        <Link to="/checkout" className="mt-6! flex! h-13! w-full! items-center! justify-center! gap-2! rounded-xl! bg-brand-forest! text-sm! font-semibold! text-white! no-underline! transition-all! duration-300! hover:-translate-y-0.5! hover:bg-brand-green! hover:shadow-[0_12px_25px_rgba(37,77,58,0.18)]!">
                            Proceed To Checkout <i className="fa-solid fa-arrow-right text-xs!" />
                        </Link>

                        <Link to="/products" className="mt-3! flex! h-11! w-full! items-center! justify-center! text-xs! font-medium! text-brand-muted! no-underline! transition-colors! hover:text-brand-forest!">
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart