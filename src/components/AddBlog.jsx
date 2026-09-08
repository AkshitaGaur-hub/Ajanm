import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { createBlog, blogImagePresets } from '../services/api';
import { BsArrowLeft } from 'react-icons/bs';
import { FaImage, FaCheckCircle } from 'react-icons/fa';
import './Blogs.css';

const CATEGORIES = [
  'Yoga & Asanas',
  'Hormonal Health',
  'Sleep & Rest',
  'Longevity & Anti-Aging',
  'Spine & Posture',
  'Lifestyle & Healing',
  'Meditation & Mindfulness',
  'Nutrition & Ayurveda'
];

const AddBlog = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Yoga & Asanas');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [imageMode, setImageMode] = useState('preset'); // 'preset' or 'custom'
  const [selectedPreset, setSelectedPreset] = useState(blogImagePresets[0].id);
  const [customImageUrl, setCustomImageUrl] = useState('');

  // Math Captcha
  const [num1] = useState(() => Math.floor(Math.random() * 8) + 2);
  const [num2] = useState(() => Math.floor(Math.random() * 7) + 3);
  const [captchaAnswer, setCaptchaAnswer] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleTemplateInsert = () => {
    const template = `Introduction:
Share why this wellness or yoga topic matters for mind and body.

Understanding the Health Connection:
Explain what causes the imbalance or disorder, and how physical movements and breathing assist recovery.

Recommended Practices & Asanas:
1. First Practice: Detail the posture, alignment, and how long to hold it.
2. Second Practice: Focus on breathwork (Pranayama) or mindful relaxation.
3. Daily Routine: Tips on integrating this into morning or bedtime schedules.

Conclusion:
A brief encouraging summary on consistency, self-care, and holistic well-being.`;

    if (!content || window.confirm('Replace current content with the wellness blog template?')) {
      setContent(template);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');

    if (!title.trim()) {
      setFormError('Please provide a compelling blog title.');
      return;
    }
    if (!content.trim()) {
      setFormError('Please write the blog content.');
      return;
    }
    if (Number(captchaAnswer) !== num1 + num2) {
      setFormError(`Incorrect captcha answer: What is ${num1} + ${num2}?`);
      return;
    }

    const finalImage = imageMode === 'custom' && customImageUrl.trim()
      ? customImageUrl.trim()
      : selectedPreset;

    try {
      setSubmitting(true);
      const newBlog = await createBlog({
        title: title.trim(),
        author: author.trim() || 'Ajnam Community Member',
        category,
        summary: summary.trim() || title.trim(),
        content: content.trim(),
        image: finalImage
      });

      setSuccessMessage('Your blog has been successfully published to the real database!');
      setTimeout(() => {
        navigate(`/blogs_desc/${newBlog.id}`);
      }, 1200);
    } catch (err) {
      console.error('Failed to create blog:', err);
      setFormError(err.message || 'Could not publish blog. Please check your connection and try again.');
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container add_blog_container">
        <div className="back_nav mb-4">
          <Link to="/blogs" className="back_link inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium">
            <BsArrowLeft /> Back to Blogs
          </Link>
        </div>

        <div className="add_blog_card">
          <div className="form_header">
            <h1 className="comment-title">Publish a New Blog Article</h1>
            <p className="comment-note">
              Share your insights, yoga routines, and holistic wellness knowledge with the Ajnam community.
            </p>
          </div>

          {formError && (
            <div className="form_alert error mb-6">
              <span>{formError}</span>
            </div>
          )}

          {successMessage && (
            <div className="form_alert success mb-6 flex items-center gap-2">
              <FaCheckCircle className="text-green-600 text-lg" />
              <span>{successMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="add_blog_form">
            <div className="form-group">
              <label>Article Title *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Asanas for Anxiety Relief: Restoring Calm Naturally"
                required
              />
            </div>

            <div className="input-grid">
              <div className="form-group">
                <label>Author Name</label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Your Name / Yoga Instructor"
                />
              </div>

              <div className="form-group">
                <label>Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="select_input"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Cover Image Type</label>
                <div className="image_mode_toggle flex gap-2">
                  <button
                    type="button"
                    className={`mode_tab ${imageMode === 'preset' ? 'active' : ''}`}
                    onClick={() => setImageMode('preset')}
                  >
                    Curated Presets
                  </button>
                  <button
                    type="button"
                    className={`mode_tab ${imageMode === 'custom' ? 'active' : ''}`}
                    onClick={() => setImageMode('custom')}
                  >
                    Custom URL
                  </button>
                </div>
              </div>
            </div>

            {/* Cover Image Selector */}
            {imageMode === 'preset' ? (
              <div className="form-group mt-4">
                <label>Select a Curated Cover Image</label>
                <div className="preset_grid">
                  {blogImagePresets.map((preset) => (
                    <div
                      key={preset.id}
                      className={`preset_card ${selectedPreset === preset.id ? 'selected' : ''}`}
                      onClick={() => setSelectedPreset(preset.id)}
                    >
                      <img src={preset.url} alt={preset.name} className="preset_thumb" />
                      <span className="preset_label">{preset.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="form-group mt-4">
                <label>Custom Image URL (HTTPS)</label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={customImageUrl}
                    onChange={(e) => setCustomImageUrl(e.target.value)}
                    placeholder="https://images.unsplash.com/photo-..."
                  />
                </div>
                {customImageUrl && (
                  <div className="image_preview_box mt-2">
                    <img
                      src={customImageUrl}
                      alt="Preview"
                      className="preview_img"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
              </div>
            )}

            <div className="form-group mt-4">
              <label>Short Summary / Hook *</label>
              <textarea
                rows="2"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="A brief 1-2 sentence preview that appears on the blog cards feed..."
              ></textarea>
            </div>

            <div className="form-group mt-4">
              <div className="flex justify-between items-center">
                <label>Full Article Content *</label>
                <button
                  type="button"
                  onClick={handleTemplateInsert}
                  className="template_insert_btn text-xs text-orange-600 hover:text-orange-800"
                >
                  Insert Article Template
                </button>
              </div>
              <textarea
                rows="12"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your article here. You can use separate paragraphs, headings, and lists..."
                required
              ></textarea>
            </div>

            <div className="bottom-section">
              <div className="captcha-box">
                <h4>Math Captcha Verification</h4>
                <div className="captcha-row">
                  <span className="font-semibold text-base">{num1} + {num2} = </span>
                  <input
                    type="number"
                    value={captchaAnswer}
                    onChange={(e) => setCaptchaAnswer(e.target.value)}
                    placeholder="?"
                    required
                  />
                </div>
                <p>Please solve the arithmetic challenge to prevent spam</p>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn submit_blog_btn"
              >
                {submitting ? 'Publishing to Database...' : 'Publish Blog Article'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddBlog;
