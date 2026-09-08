import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaHeart, FaPlus } from 'react-icons/fa6';
import { FiMessageCircle } from 'react-icons/fi';
import './Blogs.css';
import { Link } from 'react-router-dom';
import { fetchBlogs, toggleBlogLike, resolveBlogImage } from '../services/api';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [togglingId, setTogglingId] = useState(null);

  const loadBlogs = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchBlogs();
      setBlogs(data);
    } catch (err) {
      console.error('Error loading blogs:', err);
      setError('Unable to load articles from the database. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  const handleToggleLike = async (event, id) => {
    event.stopPropagation();
    event.preventDefault();

    if (togglingId === id) return; // Prevent double click spam
    setTogglingId(id);

    // Optimistic UI update
    const previousBlogs = [...blogs];
    setBlogs((prev) =>
      prev.map((blog) => {
        if (blog.id !== id) return blog;
        const willLike = !blog.liked;
        const nextCount = willLike ? blog.count + 1 : Math.max(0, blog.count - 1);
        return { ...blog, liked: willLike, count: nextCount };
      })
    );

    try {
      const updated = await toggleBlogLike(id);
      setBlogs((prev) =>
        prev.map((blog) =>
          blog.id === id ? { ...blog, liked: updated.liked, count: updated.count } : blog
        )
      );
    } catch (err) {
      console.error('Failed to toggle like on database:', err);
      // Rollback on failure
      setBlogs(previousBlogs);
    } finally {
      setTogglingId(null);
    }
  };

  return (
    <>
      <Navbar />
      <div className="blogs">
        <div className="blog_top">
          <div className="flex flex-col items-center text-center px-4">
            <h1 className="blog_heading">Blog & Insights</h1>
            <p className="blog_para mt-2 max-w-2xl">
              Explore our latest articles, expert insights, and wellness tips to support your health journey.
            </p>
          </div>

          <div className="blog_actions mt-6 flex justify-center items-center gap-4">
            <Link to="/add-blog" className="add_blog_btn inline-flex items-center gap-2">
              <FaPlus className="text-sm" />
              <span>Write / Add Blog</span>
            </Link>
          </div>
        </div>

        {loading ? (
          <div className="blog_status_box">
            <div className="blog_spinner"></div>
            <p>Loading real-time articles & community insights...</p>
          </div>
        ) : error ? (
          <div className="blog_status_box error_box">
            <p className="text-red-600 font-medium mb-3">{error}</p>
            <button onClick={loadBlogs} className="retry_btn">
              Try Again
            </button>
          </div>
        ) : blogs.length === 0 ? (
          <div className="blog_status_box">
            <p className="text-gray-600 text-lg mb-4">No articles found in the database.</p>
            <Link to="/add-blog" className="add_blog_btn">
              Be the first to publish a blog
            </Link>
          </div>
        ) : (
          <div className="blog_card">
            {blogs.map((blog) => {
              const imageSrc = resolveBlogImage(blog.image, blog.id);
              return (
                <Link to={`/blogs_desc/${blog.id}`} key={blog.id} className="card_link_wrapper">
                  <div className="card1">
                    <div className="card_img_wrapper">
                      <img
                        src={imageSrc}
                        className="yoga_img scale-with-grid"
                        alt={blog.title}
                        loading="lazy"
                      />
                      {blog.category && (
                        <span className="blog_category_badge">{blog.category}</span>
                      )}
                    </div>
                    <div className="cardt">
                      <p className="card-text">
                        <b>{blog.title}</b>
                      </p>
                      {blog.summary && (
                        <p className="card_excerpt text-xs text-gray-500 line-clamp-2 mt-1">
                          {blog.summary}
                        </p>
                      )}
                      <div className="flex justify-between items-center mt-4 pt-2 border-t border-gray-100">
                        <div
                          className="like flex items-center gap-2 cursor-pointer"
                          onClick={(event) => handleToggleLike(event, blog.id)}
                          title={blog.liked ? 'Unlike this blog' : 'Like this blog'}
                        >
                          <FaHeart className={`heart ${blog.liked ? 'liked' : ''}`} />
                          <span className="font-semibold text-sm">{blog.count}</span>
                        </div>
                        <div className="comment flex items-center gap-2 text-gray-600 hover:text-orange-500">
                          <FiMessageCircle />
                          <span className="text-xs font-medium">
                            {blog.commentsCount > 0 ? `${blog.commentsCount} comments` : 'Read more'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
