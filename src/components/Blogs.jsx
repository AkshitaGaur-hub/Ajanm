import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { FaHeart } from "react-icons/fa6"; 
import { FiMessageCircle } from "react-icons/fi";
import "./Blogs.css"
import img from "../assets/blogs-image/spine.png";
import hormon from "../assets/blogs-image/hormon.png";
import sleep from "../assets/blogs-image/sleep.png";
import life from "../assets/blogs-image/life.png";
import reverse from "../assets/blogs-image/reverse.png";

import { Link } from 'react-router-dom';
const initialBlogs = [
    {
        id: 1,
        image: hormon,
        title: 'Yoga for Hormonal Disorders: Balancing Body Chemistry Naturally',
        count: 0,
        liked: false,
    },
    {
        id: 2,
        image: sleep,
        title: 'Yoga for Sleep Disorders: A Natural Solution for Better Rest',
        count: 0,
        liked: false,
    },
    {
        id: 3,
        image: life,
        title: 'Yoga as a Treatment for Lifestyle Disorders',
        count: 0,
        liked: false,
    },
    {
        id: 4,
        image: reverse,
        title: 'Reverse Aging with Yoga: A Holistic Approach to Staying Young',
        count: 0,
        liked: false,
    },
    {
        id: 5,
        image: img,
        title: 'The Importance of Spine Health and How Yoga Can Keep It Healthy',
        count: 0,
        liked: false,
    },
];

const BLOG_STORAGE_KEY = 'ajnam-blog-likes';

const Blogs = () => {
    const [blogs, setBlogs] = React.useState(() => {
        const saved = localStorage.getItem(BLOG_STORAGE_KEY);
        if (!saved) return initialBlogs;

        try {
            const storedBlogs = JSON.parse(saved);
            return initialBlogs.map((blog) => {
                const persisted = storedBlogs.find((item) => item.id === blog.id);
                return persisted ? { ...blog, liked: persisted.liked, count: persisted.count } : blog;
            });
        } catch (err) {
            console(err)
            return initialBlogs;
        }
    });

    React.useEffect(() => {
        localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(blogs));
    }, [blogs]);

    const toggleLike = (event, id) => {
        event.stopPropagation();
        event.preventDefault();

        setBlogs((prevBlogs) =>
            prevBlogs.map((blog) => {
                if (blog.id !== id) return blog;
                const liked = !blog.liked;
                const count = liked ? blog.count + 1 : Math.max(0, blog.count - 1);
                return { ...blog, liked, count };
            })
        );
    };

    return (
        <>
            <Navbar />
            <div className="blogs">
                <div className="blog_top">
                    <h1 className="blog_heading ">Blog & Insights</h1>
                    <p className="blog_para">Explore our latest articles, expert insights, and wellness tips to support your health journey.</p>
                </div>


                <div className="blog_card">
                    {blogs.map((blog) => (
                        <Link to={`/blogs_desc/${blog.id}`}>
                        <div className="card1" key={blog.id}>
                            <img
                                src={blog.image}
                                className="yoga_img scale-with-grid"
                                alt={blog.title}
                                loading='lazy'
                            />
                            <div className="cardt">
                                <p className='card-text'><b>{blog.title}</b></p>
                                <div className="flex justify-between items-center mt-4">
                                    <div className="like flex items-center gap-2">
                                        <FaHeart
                                            className={`heart ${blog.liked ? 'liked' : ''}`}
                                            onClick={(event) => toggleLike(event, blog.id)}
                                        />
                                        <span>{blog.count}</span>
                                    </div>
                                    <div className="comment flex items-center gap-2">
                                        <FiMessageCircle />
                                        <span>Read more</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blogs
