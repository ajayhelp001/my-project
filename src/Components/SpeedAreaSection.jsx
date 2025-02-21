import React from 'react'
import ArrowImg from '../assets/images/icon/right-arrow-single.svg'
import UserImg from '../assets/images/icon/speed.svg'
import UserImg1 from '../assets/images/icon/fiber.svg'
import UserImg2 from '../assets/images/icon/allmobile.svg'
import { Link } from 'react-router-dom'


const SpeedAreaSection = () => {
    const speedCards = [
        {
            title : 'What Speed You Need?',
            cardImg : UserImg,
            cardImgAlt: 'speed',
            discription : 'Find out the speed you need with Vibenet’s easy guide.',
            btnLink : '/'
        },
        {
            title : 'Fiber Broadband',
            cardImg : UserImg1,
            cardImgAlt: 'Fiber',
            discription : 'Compare Fiber and Broadband speeds to choose the best for you.',
            btnLink : '/'
        },
        {
            title : 'All For Mobiles Conatct',
            cardImg : UserImg2,
            cardImgAlt: 'Mobile',
            discription : 'Get in touch with us for all your mobile-related queries and services. We’re here to help!',
            btnLink : '/'
        }
    ]
  return (
    <>
        <section className="speedarea section-spacing">
            <div className="container">
                <div className="row">
                    {
                        speedCards.map((item, speed) => 
                            <div className="col-xl-4 col-lg-6 col-12" key={speed}>
                                <div className="speedcard">
                                    <div className="top-heading">
                                        <div className="network-icon"><img src={item.cardImg} alt={item.cardImgAlt} /></div>
                                        <h3 className="title"><Link to={item.btnLink}>{item.title}</Link></h3>
                                    </div>
                                    <p>{item.discription}</p>
                                    <Link to={item.btnLink} className="serviceBtn">Get Service <span><img src={ArrowImg} alt="arrow" /></span></Link>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    </>
  )
}

export default SpeedAreaSection