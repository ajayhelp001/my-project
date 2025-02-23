import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Clints from '../assets/images/icon/clients.svg';
import Employee from '../assets/images/icon/clients.svg';
import Rating from '../assets/images/icon/clients.svg';
import Delivery from '../assets/images/icon/clients.svg';

const CounterSection = () => {
  const counterCard = [
    { title: "Corporate Clients", countImg: Clints, countImgAlt: "Clients", counts: 499 },
    { title: "Expert Employee", countImg: Employee, countImgAlt: "Employee", counts: 159 },
    { title: "Uptime Rate", countImg: Rating, countImgAlt: "Rating", counts: 98 },
    { title: "All Delivery", countImg: Delivery, countImgAlt: "Delivery", counts: 450 },
  ];

  const [startCount, setStartCount] = useState(false);

  const { ref } = useInView({
    threshold: 0.3, 
    onChange: (inView) => {
      setStartCount(inView);
    },
  });

  return (
    <section className="counter-section section-spacing">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-12">
            <div className="counter-card" ref={ref}>
              {counterCard.map((item, index) => (
                <div className="counter-item" key={index}>
                  <div className="counter-item-icon">
                    <img src={item.countImg} alt={item.countImgAlt} />
                  </div>
                  <div className="text">
                    <div className="counts">
                      <div className="counters">
                        {startCount ? <CountUp start={0} end={item.counts} duration={2} /> : 0}
                      </div>
                      +
                    </div>
                    <h6 className="title">{item.title}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
