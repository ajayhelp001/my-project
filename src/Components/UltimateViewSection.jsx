import React from 'react'
import MainHeading from '../GlobalComponent/MainHeading'
import ThemeButton from '../GlobalComponent/ThemeButton'
import OttImg from '../assets/images/led.png'

const UltimateViewSection = () => {
  return (
    <>
        <section className="ott-section section-spacing">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="ott-img"><img src={OttImg} alt="OTT" /></div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <MainHeading headingTag={"Ultimate Viewing Experience"} headingTagClass={'white-heading'} headingFirst={"Explore Vibenet TV Server"} subHeading={"Packages"}/>
                        <p>Get connected with Vibenet, your go-to for all technology needs to stay connected with the world.</p>
                        <ThemeButton btnLink='' hoverClass='white-hover' btnText='Get Started Now'/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default UltimateViewSection