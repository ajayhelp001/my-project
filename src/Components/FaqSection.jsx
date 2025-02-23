import React from 'react'
import MainHeading from '../GlobalComponent/MainHeading'

const FaqSection = () => {
    const faq = [
        {
            faqHeading : 'What is broadband internet?',
            faqDisctiption : 'Broadband internet is a high-speed internet service that provides a continuous connection, allowing users to access the internet without disrupting phone lines. It encompasses various types, including DSL, cable, fiber-optic, and satellite, each offering different speed ranges and capabilities. Broadband is ideal for streaming, online gaming, and other data-intensive activities due to its higher bandwidth compared to dial-up connections.'
        },
        {
            faqHeading : 'How do I choose the right broadband plan?',
            faqDisctiption : 'Choosing the right broadband plan involves assessing your internet usage, such as streaming, gaming, or remote work needs. Consider the download and upload speeds offered, data caps, and monthly costs. It is also essential to evaluate the service providers reputation for reliability and customer support. Comparing multiple plans can help you find the best value for your requirements.'
        },
        {
            faqHeading : 'What factors affect broadband speed?',
            faqDisctiption : 'Several factors can impact broadband speed, including the type of connection (DSL, cable, fiber), network congestion during peak times, and your distance from the service providers infrastructure. Additionally, the quality and age of your modem and router, as well as the number of devices connected simultaneously, can affect performance. Environmental factors like physical obstructions and electromagnetic interference may also play a role.'
        }
    ]
  return (
    <>
    <section className="faq-section section-spacing">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-12">
                    <div className="faq-card">
                        <MainHeading headingTag={'Check Our Benifits'} headingTagClass={'white-heading'} headingFirst={'Broadband'} subHeading={'Internet'} headingLast={'FAQs'}/>
                        <div className="accordion" id="accordionExample">
                            {
                                faq.map((item , i) => (
                                    <div className="accordion-item" key={i}>
                                        <h2 className="accordion-header">
                                            <button className={i === 0 ? 'accordion-button' : 'accordion-button collapsed'} type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${i+1}`} aria-expanded="true" aria-controls={`collapseOne${i+1}`}>
                                                {item.faqHeading}
                                            </button>
                                        </h2>
                                        <div id={`collapseOne${i+1}`} className={i === 0 ? 'accordion-collapse collapse show' : 'accordion-collapse collapse'} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>{item.faqDisctiption}</p>
                                            </div>
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

export default FaqSection