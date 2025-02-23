import React from 'react'
import { Link, useParams } from 'react-router-dom'
import blogData from '../BlogApi/blogData'
import PostContent from '../Components/PostContent'

const SinglePost = () => {
    const {slug} = useParams
    const blog = blogData.find((post) => post.slug === slug);
    const pageName = blog ? blog.title : "Page Not Found";
    return (
        <>
        <section className="breadcrumb-section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-auto col-11 mx-auto">
                        <h1 className="page-name">{pageName}</h1>  
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item"><Link to="/blogs">Blogs</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{pageName}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <span className="pattren"></span>
        </section>
        <PostContent/>
        </>
    )
}

export default SinglePost