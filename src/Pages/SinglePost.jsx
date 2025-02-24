import React from 'react'
import { Link, useParams } from 'react-router-dom'
import blogData from '../BlogApi/blogData'
import PostContent from '../Components/PostContent'

const SinglePost = () => {
    const { slug } = useParams();
    
    console.log("Slug from URL:", slug); 

    const blog = blogData.find((post) => post.slug === slug);

    console.log("Found Blog:", blog);  

    if (!blog) {
        return <h2 className='text-white text-center'>Blog Post Not Found</h2>;
    }

    return (
        <>
            <section className="breadcrumb-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-auto col-11 mx-auto">
                            <h1 className="page-name">Single Post</h1>  
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item"><Link to="/blogs">Blogs</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">{blog.title}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <span className="pattren"></span>
            </section>
            <PostContent blog={blog}/>
        </>
    );
}

export default SinglePost;
