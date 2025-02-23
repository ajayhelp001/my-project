import React from 'react'
import { Link, useParams } from 'react-router-dom'
import blogPosts from '../BlogApi/blogData'

const PostContent = () => {
    // const { id } = useParams();
    // const post = blogPosts.find((post) => post.id === id)
    // if (!post) {
    //     return <h2 className='text-white text-center'>Post Not Found</h2>;
    // }
    return (
        <>
            <section className="blog-details section-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-12">
                            {/* {
                                post.map((item , index) => (
                                    <h2 key={index.id}>{item.title}</h2>
                                ))
                            } */}
                            <div className="navtab-content">
                                <h2 className="heading">The whimsically named Egg Canvas brainchesiko</h2>
                                <ul className="post-info">
                                    <li><span><img src="../assets/images/icon/date.svg" alt="post date" /></span><Link to={''}>08 August 2024</Link></li>
                                    <li><span><img src="../assets/images/icon/comment.svg" alt="comments" /></span><Link to={''}>0 Comments</Link></li>
                                    <li><span><img src="../assets/images/icon/view.svg" alt="post date" /></span><Link to={''}>Viewer</Link></li>
                                </ul>
                                <div className="details-img">
                                    <img src="../assets/images/blog/blog-1.jpg" alt="blog-details" />
                                    <div className="admin">Albanian</div>
                                </div>
                                <h3 className="blog-info-title">Introduction</h3>
                                <p>In the vast digital landscape, creativity often finds its expression in the most unexpected ways. The whimsically named Egg Canvas, with its intriguing subtitle "Brainchesiko," invites readers into a unique world where imagination and technology intersect. This blog post explores the essence of Egg Canvas and the concept of Brainchesiko, offering insights into how this playful combination reflects the broader trends in digital creativity and innovation.</p>
                                <h3 className="blog-info-title">What is Egg Canvas?</h3>
                                <p>Egg Canvas is more than just a quirky name; it's a platform that embodies the spirit of creativity. The term "Egg Canvas" suggests a blank slate, full of potential and ready to be shaped into something extraordinary. It represents the idea that creativity is an ever-evolving process, much like the transformation of a simple egg into a work of art.</p>
                                <div className="best-service">
                                    <ul className="list">
                                        <li>High-Speed Internet Plans</li>
                                        <li>Fiber Optic Broadband</li>
                                        <li>Home Wi-Fi Installation</li>
                                        <li>Business Internet Solutions</li>
                                        <li>24/7 Customer Support</li>
                                        <li>Unlimited Data Plans</li>
                                        <li>Router and Modem Rentals</li>
                                        <li>Network Security Services</li>
                                    </ul>
                                </div>
                                <h3 className="blog-info-title">The Concept of Brainchesiko</h3>
                                <p>"Brainchesiko" is a term that combines the words "brain" and "chesiko," the latter being a playful, invented term that evokes a sense of whimsy and exploration. In the context of Egg Canvas, Brainchesiko symbolizes the fusion of intellectual rigor and creative freedom. It's about using the brain's logical and analytical capabilities in tandem with imaginative, out-of-the-box thinking to create something truly unique.</p>
                                <div className="news-user">
                                    <div className="user-imgs"><img src="../assets/images/news-user1.png" alt="users" /></div>
                                    <div className="user-imgs"><img src="../assets/images/news-user.png" alt="user" /></div>
                                </div>
                                <h3 className="blog-info-title">The Intersection of Creativity and Technology</h3>
                                <p>Egg Canvas and Brainchesiko are emblematic of a broader trend in the digital world: the blending of art and technology. In an era where digital tools are becoming increasingly sophisticated, platforms like Egg Canvas offer creators the opportunity to push boundaries and experiment with new forms of expression. Brainchesiko, with its emphasis on imaginative thinking, encourages users to explore the limits of their creativity.</p>
                                <div className="quote">
                                    SpeedStream has revolutionized our home entertainment. No more buffering during our favorite shows, and the kids can game online without any issues. <br/>
                                    <span>Highly recommend - Albanian</span>
                                </div>
                                <h3 className="blog-info-title">How Egg Canvas Reflects Modern Digital Trends</h3>
                                <p>Egg Canvas isn't just a platform; it's a reflection of the current digital zeitgeist. As more people seek out ways to express themselves online, the demand for creative outlets has grown. Egg Canvas meets this demand by providing a space where users can experiment, collaborate, and share their ideas with a like-minded community. Brainchesiko, in turn, serves as a reminder that creativity doesn't have to be serious or structured—it can be playful, spontaneous, and deeply personal.</p>
                                
                            </div>
                            <div className="navtab-content author-card">
                                <div className="author-box">
                                    <div className="author-img"><img src="../assets/images/Albanian.png" alt="Author" /></div>
                                    <div className="author-details">
                                        <div className="author-name">
                                            <h3 className="title">Albanian</h3>
                                            <ul className="social-icon d-sm-flex d-none">
                                                <li><Link to={''}><img src="../assets/images/icon/facebook.svg" alt="Facebook" /></Link></li>
                                                <li><Link to={''}><img src="../assets/images/icon/twiter.svg" alt="Twiter" /></Link></li>
                                                <li><Link to={''}><img src="../assets/images/icon/linkdine.svg" alt="Linkdine" /></Link></li>
                                                <li><Link to={''}><img src="../assets/images/icon/instagram.svg" alt="Instagram" /></Link></li>
                                            </ul>
                                        </div>
                                        <p>Albanian is a digital storyteller and author of "The whimsically named Egg Canvas brainchesiko," exploring the fusion of creativity and technology. With a background in web development and design, they bring a playful yet insightful perspective to modern digital trends. Albanian’s work inspires others to embrace their creative potential.</p>
                                        <ul className="social-icon d-sm-none d-flex">
                                            <li><Link to={''}><img src="../assets/images/icon/facebook.svg" alt="Facebook" /></Link></li>
                                            <li><Link to={''}><img src="../assets/images/icon/twiter.svg" alt="Twiter" /></Link></li>
                                            <li><Link to={''}><img src="../assets/images/icon/linkdine.svg" alt="Linkdine" /></Link></li>
                                            <li><Link to={''}><img src="../assets/images/icon/instagram.svg" alt="Instagram" /></Link></li>
                                        </ul>
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