import React from 'react'
import MainHeading from '../GlobalComponent/MainHeading'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from 'react-router-dom';

const BrandsSection = () => {
    const brands = [
        {brandName : 'Treval', brandLogo : '../assets/images/1.png'},
        {brandName : 'Treval', brandLogo : '../assets/images/2.png'},
        {brandName : 'Treval', brandLogo : '../assets/images/3.png'},
        {brandName : 'Treval', brandLogo : '../assets/images/4.png'},
        {brandName : 'Treval', brandLogo : '../assets/images/5.png'},
        {brandName : 'Treval', brandLogo : '../assets/images/1.png'},
        {brandName : 'Treval', brandLogo : '../assets/images/2.png'},
        {brandName : 'Treval', brandLogo : '../assets/images/3.png'},
        {brandName : 'Treval', brandLogo : '../assets/images/4.png'},
        {brandName : 'Treval', brandLogo : '../assets/images/5.png'}
    ]
  return (
    <>
    <section className="brands-section section-spacing">
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-lg-5 col-sm-12 col-12 text-lg-start text-center">
                    <MainHeading headingTag={'Partners in Excellence'} headingFirst={'Trusted'} subHeading={'Brands'}/>
                </div>
                <div className="col-xl-8 col-lg-7 col-sm-12 col-12">
                    <Swiper className='brand-slider'
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={10}
                        slidesPerView={2}
                        autoplay={{ delay: 0 }}
                        loop = {true}
                        speed={10000}
                        lazy={true}
                        breakpoints={{
                            0:{
                                slidesPerView:2
                            },
                            500:{
                                slidesPerView:3
                            },
                            768:{
                                slidesPerView:4
                            },
                            992:{
                                slidesPerView:3
                            },
                            1200:{
                                slidesPerView:4
                            },
                            1400:{
                                slidesPerView:5
                            },
                          }}
                        >
                            {
                                brands.map((brand, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="item"><Link to={''}><img src={brand.brandLogo} alt={brand.brandName} /></Link></div>
                                    </SwiperSlide>
                                ))
                            }
                    </Swiper>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default BrandsSection