import React from "react";
import PolicyLayout from "../../../components/PolicyLayout";

const ContactInformation = () => {
    return (
        <PolicyLayout title="Contact Information">

            <div className="grid! gap-5! sm:grid-cols-2!">

                <div className="rounded-xl! bg-brand-mist! p-5!">
                    <i className="fa-solid fa-phone text-xl! text-brand-forest!" />

                    <h3 className="mt-3! font-bold! text-brand-text!">
                        Phone
                    </h3>

                    <p className="mt-1! text-sm! text-brand-muted!">
                        +92 320 0040536
                    </p>
                </div>

                <div className="rounded-xl! bg-brand-mist! p-5!">
                    <i className="fa-solid fa-envelope text-xl! text-brand-forest!" />

                    <h3 className="mt-3! font-bold! text-brand-text!">
                        Email
                    </h3>

                    <p className="mt-1! text-sm! text-brand-muted!">
                        hello@glowrare.com
                    </p>
                </div>

                <div className="rounded-xl! bg-brand-mist! p-5! sm:col-span-2!">
                    <i className="fa-solid fa-location-dot text-xl! text-brand-forest!" />

                    <h3 className="mt-3! font-bold! text-brand-text!">
                        Address
                    </h3>

                    <p className="mt-1! text-sm! text-brand-muted!">
                        123 Beauty Street, Canal Road, Faisalabad, Pakistan
                    </p>
                </div>

            </div>

        </PolicyLayout>
    );
};

export default ContactInformation;