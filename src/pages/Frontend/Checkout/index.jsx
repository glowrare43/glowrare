import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Check, MapPin, Phone, ShoppingBag, User } from "lucide-react";

const GOLD = "#D4AF37";

const Checkout = () => {
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.items);
    const [paymentMethod, setPaymentMethod] = useState("cod");

    const [formData, setFormData] = useState({ fullName: "", phone: "", email: "", city: "", address: "", notes: "" });

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const getPrice = (price) => {
        if (typeof price === "number") return price

        return Number(
            String(price).replace(/Rs\.?/gi, "").replace(/,/g, "").replace(/\/-/g, "").trim()) || 0
    }

    const subtotal = useMemo(() => {
        return cartItems.reduce((total, item) => {
            const price = getPrice(item.price);
            const quantity = item.quantity || 1;
            return total + price * quantity;
        }, 0);
    }, [cartItems]);

    const shipping = subtotal > 0 ? 200 : 0;
    const total = subtotal + shipping;

    const handleSubmit = (e) => {
        e.preventDefault()

        const orderDetails = { customer: formData, items: cartItems, paymentMethod, subtotal, shipping, total }

        const itemsMessage = cartItems
            .map((item, index) => `${index + 1}. ${item.name} x ${item.quantity} = Rs. ${(getPrice(item.price) * item.quantity).toLocaleString()}`)
            .join("\n");

        const message = `
*NEW ORDER RECEIVED*

━━━━━━━━━━━━━━━━━━
*CUSTOMER INFORMATION*
━━━━━━━━━━━━━━━━━━

Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "Not provided"}

*DELIVERY INFORMATION*

City: ${formData.city}
Address: ${formData.address}

*ORDER DETAILS*

${itemsMessage}

━━━━━━━━━━━━━━━━━━
Subtotal: Rs. ${subtotal.toLocaleString()}
Shipping: Rs. ${shipping.toLocaleString()}
*Total: Rs. ${total.toLocaleString()}*
━━━━━━━━━━━━━━━━━━

*PAYMENT METHOD*
Cash on Delivery

*ORDER NOTES*
${formData.notes || "No notes"}

Thank you for your order! 
Please confirm the order details.

— *Glowrare*
`.trim();

        const whatsappNumber = "923287225203";

        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank")

        console.log("Order Data:", orderDetails)
    }

    if (!cartItems.length) {
        return (
            <section className="min-h-[70vh] flex items-center justify-center px-6!">
                <div className="text-center">
                    <ShoppingBag size={52} strokeWidth={1.2} className="mx-auto! mb-5!" />

                    <h2 className="text-2xl! font-semibold! mb-2!">
                        Your Cart is Empty
                    </h2>

                    <p className="text-gray-500! mb-6!">
                        Add some products before proceeding to checkout.
                    </p>

                    <Link
                        to="/products"
                        className="inline-flex! items-center! justify-center! bg-black! text-white! px-7! py-3! rounded-full! hover:bg-[#D4AF37]! transition!"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="section bg-brand-background">
            <div className="custom-container">
                {/* Header */}
                <div className="mb-10!">
                    <Link to="/cart" className="inline-flex! items-center! gap-2! text-sm! text-gray-500! hover:text-black! transition!">
                        <ArrowLeft size={17} /> Back to Cart
                    </Link>

                    <div className="mt-7!">
                        <p className="text-sm! uppercase! tracking-[3px]!" style={{ color: GOLD }}>Secure Checkout</p>
                        <h1 className="text-3xl! md:text-4xl! font-semibold! mt-2!">Complete Your Order</h1>
                        <p className="text-gray-500! mt-2!">Enter your details below to place your order.</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="grid! grid-cols-1! lg:grid-cols-[1fr_400px]! gap-8! lg:gap-12! items-start!">
                        {/* LEFT */}
                        <div className="space-y-7!">
                            <div className="bg-white! rounded-2xl! p-6! md:p-8! border! border-gray-100!">
                                <div className="flex! items-center! gap-3! mb-7!">
                                    <div className="w-10! h-10! rounded-full! flex! items-center! justify-center!" style={{ backgroundColor: `${GOLD}18`, color: GOLD }}>
                                        <User size={19} />
                                    </div>

                                    <div>
                                        <h2 className="text-lg! font-semibold!">Customer Information</h2>
                                        <p className="text-sm! text-gray-500!">Your contact details</p>
                                    </div>
                                </div>

                                <div className="grid! grid-cols-1! md:grid-cols-2! gap-5!">
                                    <div>
                                        <label className="block! text-sm! font-medium! mb-2!">Full Name</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="Enter your full name"
                                            required
                                            className="w-full! h-12! px-4! border! border-gray-200! rounded-xl! outline-none! focus:border-[#D4AF37]! transition!"
                                        />
                                    </div>

                                    <div>
                                        <label className="block! text-sm! font-medium! mb-2!">Phone Number</label>
                                        <div className="relative!">
                                            <Phone size={17} className="absolute! left-4! top-1/2! -translate-y-1/2! text-gray-400!" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="03XX XXXXXXX"
                                                required
                                                className="w-full! h-12! pl-11! pr-4! border! border-gray-200! rounded-xl! outline-none! focus:border-[#D4AF37]! transition!"
                                            />
                                        </div>
                                    </div>

                                    <div className="md:col-span-2!">
                                        <label className="block! text-sm! font-medium! mb-2!">
                                            Email Address
                                            <span className="text-gray-400! font-normal!"> (Optional)</span>
                                        </label>

                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="you@example.com"
                                            className="w-full! h-12! px-4! border! border-gray-200! rounded-xl! outline-none! focus:border-[#D4AF37]! transition!"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Delivery Information */}
                            <div className="bg-white! rounded-2xl! p-6! md:p-8! border! border-gray-100!">
                                <div className="flex! items-center! gap-3! mb-7!">
                                    <div className="w-10! h-10! rounded-full! flex! items-center! justify-center!" style={{ backgroundColor: `${GOLD}18`, color: GOLD }}>
                                        <MapPin size={19} />
                                    </div>
                                    <div>
                                        <h2 className="text-lg! font-semibold!">Delivery Information</h2>
                                        <p className="text-sm! text-gray-500!">Where should we deliver your order?</p>
                                    </div>
                                </div>

                                <div className="space-y-5!">
                                    <div>
                                        <label className="block! text-sm! font-medium! mb-2!">City</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            placeholder="Enter your city"
                                            required
                                            className="w-full! h-12! px-4! border! border-gray-200! rounded-xl! outline-none! focus:border-[#D4AF37]! transition!"
                                        />
                                    </div>

                                    <div>
                                        <label className="block! text-sm! font-medium! mb-2!">Complete Address</label>
                                        <textarea
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            placeholder="House / Street / Area / Landmark"
                                            rows="4"
                                            required
                                            className="w-full! px-4! py-3! border! border-gray-200! rounded-xl! outline-none! resize-none! focus:border-[#D4AF37]! transition!"
                                        />
                                    </div>

                                    <div>
                                        <label className="block! text-sm! font-medium! mb-2!">
                                            Order Notes
                                            <span className="text-gray-400! font-normal!"> (Optional)</span>
                                        </label>

                                        <textarea
                                            name="notes"
                                            value={formData.notes}
                                            onChange={handleChange}
                                            placeholder="Any special instructions..."
                                            rows="3"
                                            className="w-full! px-4! py-3! border! border-gray-200! rounded-xl! outline-none! resize-none! focus:border-[#D4AF37]! transition!"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Payment */}
                            <div className="bg-white! rounded-2xl! p-6! md:p-8! border! border-gray-100!">
                                <label
                                    className={`flex! items-center! justify-between! gap-4! p-4! rounded-xl! border! cursor-pointer! transition! ${paymentMethod === "cod"
                                        ? "border-[#D4AF37] bg-[#D4AF37]/5"
                                        : "border-gray-200"
                                        }`}
                                >
                                    <div className="flex! items-center! gap-3!">
                                        <div className="w-5! h-5! rounded-full! border! flex! items-center! justify-center!"
                                            style={{ borderColor: paymentMethod === "cod" ? GOLD : "#d1d5db" }}
                                        >
                                            {paymentMethod === "cod" && (<div className="w-2.5! h-2.5! rounded-full!" style={{ backgroundColor: GOLD }} />)}
                                        </div>

                                        <div>
                                            <p className="font-medium!">Cash on Delivery</p>
                                            <p className="text-sm! text-gray-500!">Pay when your order arrives</p>
                                        </div>
                                    </div>

                                    <input
                                        type="radio"
                                        name="payment"
                                        value="cod"
                                        checked={paymentMethod === "cod"}
                                        onChange={() => setPaymentMethod("cod")}
                                        className="hidden!"
                                    />
                                </label>
                            </div>
                        </div>

                        {/* RIGHT — ORDER SUMMARY */}
                        <div className="lg:sticky! lg:top-6!">
                            <div className="bg-white! rounded-2xl! p-6! md:p-7! border! border-gray-100!">
                                <div className="flex! items-center! justify-between! mb-6!">
                                    <h2 className="text-xl! font-semibold!">Order Summary</h2>
                                    <span className="text-sm!" style={{ color: GOLD }}>
                                        {cartItems.length}{" "}
                                        {cartItems.length === 1 ? "Item" : "Items"}
                                    </span>
                                </div>

                                {/* Products */}
                                <div className="space-y-5! max-h-95! overflow-y-auto! pr-1!">
                                    {cartItems.map((item) => {
                                        const price = getPrice(item.price);
                                        const quantity = item.quantity || 1;

                                        return (
                                            <div key={item.id} className="flex! gap-4!">
                                                <div className="relative! w-18! h-18! shrink-0! bg-[#f8f8f8]! rounded-xl! overflow-hidden!">
                                                    <img src={item.image} alt={item.name} className="w-full! h-full! object-contain!" />

                                                    <span
                                                        className="absolute! -top-1! -right-1! min-w-5! h-5! px-1! rounded-full! text-[11px]! flex! items-center! justify-center! text-white!"
                                                        style={{ backgroundColor: GOLD }}
                                                    >
                                                        {quantity}
                                                    </span>
                                                </div>

                                                <div className="flex-1! min-w-0!">
                                                    <h3 className="text-sm! font-medium! line-clamp-2!">{item.name}</h3>
                                                    <p className="text-sm! text-gray-500! mt-1!">Rs. {(price * quantity).toLocaleString()}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                                <div className="border-t! border-gray-100! my-6!" />

                                <div className="space-y-3!">
                                    <div className="flex! justify-between! text-sm!">
                                        <span className="text-gray-500!">Subtotal</span>
                                        <span>Rs. {subtotal.toLocaleString()}</span>
                                    </div>

                                    <div className="flex! justify-between! text-sm!">
                                        <span className="text-gray-500!">Shipping</span>
                                        <span>Rs. {shipping.toLocaleString()}</span>
                                    </div>
                                </div>

                                <div className="border-t! border-gray-100! my-5!" />

                                <div className="flex! justify-between! items-center!">
                                    <span className="font-semibold!">Total</span>
                                    <span className="text-2xl! font-semibold!" style={{ color: GOLD }}>
                                        Rs. {total.toLocaleString()}
                                    </span>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full! mt-7! h-13! rounded-full! text-white! font-medium! cursor-pointer! flex! items-center! justify-center! gap-2! transition! hover:opacity-90!"
                                    style={{ backgroundColor: "#111111" }}
                                >
                                    <Check size={18} />
                                    Place Order
                                </button>

                                <p className="text-center! text-xs! text-gray-400! mt-4!">
                                    Your information is secure and protected.
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Checkout