import { Router } from 'express';
import { blogDb } from './db.js';

const router = Router();

// GET /api/blogs - Get all blogs with likes and comments counts
router.get('/blogs', (req, res) => {
  try {
    const clientId = req.query.clientId ? String(req.query.clientId) : '';
    const blogs = blogDb.getAllBlogs(clientId);
    res.json({ success: true, data: blogs });
  } catch (err) {
    console.error('Error fetching blogs:', err);
    res.status(500).json({ success: false, error: 'Failed to fetch blogs' });
  }
});

// GET /api/blogs/:id - Get a single blog by ID
router.get('/blogs/:id', (req, res) => {
  try {
    const blogId = Number(req.params.id);
    const clientId = req.query.clientId ? String(req.query.clientId) : '';
    const blog = blogDb.getBlogById(blogId, clientId);
    if (!blog) {
      return res.status(404).json({ success: false, error: 'Blog not found' });
    }
    res.json({ success: true, data: blog });
  } catch (err) {
    console.error('Error fetching blog:', err);
    res.status(500).json({ success: false, error: 'Failed to fetch blog' });
  }
});

// POST /api/blogs - Create a new blog post
router.post('/blogs', (req, res) => {
  try {
    const { title, summary, content, category, author, image } = req.body || {};
    if (!title || !title.trim()) {
      return res.status(400).json({ success: false, error: 'Title is required' });
    }
    if (!content || !content.trim()) {
      return res.status(400).json({ success: false, error: 'Blog content is required' });
    }

    const createdBlog = blogDb.createBlog({
      title,
      summary,
      content,
      category: category || 'Wellness',
      author: author || 'Ajnam Community Member',
      image: image || ''
    });

    res.status(201).json({ success: true, data: createdBlog });
  } catch (err) {
    console.error('Error creating blog:', err);
    res.status(500).json({ success: false, error: 'Failed to create blog post' });
  }
});

// POST /api/blogs/:id/like - Toggle like on a blog post
router.post('/blogs/:id/like', (req, res) => {
  try {
    const blogId = Number(req.params.id);
    const { clientId } = req.body || {};
    if (!clientId) {
      return res.status(400).json({ success: false, error: 'clientId is required' });
    }

    const result = blogDb.toggleLike(blogId, clientId);
    res.json({ success: true, data: result });
  } catch (err) {
    console.error('Error toggling like:', err);
    res.status(500).json({ success: false, error: 'Failed to update like status' });
  }
});

// GET /api/blogs/:id/comments - Get all comments for a blog post
router.get('/blogs/:id/comments', (req, res) => {
  try {
    const blogId = Number(req.params.id);
    const comments = blogDb.getComments(blogId);
    res.json({ success: true, data: comments });
  } catch (err) {
    console.error('Error fetching comments:', err);
    res.status(500).json({ success: false, error: 'Failed to fetch comments' });
  }
});

// POST /api/blogs/:id/comments - Add a comment to a blog post
router.post('/blogs/:id/comments', (req, res) => {
  try {
    const blogId = Number(req.params.id);
    const { name, email, website, comment } = req.body || {};

    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, error: 'Name is required' });
    }
    if (!email || !email.trim()) {
      return res.status(400).json({ success: false, error: 'Email is required' });
    }
    if (!comment || !comment.trim()) {
      return res.status(400).json({ success: false, error: 'Comment text is required' });
    }

    const newComment = blogDb.addComment({
      blogId,
      name,
      email,
      website,
      comment
    });

    res.status(201).json({ success: true, data: newComment });
  } catch (err) {
    console.error('Error adding comment:', err);
    res.status(500).json({ success: false, error: 'Failed to post comment' });
  }
});

export default router;
