import hormonImg from '../assets/blogs-image/hormon.png';
import sleepImg from '../assets/blogs-image/sleep.png';
import lifeImg from '../assets/blogs-image/life.png';
import reverseImg from '../assets/blogs-image/reverse.png';
import spineImg from '../assets/blogs-image/spine.png';

// Fallback / Preset image assets
export const blogAssetMap = {
  hormon: hormonImg,
  sleep: sleepImg,
  life: lifeImg,
  reverse: reverseImg,
  spine: spineImg,
  1: hormonImg,
  2: sleepImg,
  3: lifeImg,
  4: reverseImg,
  5: spineImg,
};

// Curated presets for adding blogs
export const blogImagePresets = [
  { id: 'hormon', name: 'Hormonal Balance', url: hormonImg, tag: 'Hormones' },
  { id: 'sleep', name: 'Sleep & Rest', url: sleepImg, tag: 'Sleep' },
  { id: 'life', name: 'Holistic Lifestyle', url: lifeImg, tag: 'Lifestyle' },
  { id: 'reverse', name: 'Longevity & Aging', url: reverseImg, tag: 'Longevity' },
  { id: 'spine', name: 'Spine & Posture', url: spineImg, tag: 'Spine Health' },
  {
    id: 'meditation',
    name: 'Mind & Meditation',
    url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80',
    tag: 'Meditation'
  },
  {
    id: 'pranayama',
    name: 'Breathwork & Energy',
    url: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&auto=format&fit=crop&q=80',
    tag: 'Pranayama'
  },
  {
    id: 'nutrition',
    name: 'Nourishment & Diet',
    url: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&auto=format&fit=crop&q=80',
    tag: 'Nutrition'
  }
];

// Helper to resolve an image identifier, asset key, or URL
export function resolveBlogImage(imageIdentifier, blogId) {
  if (!imageIdentifier) {
    if (blogId && blogAssetMap[blogId]) {
      return blogAssetMap[blogId];
    }
    return spineImg;
  }

  // If it matches a known asset key
  if (blogAssetMap[imageIdentifier]) {
    return blogAssetMap[imageIdentifier];
  }

  // If it is a full web URL or data URL
  if (imageIdentifier.startsWith('http://') || imageIdentifier.startsWith('https://') || imageIdentifier.startsWith('data:') || imageIdentifier.startsWith('/')) {
    return imageIdentifier;
  }

  // Fallback to ID map or default
  return (blogId && blogAssetMap[blogId]) || spineImg;
}

// Persistent anonymous client identifier for real database likes tracking
export function getClientId() {
  const CLIENT_KEY = 'ajnam_client_id';
  let clientId = localStorage.getItem(CLIENT_KEY);
  if (!clientId) {
    clientId = 'client_' + Date.now() + '_' + Math.random().toString(36).substring(2, 10);
    localStorage.setItem(CLIENT_KEY, clientId);
  }
  return clientId;
}

const API_BASE = '/api';

export async function fetchBlogs() {
  const clientId = getClientId();
  const res = await fetch(`${API_BASE}/blogs?clientId=${encodeURIComponent(clientId)}`);
  const json = await res.json();
  if (!json.success) {
    throw new Error(json.error || 'Failed to fetch blogs');
  }
  return json.data;
}

export async function fetchBlogById(id) {
  const clientId = getClientId();
  const res = await fetch(`${API_BASE}/blogs/${id}?clientId=${encodeURIComponent(clientId)}`);
  const json = await res.json();
  if (!json.success) {
    throw new Error(json.error || 'Failed to fetch blog');
  }
  return json.data;
}

export async function toggleBlogLike(id) {
  const clientId = getClientId();
  const res = await fetch(`${API_BASE}/blogs/${id}/like`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ clientId })
  });
  const json = await res.json();
  if (!json.success) {
    throw new Error(json.error || 'Failed to toggle like');
  }
  return json.data;
}

export async function createBlog(blogData) {
  const res = await fetch(`${API_BASE}/blogs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(blogData)
  });
  const json = await res.json();
  if (!json.success) {
    throw new Error(json.error || 'Failed to create blog');
  }
  return json.data;
}

export async function fetchComments(blogId) {
  const res = await fetch(`${API_BASE}/blogs/${blogId}/comments`);
  const json = await res.json();
  if (!json.success) {
    throw new Error(json.error || 'Failed to fetch comments');
  }
  return json.data;
}

export async function addComment(blogId, commentData) {
  const res = await fetch(`${API_BASE}/blogs/${blogId}/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(commentData)
  });
  const json = await res.json();
  if (!json.success) {
    throw new Error(json.error || 'Failed to submit comment');
  }
  return json.data;
}
