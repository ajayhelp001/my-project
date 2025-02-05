import React from 'react'
import Clints from '../assets/images/icon/clients.svg'
import Employee from '../assets/images/icon/clients.svg'
import Rating from '../assets/images/icon/clients.svg'
import Delivery from '../assets/images/icon/clients.svg'

const CounterSection = () => {
    const counterCard =  [
        {
            title : 'Coporate Clients',
            countImg : Clints,
            countImgAlt : 'Clints'
        },
        {
            title : 'Expert Employee',
            countImg : Employee,
            countImgAlt : 'Employee'
        },
        {
            title : 'Uptime Rate',
            countImg : Rating,
            countImgAlt : 'Rating'
        },
        {
            title : 'All Delivery',
            countImg : Delivery,
            countImgAlt : 'Delivery'
        }
    ]
  return (
    <>
        <section className="counter-section section-spacing">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-12">
                        <div className="counter-card sectionspacing">
                            {
                                counterCard.map((item, counters) => 
                                    <div className="counter-item" key={counters}>
                                        <div className="counter-item-icon"><img src={item.countImg} alt={item.countImgAlt} /></div>
                                        <div className="text">
                                            <div className="counts"><div className="counters" data-number="499">499</div>+</div>
                                            <h6 className="title">{item.title}</h6>
                                        </div>
                                    </div>
                                )
                            }
                            {/* <div className="counter-item">
                                <div className="counter-item-icon"><img src="assets/images/icon/clients.svg" alt="clients" /></div>
                                <div className="text">
                                    <div className="counts"><div className="counters" data-number="499"></div>+</div>
                                    <h6 className="title">Coporate Clients</h6>
                                </div>
                            </div>
                            <div className="counter-item">
                                <div className="counter-item-icon"><img src="assets/images/icon/employee.svg" alt="employee" /></div>
                                <div className="text">
                                    <div className="counts"><div className="counters" data-number="159"></div>+</div>
                                    <h6 className="title">Expert Employee</h6>
                                </div>
                            </div>
                            <div className="counter-item">
                                <div className="counter-item-icon"><img src="assets/images/icon/rating.svg" alt="rating" /></div>
                                <div className="text">
                                    <div className="counts"><div className="counters" data-number="98"></div>%+</div>
                                    <h6 className="title">Uptime Rate</h6>
                                </div>
                            </div>
                            <div className="counter-item">
                                <div className="counter-item-icon"><img src="assets/images/icon/delivery.svg" alt="delivery" /></div>
                                <div className="text">
                                    <div className="counts"><div className="counters" data-number="450"></div>+</div>
                                    <h6 className="title">All Delivery</h6>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default CounterSection