import React, { useEffect, useState } from 'react'
import Logo from '../images/logo.svg'
import Location from '../images/icon/location.svg'
import Phone from '../images/icon/phone.svg'
import { Link } from 'react-router-dom'
import SocialIcons from './SocialIcons'

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setIsActive(true)
            } else{
                setIsActive(false)
            }
        }
        window.addEventListener("scroll",  handleScroll)
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const contactLink = [
        { title: 'United States', link : '#', linkImg: Location, imgAlt : 'Location' },
        { title: '+987-654-3210', link : 'tel:9876543210', linkImg: Phone, imgAlt : 'Phone' }
    ]
    

  return (
    <>
    <section className={`header fixed-top ${isActive ? "active" : ""}`}>
        <h2 className="visually-hidden">Main Navigation</h2>
        <div className="top-header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg col-md col-sm">
                        <ul className="contact justify-content-sm-start justify-content-center">
                            {
                                contactLink.map((val, i) =>
                                    <li key={i}>
                                        <Link to={val.link}><span><img src={val.linkImg} alt={val.imgAlt} /></span> {val.title}</Link>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div className="col-lg-auto col-md-auto col-sm-auto d-sm-block d-none">
                        <SocialIcons socialIconClass={'social'} />
                    </div>
                </div>
            </div>
        </div>
        <nav className="navbar navbar-expand-lg " aria-label="Offcanvas navbar large">
            <div className="container">
                <a className="navbar-brand" to="/"><img src={Logo} alt="logo" /></a>
                <button className="navbar-toggler shadow-none border-0 rounded-0 d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
                    <span className="menu"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar2">
                    <div className="offcanvas-body align-items-center">
                        <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/">About</Link></li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Pages</Link>
                                <ul className="sub-menu">
                                    <li><Link className="menu-item" to="/">Services</Link></li>
                                    <li><Link className="menu-item" to="/">Blogs</Link></li>
                                    <li><Link className="menu-item" to="/">Singal Post</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/">Contact</Link></li>
                        </ul>
                        <Link to='/' className="themebtn outline text-white">Sign In</Link>
                    </div>
                </div>
            </div>
        </nav>
    </section>
    </>
  )
}

export default Header