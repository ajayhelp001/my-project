import React from 'react'
import User1 from '../assets/images/about-user-1.jpg'
import User2 from '../assets/images/about-2.jpg'
import Globe from '../assets/images/icon/global.svg'
import MainHeading from '../GlobalComponent/MainHeading'
import ThemeButton from '../GlobalComponent/ThemeButton'

const WhoWeAreSection = () => {
    const features = [
        "Super-Fast Dongle",
        "High Speed Wi-Fi",
        "Prepaid SIM",
        "Prepaid SIM",
        "5G Updations"
      ];
  return (
    <>
        <section className="who-section section-spacing">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-12 col-12">
                        <div className="user-group">
                            <div className="user-image"><img src={User1} alt="user" /></div>
                            <div className="user-image2"><img src={User2} alt="user" /></div>
                            <div className="best-internet">
                                <img src={Globe} alt="global" />
                                <h5 className="internet-title">Expereince <br/> Best Internet</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-12">
                        <div className="content-side">
                            <MainHeading headingTag={"who we are"} headingFirst={"We are best For secure Business"} subHeading={"Internet"} headingLast={"Service"}/>
                            <p>Vibenet is your premier provider for secure business internet services. We prioritize reliability and efficiency, offering customized connectivity solutions tailored to your unique business needs. Our experienced team of network engineers uses the latest technology to ensure your operations run seamlessly.</p>
                            <p>With our robust support and top-notch service, you can trust us to keep your business connected and secure. Choose Vibenet for unparalleled internet and network solutions in Dhaka and beyond, and experience the difference expertise and dedication can make.</p>
                            <ul className="list">
                                {
                                    features.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))
                                }
                            </ul>
                            <ThemeButton btnLink=''/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default WhoWeAreSection