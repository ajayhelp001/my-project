import React from 'react'
import { Link } from 'react-router-dom'
import UserImg from '../assets/images/broadband-user.jpg'

const HeroSection = () => {
    const userDetails = [
        {
            subtitle : 'FAST INTERNET CONNECTION',
            clintImg : UserImg,
            clintImgAlt : 'broadband-user',
            heading :{
                heading1 : 'Fast and Reliable',
                heading2 : 'Broadband',
                heading3 : 'Solutions'
            },
            discription : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam optio similique autem assumenda nam dolor a omnis totam repellat nesciunt?',
            linkTitle : 'Discover more',
            btnLink : '/'
        }
    ]
  return (
    <>
        <section className="hero-section">
            <div className="container-fluid h-100 px-0">
                <div className="row gx-0 mx-0 h-100">
                    <div className="col-12 slider h-100 owl-carousel hero-slider">
                        {
                            userDetails.map((item, k) => 
                                <div className="item h-100" key={k}>
                                    <div className="user-image"><img src={item.clintImg} alt={item.clintImgAlt} /></div>
                                    <div className="container h-100">
                                        <div className="row h-100 align-items-center">
                                            <div className="col-xxl-7">
                                                <div className="sub-titile">{item.subtitle}</div>
                                                <h1 className="heading">{item.heading.heading1} <span>{item.heading.heading2}</span> {item.heading.heading3}</h1>
                                                <p className="content">{item.discription}</p>
                                                <Link to={item.link} className="themebtn white-hover">{item.linkTitle}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default HeroSection