import React from 'react'
import ContactForm from '../GlobalComponent/ContactForm'
import MainHeading from '../GlobalComponent/MainHeading'
import Call from '../assets/images/icon/call.svg'
import Mail from '../assets/images/icon/mail.svg'
import Location from '../assets/images/icon/location.svg'
import { Link } from 'react-router-dom'

const ContactUsSection = () => {
    const contactInfo = [
        {contactTitle : 'Call Us On' , contactTo : '+91 9876543210' , contactIcon : Call , contactLink : 'tel:9876543210'},
        {contactTitle : 'Call Us On' , contactTo : '+91 9123456789' , contactIcon : Call , contactLink : 'tel:9123456789'},
        {contactTitle : 'Mail Us On' , contactTo : 'broadband@support.com' , contactIcon : Mail , contactLink : 'mailto:broadband@support.com'},
        {contactTitle : 'Location' , contactTo : 'Jaipur India 302021' , contactIcon : Location , contactLink : 'https://maps.app.goo.gl/g7TVnyHjGzGA8ybMA'}
    ]
    return (
        <>
        <section className="contactus-section section-spacing">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-12">
                        <MainHeading headingTag={'Get In Touch'} headingTagClass={'white-heading'} headingFirst={'Broadband'} subHeading={'Contact'} headingLast={'Us'}/>
                        <p>Our team is here to assist you. Fill out the form below, and we'll get back to you promptly. For immediate help, contact us by phone or email.</p>
                        <div className="contact-group">
                            {
                                contactInfo.map((item, i) => (
                                    <div key={i} className="contact-item">
                                        <div className="icon"><img src={item.contactIcon} alt={item.contactTitle} /></div>
                                        <div className="info">
                                            <div className="sub-title">{item.contactTitle}</div>
                                            <Link to={item.contactLink} className="contact">{item.contactTo}</Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-xl-6 col-12">
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default ContactUsSection