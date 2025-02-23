import React from 'react'
import SocialIcons from '../GlobalComponent/SocialIcons'
import Logo from '../assets/images/logo.svg'
import Phone from '../assets/images/icon/call.svg'
import Mail from '../assets/images/icon/mail.svg'
import Send from '../assets/images/icon/send.svg'
import { Link } from 'react-router-dom'
import BrandsSection from './BrandsSection'

const Footer = () => {
  const footerContactDetails = [
    {subTitle: 'Call Us On', link: 'tel:9876543210',  linkTitle : '+987-654-3210', contactImg : Phone, contactImgAlt : 'Call' },
    {subTitle: 'Mail Us On', link : 'mailto:vibenet@support.com',  linkTitle : 'vibenet@support.com', contactImg : Mail, contactImgAlt : 'Mail' }
  ]
  const allFooterLinks = [
    {
      linkTitle : "All Services",
      footerLink : [
        {title: 'Fiber Optic', link: '/'},
        {title: 'Home Internet', link : '/'},
        {title: 'Cable', link : '/'},
        {title: 'Policy', link : '/'},
        {title: 'Terms & Conditions', link : '/'},
      ]
    },
    {
      linkTitle : "Navigation",
      footerLink : [
        {title: 'Home', link : '/'},
        {title: 'About Us', link : '/about'},
        {title: 'Our Package', link : '/'},
        {title: 'Contact Us', link : '/contact'},
        {title: 'Blogs', link : '/blogs'},
      ]
    }
  ]
  return (
    <>
    <BrandsSection/>
      <footer className="footer">
        <div className="top-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-12">
                        <div className="contact-block">
                            <div className="contact-info">
                                <Link to="/" className="logo"><img src={Logo} alt="logo" /></Link>
                            </div>
                            {
                              footerContactDetails.map((val, i) => 
                                <div className="contact-info" key={i}>
                                    <span className="info-icon"><img src={val.contactImg} alt={val.contactImgAlt} /></span>
                                    <div className="info">
                                        <div className="sub-title">{val.subTitle}</div>
                                        <Link to={val.link} className="contact">{val.linkTitle}</Link>
                                    </div>
                                </div>
                              )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="links-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-12 col-12">
                        <h5 className="links-title">About Us</h5>
                        <p>Vibenet provides reliable internet solutions, ensuring seamless connectivity with expert support for businesses and homes. Trust us today.</p>
                        <SocialIcons socialIconClass={"social-icon"}/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="services">
                          {
                            allFooterLinks.map((val, i) => 
                              <div className="link-item" key={i}>
                                <h5 className="links-title">{val.linkTitle}</h5>
                                <ul className="link-list">
                                  {
                                    val.footerLink.map((item, k) => 
                                      <li key={k+1}><Link to={item.link}>{item.title}</Link></li>
                                    )
                                  }
                                </ul>
                              </div>
                            )
                          }
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <h5 className="links-title">Newsletter</h5>
                        <p>Stay updated with the latest news and offers from Vibenet.</p>
                        <form>
                            <div className="input-group">
                                <input type="email" className="form-control" id="email" placeholder="Email Address" />
                                <button type="button" className="themebtn"><img src={Send} alt="send" /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p className="copyright-text">© 2025 Vibenet. All rights reserved.</p>
        </div>
    </footer>
    </>
  )
}

export default Footer