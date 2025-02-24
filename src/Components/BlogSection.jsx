import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MainHeading from '../GlobalComponent/MainHeading'
import ArrowImg from '../assets/images/icon/right-arrow-single.svg'
import CommentImg from '../assets/images/icon/comment.svg'
import DateImg from '../assets/images/icon/date.svg'
import blogData from '../BlogApi/blogData'

const BlogSection = () => {
    
    return (
        <>
        <section class="blog-section section-spacing">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-12">
                        <MainHeading headingTag={'Internet Solutions News'} headingTagClass={'white-heading'} headingFirst={'Our'} subHeading={'Blogs'}/>
                        <div class="blog-group">
                            {
                                blogData.map((item , i) => (
                                    <div class="blog-item" key={i}>
                                        <div class="blog-img">
                                            <img src={item.image} alt={item.title} />
                                            <div class="readmore-btn"><Link to={`/blogs/${item.slug}`} class="serviceBtn">Read More <span><img src={ArrowImg} alt="arrow" /></span></Link></div>
                                        </div>
                                        <div class="blog-details-item">
                                            <h3 class="blog-title"><Link to={`/blogs/${item.slug}`}>{item.title}</Link></h3>
                                            <p>{item.description}</p>
                                            <div class="comments">
                                                <div class="comment-item"><span><img src={CommentImg} alt="Comment" /></span> {item.comments}</div>
                                                <div class="comment-item"><span><img src={DateImg} alt="Date" /></span> {item.date}</div>
                                            </div>
                                            <Link to={`/blogs/${item.slug}`} class="serviceBtn">Read More <span><img src={ArrowImg} alt="arrow" /></span></Link>
                                        </div>
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

export default BlogSection