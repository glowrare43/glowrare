import React from "react";
import PolicyLayout from "../../../components/PolicyLayout";

const ExchangeReturnPolicy = () => {
    return (
        <PolicyLayout title="Exchange & Return Policy">

            <div className="space-y-7! text-sm! leading-7! text-brand-muted!">

                <div>
                    <h2 className="text-lg! font-bold! text-brand-text!">
                        Return Eligibility
                    </h2>

                    <p className="mt-2!">
                        Products may be eligible for return or exchange
                        according to our store policy. Items should be
                        returned in their original condition and packaging.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg! font-bold! text-brand-text!">
                        Exchange
                    </h2>

                    <p className="mt-2!">
                        If you receive an incorrect or damaged product, please
                        contact our support team as soon as possible.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg! font-bold! text-brand-text!">
                        Contact Us
                    </h2>

                    <p className="mt-2!">
                        Please contact us with your order number and relevant
                        details so our team can assist you.
                    </p>
                </div>

            </div>

        </PolicyLayout>
    );
};

export default ExchangeReturnPolicy;