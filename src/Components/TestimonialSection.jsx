import React from 'react'
import MainHeading from '../GlobalComponent/MainHeading'
import Facebook from '../assets/images/icon/facebook.svg'
import Twiter from '../assets/images/icon/twiter.svg'
import Linkdine from '../assets/images/icon/linkdine.svg'
import Instagram from '../assets/images/icon/instagram.svg'
import Rating from '../assets/images/icon/star.svg'
import GrayStar from '../assets/images/icon/star-gray.svg'
import { Link } from 'react-router-dom'
import SocialIcons from '../GlobalComponent/SocialIcons'

const TestimonialSection = () => {
    const authors = [
        {
            clientImg: './assets/images/author-1.jpg',
            clientName: 'Smith Morgan',
            clientPosition: 'Market Manager',
            clientDiscription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consectetur natus neque magnam fugit voluptatibus, impedit sint ipsa culpa maiores.',
            clientRating: 4

        },
        {
            clientImg: './assets/images/author-2.jpg',
            clientName: 'David Patel',
            clientPosition: 'Project Manager',
            clientDiscription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consectetur natus neque magnam fugit voluptatibus, impedit sint ipsa culpa maiores.',
            clientRating: 3
        },
        {
            clientImg: './assets/images/author-3.jpg',
            clientName: 'Emily Carter',
            clientPosition: 'Opertions Manager',
            clientDiscription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consectetur natus neque magnam fugit voluptatibus, impedit sint ipsa culpa maiores.',
            clientRating: 4
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
                                    <div className="col-xl-4 col-lg-6 col-sm-12 col-12" key={k}>
                                        <div className="clientcard">
                                            <div className="client-image"><img src={item.clientImg} alt={item.clientName} /></div>
                                            <h3 className="client-name">{item.clientName}</h3>
                                            <span className="client-position">{item.clientPosition}</span>
                                            <div className="discription">
                                                <p>{item.clientDiscription}</p>
                                                <ul className="rating">
                                                    {[...Array(5)].map((_, i) => (
                                                        <li key={i}>
                                                            <img src={i < item.clientRating ? `${Rating}` : `${GrayStar}`} alt="rating" />
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <SocialIcons />
                                            {/* <ul className="social-icon">
                                                <li><Link to={item.facebookLink}><img src={Facebook} alt="Facebook" /></Link></li>
                                                <li><Link to={item.twitterLink}><img src={Twiter} alt="Twiter" /></Link></li>
                                                <li><Link to={item.linkedinLink}><img src={Linkdine} alt="Linkdine" /></Link></li>
                                                <li><Link to={item.instagramLink}><img src={Instagram} alt="Instagram" /></Link></li>
                                            </ul> */}
                                        </div>
                                    </div>
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

export default TestimonialSection