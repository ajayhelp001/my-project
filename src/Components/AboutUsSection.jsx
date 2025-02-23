import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthorGroup from '../assets/images/project-planing.png'
import AuthorImg from '../assets/images/author.jpg'
import LineShap from '../assets/images/icon/line-shap.svg'
import ArrowImg from '../assets/images/icon/right-arrow-single.svg'
import StarShap from '../assets/images/shaps/star-shap.svg'
import Shap1 from '../assets/images/shaps/shap-1.svg'
import DotShap from '../assets/images/shaps/dot.svg'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const AboutUsSection = () => {
  const [startCount, setStartCount] = useState(false);
  const { ref } = useInView({
    threshold: 0.3, 
    onChange: (inView) => {
      setStartCount(inView);
    },
  });

    return (
        <>
        <section className="author-about-section section-spacing">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-12">
                        <div className="author-group">
                            <div className="group-item">
                                <div className="top-item">
                                    <div className="author-cover-img"><img src={AuthorGroup} alt="author" /></div>
                                </div>
                                <div className="bottom-count">
                                    <div className="text">
                                        <div className="counts" ref={ref}>
                                            <div className="counters">
                                                {startCount ? <CountUp start={0} end="100" duration={2} /> : 0}
                                            </div>%
                                            </div>
                                        <h3 className="title">Clients Satisfaction</h3>
                                    </div>
                                    <div className="line-shap"><img src={LineShap} alt="line-shap" /></div>
                                </div>
                            </div>
                            <div className="group-item">
                                <div className="top-item">
                                    <h2 className="heading">Empowering Connectivity Through Individual Innovation</h2>
                                    <p>At MyBroadband, we harness the innovation of individuals to deliver cutting-edge broadband solutions. Our focus is on empowering every user with reliable and fast internet connectivity.</p>
                                    <Link to={''} className="serviceBtn">More About Us <span><img src={ArrowImg} alt="arrow" /></span></Link>
                                </div>
                                <div className="bottom-count">
                                    <div className="text">
                                        <div className="counts" ref={ref}>
                                            <div className="counters">
                                                {startCount ? <CountUp start={0} end="1199" duration={2} /> : 0}
                                            </div>+
                                        </div>
                                        <h3 className="title">Projects Completed</h3>
                                    </div>
                                    <div className="line-shap"><img src={LineShap} alt="line-shap" /></div>
                                </div>
                            </div>
                            <div className="group-item">
                                <div className="author-img"><img src={AuthorImg} alt="author" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="star-shap"><img src={StarShap} alt="star" /></div>
            <div className="trangal-shap"><img src={Shap1} alt="shap" /></div>
            <div className="dots"><img src={DotShap} alt="dot" /></div>
        </section>
        </>
    )
}

export default AboutUsSection