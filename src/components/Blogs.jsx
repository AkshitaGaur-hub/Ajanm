import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { FaHeart } from "react-icons/fa6";
import JS from '../assets/images/JS.png'
import { FiMessageCircle } from "react-icons/fi";
import "./Blogs.css"
// removed unused import
import { Link } from 'react-router-dom';
const initialBlogs = [
    {
        id: 1,
        image: 'https://ajanm.ai/wp-content/uploads/2024/05/harmonal-disorder-960x720.jpg',
        title: 'Yoga for Hormonal Disorders: Balancing Body Chemistry Naturally',
        count: 0,
        liked: false,
    },
    {
        id: 2,
        image: 'https://ajanm.ai/wp-content/uploads/2024/05/sleep-960x720.jpg',
        title: 'Yoga for Sleep Disorders: A Natural Solution for Better Rest',
        count: 0,
        liked: false,
    },
    {
        id: 3,
        image: 'https://ajanm.ai/wp-content/uploads/2024/05/lifestyle-disorderd-960x720.jpg',
        title: 'Yoga as a Treatment for Lifestyle Disorders',
        count: 0,
        liked: false,
    },
    {
        id: 4,
        image: 'https://ajanm.ai/wp-content/uploads/2024/05/reverse-aging-960x720.jpg',
        title: 'Reverse Aging with Yoga: A Holistic Approach to Staying Young',
        count: 0,
        liked: false,
    },
    {
        id: 5,
        image: 'https://ajanm.ai/wp-content/uploads/2024/05/spine-healthy-960x720.jpg',
        title: 'The Importance of Spine Health and How Yoga Can Keep It Healthy',
        count: 0,
        liked: false,
    },
];

const Blogs = () => {
    const [blogs, setBlogs] = React.useState(initialBlogs);

    const toggleLike = (id) => {
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
                            />
                            <div className="cardt">
                                <p className='card-text'><b>{blog.title}</b></p>
                                <div className="flex justify-between items-center mt-4">
                                    <div className="like flex items-center gap-2">
                                        <FaHeart
                                            className={`heart ${blog.liked ? 'liked' : ''}`}
                                            onClick={() => toggleLike(blog.id)}
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
