import React from 'react'
import WatchTv from '../assets/images/watch-tv.png'
import PlayBtn from '../assets/images/icon/playbtn.svg'
import WatchVideo from '../assets/images/broadband.mp4'
import MainHeading from '../GlobalComponent/MainHeading'
import ImageGallery from '../GlobalComponent/ImageGallery'

const WhyChooseUsSection = () => {
  return (
    <>
        <section className="benifits-section section-spacing">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-12 col-12">
                        <MainHeading headingTag={'Check Our Benifits'} headingFirst={'Why Choose'} subHeading={'Broadband'} headingLast={'Services'}/>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-12">
                        <p>Choosing Vibenet means opting for reliable and high-speed internet services tailored to meet your needs. Our expert team provides exceptional customer support and cutting-edge technology, ensuring seamless connectivity for your home or business. With a variety of plans, we offer flexible and affordable options to suit different requirements. Experience uninterrupted service and top-tier performance with Vibenet, your trusted partner in staying connected.</p>
                    </div>
                    <div className="col-sm-12 col-12">
                        <div className="watch-tv">
                            <img src={WatchTv} className="watch-tv-user" alt="watch-tv" />
                            <ImageGallery galleryImgUrl={WatchVideo} galleryImg={PlayBtn} galleryImgAlt={'playbutton'} galleryBtnClass={'video-btn'}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default WhyChooseUsSection