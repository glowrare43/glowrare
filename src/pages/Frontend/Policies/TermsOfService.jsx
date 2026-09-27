import React from "react";
import PolicyLayout from "../../../components/PolicyLayout";

const TermsOfService = () => {
    return (
        <PolicyLayout title="Terms of Service">

            <div className="space-y-7! text-sm! leading-7! text-brand-muted!">

                <div>
                    <h2 className="text-lg! font-bold! text-brand-text!">
                        Use of Website
                    </h2>

                    <p className="mt-2!">
                        By using this website, you agree to follow these
                        terms and conditions and use the website only for
                        lawful purposes.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg! font-bold! text-brand-text!">
                        Products & Pricing
                    </h2>

                    <p className="mt-2!">
                        Product availability, descriptions, and prices may
                        change without prior notice.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg! font-bold! text-brand-text!">
                        Orders
                    </h2>

                    <p className="mt-2!">
                        We reserve the right to review or cancel an order
                        when necessary, including situations involving
                        incorrect pricing or product availability.
                    </p>
                </div>

            </div>

        </PolicyLayout>
    );
};

export default TermsOfService;