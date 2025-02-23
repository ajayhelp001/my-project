import React from 'react'
import MainHeading from '../GlobalComponent/MainHeading'
import PackageCard from '../GlobalComponent/PackageCard'

const PackageSection = () => {
    const allPackage = [
        {
            planName: "REGULAR PLAN",
            planPrice: "699" ,
            planDuration: "month", 
            planSpeed: "Standard Speed",
            features: ["Service Support 24/7", "No lock in contract"],
        },
        {
            planName: "ADVANCE PLAN", 
            planPrice: 1199 ,
            planDuration: "month" ,
            planSpeed: "XXL Speed Boost",
            features: ["Service Support 24/7", "No lock in contract", "Free Standard Connection", "New Customers Discount"],
        },
        {
            planName: 'PRO PLAN',
            planPrice: 1799,
            planDuration: 'month',
            planSpeed: 'XXXL Speed Boost',
            features:["Service Support 24/7", "No lock in contract", "Free Standard Connection", "New Customers Discount", "Unlimited Data"]
        }
    ]

  return (
    <>
    <section className="package-section section-spacing">
        <div className="container-fluid section-spacing">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 col-12">
                        <MainHeading headingTag={'Plans for Everyone'} headingTagClass={'white-heading'} headingFirst={'Select Your Ideal'} subHeading={'Internet'} headingLast={'Package'}/>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-12">
                        <p>Explore a variety of internet packages designed to meet your unique needs. Whether you’re a casual browser, a dedicated gamer, or running a business, we have plans that offer the speed and reliability you require. Our packages range from basic to premium, with options for unlimited data and high-speed connections. Choose the perfect plan that fits your budget and enjoy seamless internet access. Experience superior service and support with every package.</p>
                    </div>
                    <div className="col-sm-12 col-12">
                        <div className="package-card">
                            {
                                allPackage.map((item , i) => (
                                    <PackageCard key={i} 
                                        planName={item.planName} 
                                        planPrice={item.planPrice} 
                                        planDuration={item.planDuration}
                                        planSpeed={item.planSpeed}
                                        features={item.features}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default PackageSection