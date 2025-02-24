import React from 'react'
import { Link, useParams } from 'react-router-dom'
import blogPosts from '../BlogApi/blogData'
import SocialIcons from '../GlobalComponent/SocialIcons';

const PostContent = () => {
    
    const { slug } = useParams();
    const post = blogPosts.find((post) => post.slug === slug)
    if (!post) {
        return <h2 className='text-white text-center'>Post Not Found</h2>;
    }

    const authorSocialLink = [
        { link: `https://facebook.com/${post.author.name}` },
        { link: `https://twitter.com/${post.author.name}` },
        { link: `https://linkedin.com/${post.author.name}` },
        { link: `https://instagram.com/${post.author.name}` }
    ]
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
                                            <div className="user-imgs" key={k}><img src={images} alt="users" /></div>
                                        ))
                                    }
                                </div>
                                <h3 className="blog-info-title">The Intersection of Creativity and Technology</h3>
                                <p>Egg Canvas and Brainchesiko are emblematic of a broader trend in the digital world: the blending of art and technology. In an era where digital tools are becoming increasingly sophisticated, platforms like Egg Canvas offer creators the opportunity to push boundaries and experiment with new forms of expression. Brainchesiko, with its emphasis on imaginative thinking, encourages users to explore the limits of their creativity.</p>
                                <div className="quote">
                                    {post.testimonial.quote} <br/>
                                    <span>{post.testimonial.author}</span>
                                </div>
                                <h3 className="blog-info-title">How Egg Canvas Reflects Modern Digital Trends</h3>
                                <p>Egg Canvas isn't just a platform; it's a reflection of the current digital zeitgeist. As more people seek out ways to express themselves online, the demand for creative outlets has grown. Egg Canvas meets this demand by providing a space where users can experiment, collaborate, and share their ideas with a like-minded community. Brainchesiko, in turn, serves as a reminder that creativity doesn't have to be serious or structured—it can be playful, spontaneous, and deeply personal.</p>
                                
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
                                            <button className="btn" type="submit"><img src="../assets/images/icon/search.svg" alt="search" /></button>
                                        </div>
                                    </form>
                                </div>
                                <div className="navtabs">
                                    <div className="sub-heading white-heading"><span></span>Service List</div>
                                    <ul className="nav flex-column nav-pills" id="pills-tab" role="tablist">
                                        <li className="nav-item"><Link href="services.html" className="nav-link">SpeedStream</Link></li>
                                        <li className="nav-item"><Link href="services.html" className="nav-link">UltraConnect</Link></li>
                                        <li className="nav-item"><Link href="services.html" className="nav-link">FiberFlow</Link></li>
                                        <li className="nav-item"><Link href="services.html" className="nav-link">NetWave</Link></li>
                                        <li className="nav-item"><Link href="services.html" className="nav-link">BroadNet</Link></li>
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
                                    <div className="support"><img src="../assets/images/support.png" alt="support" /></div>
                                    <div className="navtabs">
                                        <div className="discription">
                                            <div className="contact">
                                                <Link href="tel:9876543210" className="video-btn">
                                                    <img src="../assets/images/icon/call.svg" alt="contact us" />
                                                </Link>
                                            </div>
                                            <h2 className="title">Need Help?</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, sint.</p>
                                            <Link href="tel:9876543210" className="themebtn white-hover">+987-654-3210</Link>
                                        </div>
                                    </div>
                                </div>
                                <form className="form contact-card" autoComplete="off">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-12">
                                            <div className="form-group">
                                                <input type="text" placeholder="Your Name" className="form-control" autoComplete="off" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-12">
                                            <div className="form-group">
                                                <input type="email" placeholder="Email Address" className="form-control" autoComplete="off" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-12">
                                            <div className="form-group">
                                                <textarea name="message" id="Comments" rows="5" className="form-control" placeholder="Comment..."></textarea>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-12">
                                            <button type="button" className="themebtn white-hover">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dots"><img src="../assets/images/shaps/dot.svg" alt="dot" /></div>
            </section>
        </>
    )
}

export default PostContent