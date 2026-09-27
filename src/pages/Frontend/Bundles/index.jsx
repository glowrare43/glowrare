import React from "react";
import BundleBanner from "./BundleBanner";
import TopSellerBundle from "./TopSellerBundle";
import CompleteSetBundle from "./CompleteSetBundle";

const Bundle = () => {
    return (
        <main>
            <BundleBanner />
            <TopSellerBundle />
            <CompleteSetBundle />
        </main>
    )
}

export default Bundle