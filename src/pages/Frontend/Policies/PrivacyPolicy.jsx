import React from "react";
import PolicyLayout from "../../../components/PolicyLayout";

const PrivacyPolicy = () => {
    return (
        <PolicyLayout title="Privacy Policy">

            <div className="space-y-7! text-sm! leading-7! text-brand-muted!">

                <div>
                    <h2 className="text-lg! font-bold! text-brand-text!">
                        Information We Collect
                    </h2>

                    <p className="mt-2!">
                        We may collect information such as your name, phone
                        number, email address, shipping address, and order
                        details when you place an order or contact us.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg! font-bold! text-brand-text!">
                        How We Use Your Information
                    </h2>

                    <p className="mt-2!">
                        Your information may be used to process orders,
                        communicate with you, provide customer support, and
                        improve our services.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg! font-bold! text-brand-text!">
                        Data Protection
                    </h2>

                    <p className="mt-2!">
                        We take reasonable steps to protect your personal
                        information and keep it secure.
                    </p>
                </div>

            </div>

        </PolicyLayout>
    );
};

export default PrivacyPolicy;