import React from 'react'
import { Link, useParams } from 'react-router-dom'
import blogPosts from '../BlogApi/blogData'
import ContactForm from '../GlobalComponent/ContactForm';
import SocialIcons from '../GlobalComponent/SocialIcons';
import SearchIcon from '../assets/images/icon/search.svg';
import Support from '../assets/images/support.png';
import CallIcon from '../assets/images/icon/call.svg';
import DotsShap from '../assets/images/shaps/dot.svg';
import ImageGallery from '../GlobalComponent/ImageGallery';

const PostContent = () => {
    
    const { slug } = useParams();
    const post = blogPosts.find((post) => post.slug === slug)
    if (!post) {
        return <h2 className='text-white text-center'>Post Not Found</h2>;
    }

    const authorSocialLink = [
        { link: `https://facebook.com/${post.author.name.replace(/\s+/g, '').toLowerCase()}` },
        { link: `https://twitter.com/${post.author.name.replace(/\s+/g, '').toLowerCase()}` },
        { link: `https://linkedin.com/${post.author.name.replace(/\s+/g, '').toLowerCase()}` },
        { link: `https://instagram.com/${post.author.name.replace(/\s+/g, '').toLowerCase()}` }
    ]
    const cotnactus = {number: '+987-654-3210', link : 'tel:9876543210'}
    return (
        <>
            <section className="blog-details section-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-12">
                            <div className="navtab-content">
                                <h2 className="heading">{post.title}</h2>
                                <ul className="post-info">
                                    <li><span><img src="../assets/images/icon/date.svg" alt="post date" /></span><Link to={''}>{post.date}</Link></li>
                                    <li><span><img src="../assets/images/icon/comment.svg" alt="comments" /></span><Link to={''}>{post.comments > 0 ? post.comments : 0} Comments</Link></li>
                                    <li><span><img src="../assets/images/icon/view.svg" alt="post date" /></span><Link to={''}>{post.views} Viewer</Link></li>
                                </ul>
                                <div className="details-img">
                                    <img src={post.image} alt="blog-details" />
                                    <div className="admin">{post.author.name}</div>
                                </div>
                                <h3 className="blog-info-title">Introduction</h3>
                                <p>{post.introduction}</p>
                                {
                                    post.sections.map((section, index) => (
                                        <div div key={index}>
                                            <h3 className="blog-info-title">{section.heading}</h3>
                                            <p>{section.content}</p>
                                            {
                                                section.highlights && (
                                                <div className="best-service">
                                                    <ul className="list">
                                                        {
                                                            section.highlights.map((list, listIndex) => (
                                                            <li key={listIndex}>{list}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                                )
                                            }
                                        </div>
                                    ))
                                }
                                <div className="news-user" >
                                    {
                                        post.relatedIMg.map((images , k) => (
                                            <ImageGallery key={k} galleryBtnClass='user-imgs' galleryImgUrl={images} galleryImg={images} galleryImgAlt="users"/>
                                        ))
                                    }
                                </div>
                                 <div className="quote">
                                    {post.testimonial.quote} <br/>
                                    <span>{post.testimonial.author}</span>
                                </div>
                            </div>
                            <div className="navtab-content author-card">
                                <div className="author-box">
                                    <div className="author-img"><img src={post.author.image} alt={post.author.name} /></div>
                                    <div className="author-details">
                                        <div className="author-name">
                                            <h3 className="title">{post.author.name}</h3>
                                            <SocialIcons socialIconClass={'social-icon d-sm-flex d-none'} linkdetails={authorSocialLink}/>
                                        </div>
                                        <p>{post.author.bio}</p>
                                            <SocialIcons socialIconClass={'social-icon d-sm-none d-flex'} linkdetails={authorSocialLink}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-12 col-12">
                            <div className="blog-aside">
                                <div className="navtabs">
                                    <div className="sub-heading white-heading"><span></span>Search Here</div>
                                    <form className="form p-0">
                                        <div className="form-group add-btn">
                                            <input type="text" placeholder="Enter Keyword..." className="form-control" autoComplete="off" />
                                            <button className="btn" type="submit"><img src={SearchIcon} alt="search" /></button>
                                        </div>
                                    </form>
                                </div>
                                <div className="navtabs">
                                    <div className="sub-heading white-heading"><span></span>Service List</div>
                                    <ul className="nav flex-column nav-pills" id="pills-tab" role="tablist">
                                        <li className="nav-item"><Link to={''} className="nav-link">SpeedStream</Link></li>
                                        <li className="nav-item"><Link to={''} className="nav-link">UltraConnect</Link></li>
                                        <li className="nav-item"><Link to={''} className="nav-link">FiberFlow</Link></li>
                                        <li className="nav-item"><Link to={''} className="nav-link">NetWave</Link></li>
                                        <li className="nav-item"><Link to={''} className="nav-link">BroadNet</Link></li>
                                    </ul>
                                </div>
                                <div className="navtabs">
                                    <div className="sub-heading white-heading"><span></span>Tags Cloud</div>
                                    <ul className="tags">
                                        <li><Link to={''}>Internet</Link></li>
                                        <li><Link to={''}>Fiber</Link></li>
                                        <li><Link to={''}>Consulting</Link></li>
                                        <li><Link to={''}>Agency</Link></li>
                                        <li><Link to={''}>Digital</Link></li>
                                        <li><Link to={''}>Business</Link></li>
                                        <li><Link to={''}>Technology</Link></li>
                                        <li><Link to={''}>Experience</Link></li>
                                    </ul>
                                </div>
                                <div className="need-help">
                                    <div className="support"><img src={Support} alt="support" /></div>
                                    <div className="navtabs">
                                        <div className="discription">
                                            <div className="contact">
                                                <Link to={cotnactus.link} className="video-btn">
                                                    <img src={CallIcon} alt="contact us" />
                                                </Link>
                                            </div>
                                            <h2 className="title">Need Help?</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, sint.</p>
                                            <Link to={cotnactus.link} className="themebtn white-hover">{cotnactus.number}</Link>
                                        </div>
                                    </div>
                                </div>
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dots"><img src={DotsShap} alt="dot" /></div>
            </section>
        </>
    )
}

export default PostContent