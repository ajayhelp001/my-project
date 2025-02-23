import React from 'react'

const PackageCard = ({planName, planPrice, planDuration, planSpeed, plan = 'Buy Now', features} ) => {
    const allFeatures =[
        "Service Support 24/7",
        "No lock in contract",
        "Free Standard Connection",
        "New Customers Discount",
        "Unlimited Data"
    ]
    return (
        <>
        <div className="plan-item">
            <h3 className="plan-title">{planName}</h3>
            <div className="plan-price">₹{planPrice} <sub>/{planDuration}</sub></div>
            <div className="plan-sub-title">{planSpeed}</div>
            <a href="javascript:;" className="themebtn white-hover">{plan}</a>
            <ul>
                {
                    allFeatures.map((feature, i) => (
                        <li key={i} className={features.includes(feature) ? '' : 'disable'} >{feature}</li>
                    ))
                }
            </ul>
        </div>
        </>
    )
}

export default PackageCard