import React from "react";
import PolicyLayout from "../../../components/PolicyLayout";

const ShippingPolicy = () => {
    return (
        <PolicyLayout title="Shipping Policy">

            <div className="space-y-7! text-sm! leading-7! text-brand-muted!">

                <div>
                    <h2 className="text-lg! font-bold! text-brand-text!">
                        Order Processing
                    </h2>

                    <p className="mt-2!">
                        Orders are carefully prepared and packed before
                        dispatch. Processing time may vary depending on
                        order volume and product availability.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg! font-bold! text-brand-text!">
                        Delivery
                    </h2>

                    <p className="mt-2!">
                        Delivery time may vary depending on your location
                        and courier service.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg! font-bold! text-brand-text!">
                        Delivery Address
                    </h2>

                    <p className="mt-2!">
                        Please provide a complete and accurate delivery
                        address when placing your order.
                    </p>
                </div>

            </div>

        </PolicyLayout>
    );
};

export default ShippingPolicy;