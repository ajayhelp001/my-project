import React from 'react'
import MainHeading from '../GlobalComponent/MainHeading'
import Facebook from '../assets/images/icon/facebook.svg'
import Twiter from '../assets/images/icon/twiter.svg'
import Linkdine from '../assets/images/icon/linkdine.svg'
import Instagram from '../assets/images/icon/instagram.svg'
import { Link } from 'react-router-dom'

const TestimonialSection = () => {
    const authors = [
        {
            clientImg: './assets/images/author-1.jpg',
            clientName: 'Smith Morgan',
            clientPosition: 'Market Manager',
            clientDiscription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consectetur natus neque magnam fugit voluptatibus, impedit sint ipsa culpa maiores.',
            clientRating: 4,
        }
    ]

    const authorSocialLink =[
        {
            id: 1,
            link: ['https://facebook.com','https://twitter.com', 'https://linkedin.com', 'https://instagram.com'],
            linkAlt: ['Facebook','Twitter', 'Linkedin', 'Instagram'],
        },
        {
            id: 2,
            link: ['https://facebook.com','https://twitter.com', 'https://linkedin.com', 'https://instagram.com'],
            linkAlt: ['Facebook','Twitter', 'Linkedin', 'Instagram'],
        },
        {
            id: 3,
            link: ['https://facebook.com','https://twitter.com', 'https://linkedin.com', 'https://instagram.com'],
            linkAlt: ['Facebook','Twitter', 'Linkedin', 'Instagram'],
        }
    ]
  return (
    <>
        <section className="testimonial-section section-spacing">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-sm-12 col-12 mx-auto text-center">
                        <MainHeading headingTag={'Experiences That Inspire'} headingFirst={'Testimonials from'} subHeading={'Our Clients'}/>
                        <p>At Vibenet, we pride ourselves on delivering exceptional service and innovative TV server packages. Our clients' feedback reflects our commitment to quality and customer satisfaction. Here, you'll find authentic testimonials from those who have experienced the benefits of our services. Discover how we've enhanced their viewing experience with seamless streaming and diverse entertainment options. We are honored to share their stories and grateful for their trust in us.</p>
                    </div>
                    <div className="col-lg-12 col-sm-12 col-12">
                        <div className="testimonial-card" id="dotsscode">
                            <div className="row">
                                {
                                  authors.map((item, k) => (
                                    <div className="col-xl-4 col-lg-6 col-sm-12 col-12">
                                        <div className="clientcard">
                                            <div className="client-image"><img src={item.clientImg} alt={item.clientName} /></div>
                                            <h3 className="client-name">{item.clientName}</h3>
                                            <span className="client-position">{item.clientPosition}</span>
                                            <div className="discription">
                                                <p>{item.clientDiscription}</p>
                                                <ul className="rating">
                                                    <li><img src="assets/images/icon/star.svg" alt="rating" /></li>
                                                    <li><img src="assets/images/icon/star.svg" alt="rating" /></li>
                                                    <li><img src="assets/images/icon/star.svg" alt="rating" /></li>
                                                    <li><img src="assets/images/icon/star.svg" alt="rating" /></li>
                                                    <li><img src="assets/images/icon/star.svg" alt="rating" /></li>
                                                </ul>
                                            </div>
                                            {/* <ul className={socialIconClass}>
                                                {
                                                    authorSocialLink.map((social, i) => (
                                                        <li key={i}>
                                                            <Link to={social.link}><img src={val.linkImg} alt={val.link} /></Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul> */}
                                        </div>
                                    </div>
                                  ))  
                                }
                                {/* <div className="col-xl-4 col-lg-6 col-sm-12 col-12">
                                    <div className="clientcard">
                                        <div className="client-image"><img src="assets/images/author-2.jpg" alt="author" /></div>
                                        <h3 className="client-name">David Patel</h3>
                                        <span className="client-position">Project Manager</span>
                                        <div className="discription">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consectetur natus neque magnam fugit voluptatibus, impedit sint ipsa culpa maiores.</p>
                                            <ul className="rating">
                                                <li><img src="assets/images/icon/star.svg" alt="rating" /></li>
                                                <li><img src="assets/images/icon/star.svg" alt="rating" /></li>
                                                <li><img src="assets/images/icon/star.svg" alt="rating" /></li>
                                                <li><img src="assets/images/icon/star.svg" alt="rating" /></li>
                                                <li><img src="assets/images/icon/star.svg" alt="rating" /></li>
                                            </ul>
                                        </div>
                                        <ul className="social-icon">
                                            <li><a href="javascript:;"><img src="assets/images/icon/facebook.svg" alt="Facebook" /></a></li>
                                            <li><a href="javascript:;"><img src="assets/images/icon/twiter.svg" alt="Twiter" /></a></li>
                                            <li><a href="javascript:;"><img src="assets/images/icon/linkdine.svg" alt="Linkdine" /></a></li>
                                            <li><a href="javascript:;"><img src="assets/images/icon/instagram.svg" alt="Instagram" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-12 col-sm-12 col-12">
                                    <div className="clientcard">
                                        <div className="client-image"><img src="assets/images/author-3.jpg" alt="author" /></div>
                                        <h3 className="client-name">Emily Carter</h3>
                                        <span className="client-position">Opertions Manager</span>
                                        <div className="discription">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consectetur natus neque magnam fugit voluptatibus, impedit sint ipsa culpa maiores.</p>
                                            <ul className="rating">
                                                <li><img src="assets/images/icon/star.svg" alt="rating" /></li>
                                                <li><img src="assets/images/icon/star.svg" alt="rating" /></li>
                                                <li><img src="assets/images/icon/star.svg" alt="rating" /></li>
                                                <li><img src="assets/images/icon/star.svg" alt="rating" /></li>
                                                <li><img src="assets/images/icon/star.svg" alt="rating" /></li>
                                            </ul>
                                        </div>
                                        <ul className="social-icon">
                                            <li><a href="javascript:;"><img src="assets/images/icon/facebook.svg" alt="Facebook" /></a></li>
                                            <li><a href="javascript:;"><img src="assets/images/icon/twiter.svg" alt="Twiter" /></a></li>
                                            <li><a href="javascript:;"><img src="assets/images/icon/linkdine.svg" alt="Linkdine" /></a></li>
                                            <li><a href="javascript:;"><img src="assets/images/icon/instagram.svg" alt="Instagram" /></a></li>
                                        </ul>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default TestimonialSection