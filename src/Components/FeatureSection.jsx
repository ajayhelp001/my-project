import React from 'react'
import MainHeading from '../GlobalComponent/MainHeading'
import Fearure1 from '../assets/images/icon/adventurer.svg'
import Fearure2 from '../assets/images/icon/comedy.svg'
import Fearure3 from '../assets/images/icon/drama.svg'
import Fearure4 from '../assets/images/icon/crime.svg'
import Fearure5 from '../assets/images/icon/cartoons.svg'
import Fearure6 from '../assets/images/icon/detective.svg'
import { Link } from 'react-router-dom'

const FeatureSection = () => {
    const featurs = [
        { FeaturTitle: 'Adventurer', featureImg: Fearure1 },
        { FeaturTitle: 'Comedy', featureImg: Fearure2 },
        { FeaturTitle: 'Drama', featureImg: Fearure3 },
        { FeaturTitle: 'Crime', featureImg: Fearure4 },
        { FeaturTitle: 'Cartoons', featureImg: Fearure5 },
        { FeaturTitle: 'Detective', featureImg: Fearure6 },
    ]
    return (
        <>
        <section className="feature-section section-spacing">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-12 col-12">
                        <MainHeading headingTag={'Explore Our Features'} headingFirst={'Unmatched'} subHeading={'Features'} headingLast={'for Your Needs Top'}/>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-12">
                        <p>At MyBroadband, we provide comprehensive insights and reviews on the latest broadband technologies and services. Our expert team ensures you stay informed about the best internet solutions available. Discover tailored plans and unparalleled customer support designed to meet your connectivity needs.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-12">
                        <div className="feature-card">
                            {
                                featurs.map((featur , index) => (
                                    <div key={index} className="feature-item">
                                        <div className="feature-icon"><img src={featur.featureImg} alt={featur.FeaturTitle} /></div>
                                        <div className="title">{featur.FeaturTitle}</div>
                                        <Link to="#package" className="offer"><span className="plan-name">Choose Plan</span></Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default FeatureSection