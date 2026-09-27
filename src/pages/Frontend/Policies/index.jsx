import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivacyPolicy from "./PrivacyPolicy"
import ExchangeReturnPolicy from "./ExchangeReturnPolicy"
import ContactInformation from "./ContactInformation"
import TermsOfService from "./TermsOfService"
import ShippingPolicy from "./ShippingPolicy"

const Policies = () => {
    return (
        <Routes>
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/exchange-return-policy" element={<ExchangeReturnPolicy />} />
            <Route path="/contact-information" element={<ContactInformation />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
        </Routes>
    )
}

export default Policies