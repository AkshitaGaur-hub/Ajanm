import React, { useState, useEffect } from 'react';
import './Blogs.css';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { BsArrowLeftCircle, BsArrowRightCircle, BsArrowLeft } from 'react-icons/bs';
import { FaHeart, FaUserCircle, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';
import {
  fetchBlogById,
  toggleBlogLike,
  fetchComments,
  addComment,
  resolveBlogImage
} from '../services/api';

const COMMENTER_STORAGE_KEY = 'ajnam_commenter_info';

const Blogs_desc = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogId = Number(id);

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [togglingLike, setTogglingLike] = useState(false);

  // Comments state
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(true);

  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [commentText, setCommentText] = useState('');
  const [saveInfo, setSaveInfo] = useState(true);

  // Dynamic Captcha
  const [cNum1, setCNum1] = useState(3);
  const [cNum2, setCNum2] = useState(6);
  const [captchaInput, setCaptchaInput] = useState('');

  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  // Generate dynamic captcha challenge
  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 6) + 2;
    const n2 = Math.floor(Math.random() * 5) + 2;
    setCNum1(n1);
    setCNum2(n2);
    setCaptchaInput('');
  };

  // Load saved commenter info from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(COMMENTER_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.name) setName(parsed.name);
        if (parsed.email) setEmail(parsed.email);
        if (parsed.website) setWebsite(parsed.website);
      }
    } catch {
      // ignore
    }
    generateCaptcha();
  }, []);

  // Fetch blog details
  useEffect(() => {
    let isMounted = true;

    const loadBlogData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchBlogById(blogId);
        if (isMounted) {
          setBlog(data);
        }
      } catch (err) {
        console.error('Failed to load blog:', err);
        if (isMounted) {
          setError('Blog not found or unable to load from database.');
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    const loadCommentsData = async () => {
      try {
        setCommentsLoading(true);
        const list = await fetchComments(blogId);
        if (isMounted) {
          setComments(list);
        }
      } catch (err) {
        console.error('Failed to load comments:', err);
      } finally {
        if (isMounted) setCommentsLoading(false);
      }
    };

    loadBlogData();
    loadCommentsData();

    return () => {
      isMounted = false;
    };
  }, [blogId]);

  // Handle like toggle on article page
  const handleLike = async () => {
    if (!blog || togglingLike) return;
    setTogglingLike(true);

    const prevLiked = blog.liked;
    const prevCount = blog.count;

    // Optimistic UI update
    setBlog((prev) => ({
      ...prev,
      liked: !prevLiked,
      count: !prevLiked ? prevCount + 1 : Math.max(0, prevCount - 1)
    }));

    try {
      const result = await toggleBlogLike(blog.id);
      setBlog((prev) => ({
        ...prev,
        liked: result.liked,
        count: result.count
      }));
    } catch (err) {
      console.error('Error toggling like:', err);
      // Revert on error
      setBlog((prev) => ({
        ...prev,
        liked: prevLiked,
        count: prevCount
      }));
    } finally {
      setTogglingLike(false);
    }
  };

  // Next / Previous navigation based on real database IDs
  const allIds = blog?.allIds || [];
  const currentIndex = allIds.indexOf(blogId);

  const previousBlog = () => {
    if (allIds.length === 0) return;
    const prevIndex = (currentIndex - 1 + allIds.length) % allIds.length;
    const prevId = allIds[prevIndex];
    navigate(`/blogs_desc/${prevId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextBlog = () => {
    if (allIds.length === 0) return;
    const nextIndex = (currentIndex + 1) % allIds.length;
    const nextId = allIds[nextIndex];
    navigate(`/blogs_desc/${nextId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle comment submit
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess('');

    if (!name.trim() || !email.trim() || !commentText.trim()) {
      setFormError('Please fill out all required fields marked with *.');
      return;
    }

    if (Number(captchaInput) !== cNum1 * cNum2) {
      setFormError(`Captcha answer is incorrect: What is ${cNum1} × ${cNum2}?`);
      return;
    }

    try {
      setFormSubmitting(true);
      const newComment = await addComment(blogId, {
        name: name.trim(),
        email: email.trim(),
        website: website.trim(),
        comment: commentText.trim()
      });

      // Save user info if checkbox checked
      if (saveInfo) {
        localStorage.setItem(
          COMMENTER_STORAGE_KEY,
          JSON.stringify({ name: name.trim(), email: email.trim(), website: website.trim() })
        );
      } else {
        localStorage.removeItem(COMMENTER_STORAGE_KEY);
      }

      setComments((prev) => [newComment, ...prev]);
      setCommentText('');
      generateCaptcha();
      setFormSuccess('Thank you! Your comment has been posted successfully.');

      // Update comments count on blog object
      setBlog((prev) => (prev ? { ...prev, commentsCount: (prev.commentsCount || 0) + 1 } : prev));
    } catch (err) {
      console.error('Failed to submit comment:', err);
      setFormError(err.message || 'Unable to post comment. Please try again.');
    } finally {
      setFormSubmitting(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="container py-20 text-center">
          <div className="blog_spinner mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading article from real database...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !blog) {
    return (
      <>
        <Navbar />
        <div className="container py-20 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Article Not Found</h2>
          <p className="text-gray-600 mb-6">{error || 'The requested blog does not exist in the database.'}</p>
          <Link to="/blogs" className="add_blog_btn">
            Back to All Blogs
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  // Parse structured or text content
  let parsedStructured = null;
  let textParagraphs = [];
  try {
    const obj = typeof blog.content === 'string' ? JSON.parse(blog.content) : blog.content;
    if (obj && typeof obj === 'object' && (obj.para1 || obj.sections)) {
      parsedStructured = obj;
    } else {
      textParagraphs = String(blog.content).split('\n\n').filter(Boolean);
    }
  } catch {
    textParagraphs = String(blog.content || '').split('\n\n').filter(Boolean);
  }

  const imageSrc = resolveBlogImage(blog.image, blog.id);

  return (
    <>
      <Navbar />
      <div className="container blog_detail_container">
        {/* Navigation Breadcrumb */}
        <div className="detail_top_nav flex items-center justify-between my-4">
          <Link to="/blogs" className="back_link inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium">
            <BsArrowLeft /> Back to Blogs
          </Link>
          <Link to="/add-blog" className="add_small_btn text-sm font-medium text-orange-600 hover:underline">
            + Write an Article
          </Link>
        </div>

        {/* Article Header */}
        <div className="article_header my-6">
          {blog.category && (
            <span className="blog_category_badge inline-block mb-3">{blog.category}</span>
          )}
          <h1 className="article_main_title">{blog.title}</h1>

          <div className="article_meta_bar flex flex-wrap items-center justify-between gap-4 mt-4 pb-4 border-b border-gray-200">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <FaUserCircle className="text-orange-500" />
                <b>{blog.author || 'Ajnam Community'}</b>
              </span>
              {blog.createdAt && (
                <span className="flex items-center gap-1 text-gray-500">
                  <FaCalendarAlt />
                  {new Date(blog.createdAt).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </span>
              )}
              <span className="flex items-center gap-1 text-gray-500">
                <FiMessageCircle />
                {comments.length} {comments.length === 1 ? 'comment' : 'comments'}
              </span>
            </div>

            {/* Like button on article page */}
            <div
              className={`article_like_btn flex items-center gap-2 cursor-pointer ${blog.liked ? 'liked' : ''}`}
              onClick={handleLike}
              title={blog.liked ? 'Liked! Click to remove like' : 'Click to like this article'}
            >
              <FaHeart className={`heart text-xl ${blog.liked ? 'liked' : ''}`} />
              <span className="font-bold text-base">{blog.count} Likes</span>
            </div>
          </div>
        </div>

        {/* Blog Image & Content */}
        <div className="blog_content">
          <div className="img" key={blog.id}>
            <img
              className="description_image w-full"
              src={imageSrc}
              alt={blog.title}
              loading="eager"
            />

            {/* Render Legacy Seeded Structured Content */}
            {parsedStructured ? (
              <div className="structured_body">
                {parsedStructured.para1 && <p className="para">{parsedStructured.para1}</p>}
                {parsedStructured.title1 && <h3 className="head">{parsedStructured.title1}</h3>}
                {parsedStructured.para2 && <p className="para">{parsedStructured.para2}</p>}
                {parsedStructured.title2 && <h3 className="head">{parsedStructured.title2}</h3>}
                {parsedStructured.subheading1 && (
                  <p className="para">
                    <b>{parsedStructured.subheading1}</b>
                    {parsedStructured.subpara1}
                  </p>
                )}
                {parsedStructured.subheading2 && (
                  <p className="para">
                    <b>{parsedStructured.subheading2}</b>
                    {parsedStructured.subpara2}
                  </p>
                )}
                {parsedStructured.subheading3 && (
                  <p className="para">
                    <b>{parsedStructured.subheading3}</b>
                    {parsedStructured.subpara3}
                  </p>
                )}
                {parsedStructured.subheading4 && (
                  <p className="para">
                    <b>{parsedStructured.subheading4}</b>
                    {parsedStructured.subpara4}
                  </p>
                )}
                {parsedStructured.subheading5 && (
                  <p className="para">
                    <b>{parsedStructured.subheading5}</b>
                    {parsedStructured.subpara5}
                  </p>
                )}
                {parsedStructured.title3 && <h3 className="head">{parsedStructured.title3}</h3>}
                {parsedStructured.subh1 && (
                  <p className="para">
                    <b>{parsedStructured.subh1}</b>
                    {parsedStructured.subp1}
                  </p>
                )}
                {parsedStructured.subh2 && (
                  <p className="para">
                    <b>{parsedStructured.subh2}</b>
                    {parsedStructured.subp2}
                  </p>
                )}
                {parsedStructured.subh3 && (
                  <p className="para">
                    <b>{parsedStructured.subh3}</b>
                    {parsedStructured.subp3}
                  </p>
                )}
                {parsedStructured.subh4 && (
                  <p className="para">
                    <b>{parsedStructured.subh4}</b>
                    {parsedStructured.subp4}
                  </p>
                )}
                {parsedStructured.title4 && <h3 className="head">{parsedStructured.title4}</h3>}
                {parsedStructured.para3 && <p className="para">{parsedStructured.para3}</p>}
                {parsedStructured.conclusion && (
                  <h3 className="head">{parsedStructured.conclusion}</h3>
                )}
                {parsedStructured.conp && <p className="para">{parsedStructured.conp}</p>}
              </div>
            ) : (
              /* Render User-Generated / Paragraph Content */
              <div className="dynamic_body">
                {textParagraphs.map((para, idx) => {
                  const trimmed = para.trim();
                  // Detect heading if short or starts with # or ends with :
                  if (trimmed.startsWith('#') || (trimmed.endsWith(':') && trimmed.length < 80)) {
                    return (
                      <h3 key={idx} className="head">
                        {trimmed.replace(/^#+\s*/, '')}
                      </h3>
                    );
                  }
                  return (
                    <p key={idx} className="para whitespace-pre-line">
                      {trimmed}
                    </p>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Like Bar */}
        <div className="bottom_like_bar my-8 p-4 bg-orange-50 rounded-2xl flex items-center justify-between">
          <div>
            <h4 className="font-bold text-gray-800">Did you find this wellness article helpful?</h4>
            <p className="text-xs text-gray-500">Click the heart to share your support with the community.</p>
          </div>
          <button
            onClick={handleLike}
            className={`btn inline-flex items-center gap-2 ${blog.liked ? 'bg-red-500 hover:bg-red-600' : ''}`}
          >
            <FaHeart className={blog.liked ? 'text-white' : ''} />
            <span>{blog.liked ? 'Liked' : 'Like Article'} ({blog.count})</span>
          </button>
        </div>

        {/* Existing Comments List Section */}
        <section className="comments_display_section my-8">
          <div className="comment-card">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-200">
              <h3 className="comment-title text-2xl font-bold">
                Comments ({comments.length})
              </h3>
              <span className="text-sm text-gray-500">Real-time Community Discussion</span>
            </div>

            {commentsLoading ? (
              <p className="text-gray-500 py-4">Loading comments...</p>
            ) : comments.length === 0 ? (
              <div className="no_comments_box py-8 text-center bg-gray-50 rounded-xl">
                <p className="text-gray-600 font-medium">No replies yet.</p>
                <p className="text-gray-400 text-sm mt-1">
                  Be the first to share your thoughts, questions, or experience below!
                </p>
              </div>
            ) : (
              <div className="comments_list flex flex-col gap-6">
                {comments.map((c) => (
                  <div key={c.id} className="comment_item p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="comment_item_header flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="comment_avatar">
                          {c.name ? c.name.charAt(0).toUpperCase() : 'A'}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">
                            {c.website ? (
                              <a
                                href={c.website.startsWith('http') ? c.website : `https://${c.website}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-orange-600 hover:underline"
                              >
                                {c.name}
                              </a>
                            ) : (
                              c.name
                            )}
                          </div>
                          <span className="text-xs text-gray-400">
                            {c.createdAt
                              ? new Date(c.createdAt).toLocaleDateString(undefined, {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric',
                                  hour: '2-digit',
                                  minute: '2-digit'
                                })
                              : 'Recently'}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="comment_body_text text-gray-700 whitespace-pre-line pl-12 text-sm leading-relaxed">
                      {c.comment}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Leave a Reply Form */}
        <section className="comment-section">
          <div className="comment-card">
            <h2 className="comment-title">Leave a Reply</h2>

            <p className="comment-note">
              Your email address will not be published. Required fields are marked with <span>*</span>
            </p>

            {formError && (
              <div className="form_alert error mb-4">
                <span>{formError}</span>
              </div>
            )}

            {formSuccess && (
              <div className="form_alert success mb-4 flex items-center gap-2">
                <FaCheckCircle className="text-green-600" />
                <span>{formSuccess}</span>
              </div>
            )}

            <form onSubmit={handleCommentSubmit}>
              <div className="form-group">
                <label>Comment *</label>
                <textarea
                  rows="6"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Enter your thoughts, questions, or experiences..."
                  required
                ></textarea>
              </div>

              <div className="input-grid">
                <div className="form-group">
                  <label>Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Website</label>
                  <input
                    type="url"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </div>

              <div className="checkbox-wrapper">
                <input
                  type="checkbox"
                  id="saveInfo"
                  checked={saveInfo}
                  onChange={(e) => setSaveInfo(e.target.checked)}
                />
                <label htmlFor="saveInfo">
                  Save my name, email, and website in this browser for the next time I comment.
                </label>
              </div>

              <div className="bottom-section">
                <div className="captcha-box">
                  <h4>Math Captcha</h4>
                  <div className="captcha-row">
                    <input
                      type="number"
                      value={captchaInput}
                      onChange={(e) => setCaptchaInput(e.target.value)}
                      placeholder="?"
                      required
                    />
                    <span>× {cNum2} = {cNum1 * cNum2}</span>
                  </div>
                  <p>What number multiplied by {cNum2} equals {cNum1 * cNum2}?</p>
                </div>

                <button
                  type="submit"
                  disabled={formSubmitting}
                  aria-label="post comment"
                  className="btn"
                >
                  {formSubmitting ? 'Posting Comment...' : 'Post Comment'}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>

      {/* Dynamic Prev / Next arrows */}
      {allIds.length > 1 && (
        <>
          <div
            className="arrow arrow-left"
            onClick={previousBlog}
            title="Go to previous article"
          >
            <BsArrowLeftCircle className="text-white text-2xl" />
          </div>

          <div
            className="arrow arrow-right"
            onClick={nextBlog}
            title="Go to next article"
          >
            <BsArrowRightCircle className="text-white text-2xl" />
          </div>
        </>
      )}

      <Footer />
    </>
  );
};

export default Blogs_desc;
