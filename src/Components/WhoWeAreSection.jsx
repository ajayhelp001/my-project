import React from 'react'
import { Link } from 'react-router-dom'
import User1 from '../images/about-user-1.jpg'
import User2 from '../images/about-2.jpg'
import Globe from '../images/icon/global.svg'

const WhoWeAreSection = () => {
  return (
    <>
        <section class="who-section section-spacing">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-12 col-12">
                        <div class="user-group">
                            <div class="user-image"><img src={User1} alt="user" /></div>
                            <div class="user-image2"><img src={User2} alt="user" /></div>
                            <div class="best-internet">
                                <img src={Globe} alt="global" />
                                <h5 class="internet-title">Expereince <br/> Best Internet</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-12 col-12">
                        <div class="content-side">
                            <div class="sub-heading"><span></span>who we are</div>
                            <h2 class="heading">We are best For secure Business <span>Internet</span> Service</h2>
                            <p>Vibenet is your premier provider for secure business internet services. We prioritize reliability and efficiency, offering customized connectivity solutions tailored to your unique business needs. Our experienced team of network engineers uses the latest technology to ensure your operations run seamlessly.</p>
                            <p>With our robust support and top-notch service, you can trust us to keep your business connected and secure. Choose Vibenet for unparalleled internet and network solutions in Dhaka and beyond, and experience the difference expertise and dedication can make.</p>
                            <ul class="list">
                                <li>Super-Fast Dongle</li>
                                <li>High Speed Wi-Fi</li>
                                <li>Prepaid SIM</li>
                                <li>5G Updations</li>
                            </ul>
                            <Link to="/" class="themebtn">DISCOVER MORE</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default WhoWeAreSection