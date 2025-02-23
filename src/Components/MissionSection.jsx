import React from 'react'
import MainHeading from '../GlobalComponent/MainHeading'
import Mission from '../assets/images/icon/mission.svg'
import Vission from '../assets/images/icon/vission.svg'
import Values from '../assets/images/icon/value.svg'
import Company from '../assets/images/icon/company.svg'
import { Link } from 'react-router-dom'

const MissionSection = () => {
    const allMission = [
        {missionTitle : 'Our Mission', missionIcon : Mission , misstionLink : '' , missionDiscription : 'Our mission at MyBroadband is to provide fast, reliable internet solutions for everyone, everywhere.'},
        {missionTitle : 'Our Vission', missionIcon : Vission , misstionLink : '' , missionDiscription : 'Our vision is to make high-speed internet accessible, affordable, and reliable for everyone globally.'},
        {missionTitle : 'Our Values', missionIcon : Values , misstionLink : '' , missionDiscription : 'Our values are innovation, reliability, customer focus, and inclusivity in internet solutions.'},
        {missionTitle : 'Our Company', missionIcon : Company , misstionLink : '' , missionDiscription : 'Our company provides cutting-edge broadband solutions with a focus on excellence.'},
    ]
    return (
        <>
        <section className="mission-section section-spacing">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-12">
                        <div className="heading-group text-center">
                            <MainHeading headingTag={'Check Our Benifits'} headingFirst={'Broadband Our'} subHeading={'Commitment'}/>
                        </div>
                        <div className="mission-card">
                            {
                                allMission.map((item, i) => (
                                    <div key={i} className="mission-item">
                                        <div className="top-text">
                                            <div className="icon"><img src={item.missionIcon} alt={item.missionTitle} /></div>
                                            <h3 className="title-name">{item.missionTitle}</h3>
                                        </div>
                                        <p>{item.missionDiscription}</p>
                                        <Link to={item.misstionLink} className="themebtn white-hover">Read More</Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default MissionSection