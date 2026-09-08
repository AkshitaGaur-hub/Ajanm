import { DatabaseSync } from 'node:sqlite';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'ajnam.sqlite');
const db = new DatabaseSync(dbPath);

// Enable WAL mode for better concurrency
try {
  db.exec('PRAGMA journal_mode = WAL;');
  db.exec('PRAGMA foreign_keys = ON;');
} catch (e) {
  console.warn('Notice: PRAGMA setting error (non-fatal):', e.message);
}

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS blogs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    summary TEXT,
    content TEXT NOT NULL,
    image TEXT,
    category TEXT DEFAULT 'Wellness',
    author TEXT DEFAULT 'Ajnam Community',
    likes_count INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS blog_likes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    blog_id INTEGER NOT NULL,
    client_id TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(blog_id, client_id),
    FOREIGN KEY (blog_id) REFERENCES blogs(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    blog_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    website TEXT,
    comment TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (blog_id) REFERENCES blogs(id) ON DELETE CASCADE
  );
`);

// Initial 5 blogs with their complete structured content from Ajnam
const initialBlogsData = [
  {
    id: 1,
    title: 'Yoga for Hormonal Disorders: Balancing Body Chemistry Naturally',
    category: 'Hormonal Health',
    author: 'Dr. Ananya Sharma',
    summary: 'Hormonal disorders affect countless individuals globally. Learn how gentle yoga practices, pranayama, and meditation help regulate and balance hormones naturally.',
    image: 'hormon',
    likes_count: 12,
    content: JSON.stringify({
      para1: 'Hormonal disorders affect countless individuals globally, manifesting as thyroid issues, diabetes, adrenal fatigue, and reproductive conditions like polycystic ovary syndrome (PCOS) and endometriosis. These imbalances can disrupt daily life, causing symptoms from fatigue and weight fluctuation to severe mood swings and infertility. Traditional treatments often include medication or invasive procedures, but yoga offers a natural, gentle alternative to help regulate and balance hormones.',
      title1: 'Understanding Hormonal Disorders',
      para2: "Hormones are the body's chemical messengers, influencing nearly every physiological process, including growth, metabolism, fertility, and mood. When hormones are out of balance, it can lead to significant health issues. Hormonal disorders can stem from various causes, including stress, poor diet, environmental toxins, and genetics.",
      title2: 'How Yoga Helps in Hormonal Regulation',
      subheading1: '1. Reduces Stress: ',
      subpara1: "Many hormonal disorders are exacerbated by stress, particularly those related to the adrenal glands and reproductive system. Yoga's calming practices, like meditation and pranayama (breath work), reduce cortisol levels, which may help restore hormone balance.",
      subheading2: '2. Stimulates Gland Function: ',
      subpara2: "Specific yoga poses can stimulate the glands responsible for hormone production. For instance, poses that involve the neck, such as Shoulder Stand and Fish Pose, can help regulate thyroid hormones, while twists and forward bends can improve liver function and aid detoxification.",
      subheading3: '3. Improves Metabolism: ',
      subpara3: "Yoga helps in boosting the metabolism, which is crucial for balancing hormones. Active forms of yoga increase heart rate and improve blood circulation, aiding in the efficient use of insulin and glucose.",
      subheading4: '4. Supports Reproductive Health: ',
      subpara4: "Poses like Cobbler’s Pose and Camel Pose increase blood flow to the pelvic region, supporting better reproductive health and balancing sex hormones.",
      subheading5: '5. Encourages Healthy Lifestyle Choices: ',
      subpara5: "Regular yoga practice fosters mindfulness, which can lead to healthier eating and lifestyle choices that support hormonal balance.",
      title3: "Yoga Practices for Hormonal Health",
      subh1: "- Asanas: ",
      subp1: "Incorporate poses that target glandular function and support hormone balance. For thyroid health, try incorporating poses like the Plow Pose and Bridge Pose. For adrenal health, focus on restorative poses like Child’s Pose and Legs-Up-The-Wall.",
      subh2: "- Pranayama: ",
      subp2: " Breathing exercises can profoundly impact the endocrine system. Techniques like Bhramari Pranayama (Bee Breath) and Kapalabhati (Skull Shining Breath) can help reset the body's stress response and support overall endocrine function.",
      subh3: "- Meditation and Relaxation: ",
      subp3: "Daily meditation can help manage stress hormones like cortisol and adrenaline. Yoga Nidra, a guided relaxation, can be particularly beneficial for deep rest and hormonal balance.",
      title4: "Integrating Yoga into Daily Life",
      para3: "To effectively manage hormonal disorders with yoga, consistency is key. A daily practice that includes a mix of poses, breathing exercises, and relaxation or meditation can provide the best results. It’s also important to tune into the body's responses and adjust the practice as needed, possibly with the guidance of a healthcare provider or a yoga therapist specializing in hormonal health.",
      conclusion: "Conclusion",
      conp: "Yoga provides a holistic approach to managing hormonal disorders, offering physical, mental, and emotional benefits. By incorporating specific asanas, breathing techniques, and meditative practices into your daily routine, you can naturally help restore hormonal balance and improve your overall well-being."
    })
  },
  {
    id: 2,
    title: 'Yoga for Sleep Disorders: A Natural Solution for Better Rest',
    category: 'Sleep & Rest',
    author: 'Vikram Joshi',
    summary: 'Sleep disorders like insomnia and restless nights can severely compromise immunity and well-being. Explore how yoga restores the nervous system for deep, restful sleep.',
    image: 'sleep',
    likes_count: 8,
    content: JSON.stringify({
      para1: 'Sleep disorders, which include issues like insomnia, sleep apnea, restless leg syndrome, and irregular sleep-wake cycles, affect millions of people worldwide. These issues can significantly impact overall health, reducing quality of life and increasing the risk of various health problems. Yoga, with its holistic approach to health and well-being, offers a gentle yet effective means to improve sleep quality and resolve sleep disturbances.',
      title1: 'Understanding Sleep Disorders',
      para2: "Sleep is critical for physical health and effective brain function. However, many people struggle with sleep for various reasons including stress, anxiety, physical health issues, and environmental factors. Poor sleep can lead to a weakened immune system, weight gain, depression, and increased anxiety, making it a vital aspect of health to address.",
      title2: 'How Yoga Can Help',
      subheading1: '1. Reduces Stress and Anxiety: ',
      subpara1: "Yoga helps to alleviate stress and anxiety, which are common causes of sleep disorders. Through mindful breathing and relaxation techniques, yoga can calm the nervous system, making it easier to fall asleep and stay asleep.",
      subheading2: '2. Improves Physical Health: ',
      subpara2: "Various yoga poses can help alleviate physical pain that might be interfering with sleep. For example, gentle stretching can reduce muscle tension and discomfort, which can prevent restful sleep.",
      subheading3: '3. Balances the Nervous System: ',
      subpara3: "Yoga promotes balance in the nervous system through its influence on the parasympathetic nervous system (the rest and digest system), which helps the body relax and prepare for sleep.",
      subheading4: '4. Encourages Healthy Routines: ',
      subpara4: " Practicing yoga can help create a routine around bedtime, signaling to the body that it's time to wind down and prepare for sleep. Incorporating yoga into your evening routine can set the stage for a calm and restful night.",
      title3: "Yoga Practices for Better Sleep",
      subh1: "- Gentle Asanas: ",
      subp1: "Include gentle yoga poses in the evening to relax the body. Poses like Forward Bend, Cat-Cow, and Child’s Pose can be particularly effective.",
      subh2: "- Pranayama: ",
      subp2: "Breathing exercises, or Pranayama, such as the 4-7-8 breathing technique or Anuloma Viloma (alternate nostril breathing), are excellent for calming the mind and preparing the body for sleep.",
      subh3: "- Yoga Nidra: ",
      subp3: "Known as yogic sleep, this guided meditation can be performed before bed to deeply relax each part of the body and calm the mind, enhancing sleep quality.",
      subh4: "- Meditation: ",
      subp4: "Meditation helps to quiet the mind and can be a powerful tool for combating insomnia. Even a few minutes can make a significant difference.",
      title4: "Integrating Yoga into Your Nightly Routine",
      para3: "To benefit from yoga for sleep disorders, consistency is key. A simple, regular routine can be more effective than a sporadic but intense practice. Start with as little as 10 minutes near bedtime and gradually increase as needed. The goal is to relax the body and mind to prepare for sleep, so focus on gentle and soothing practices.",
      conclusion: "Conclusion",
      conp: "Yoga offers a holistic and accessible approach to combating sleep disorders. By integrating yoga practices into your evening routine, you can improve your sleep quality and, by extension, your overall health and well-being. Embrace yoga as a peaceful journey to better nights and brighter days."
    })
  },
  {
    id: 3,
    title: 'Yoga as a Treatment for Lifestyle Disorders',
    category: 'Lifestyle & Healing',
    author: 'Pooja Mehta',
    summary: 'Combat hypertension, sedentary stress, and obesity through the ancient yet modern practice of yoga, mindful breathing, and wholesome habits.',
    image: 'life',
    likes_count: 15,
    content: JSON.stringify({
      para1: "In the modern world, where the pace of life is continually accelerating, lifestyle disorders such as stress, obesity, diabetes, and cardiovascular diseases have become increasingly common. These conditions are primarily influenced by daily habits and choices, particularly physical inactivity, poor diet, stress, and improper sleep patterns. However, yoga, an ancient practice rooted in Indian philosophy, offers a holistic approach to combating these disorders by promoting a balanced lifestyle and improving overall health.",
      title1: 'Understanding Lifestyle Disorders',
      para2: "Lifestyle disorders are ailments that stem from habitual behaviors which negatively impact our health. These include stress, obesity, poor metabolic balance, and sleep loss.",
      title2: 'How Yoga Addresses Lifestyle Disorders',
      subheading1: '1. Stress Reduction: ',
      subpara1: "Yoga incorporates various relaxation techniques, including deep breathing exercises and meditation, which can significantly lower stress levels. Techniques like Pranayama (breathing exercises) calm the mind and reduce the physiological effects of stress by slowing down the heart rate and lowering blood pressure.",
      subheading2: '2. Weight Management: ',
      subpara2: " Yoga can be an effective tool for weight loss and management. Regular practice of dynamic yoga styles, such as Vinyasa or Ashtanga, burns calories, while even gentler forms improve digestion and metabolism which aid in weight control.",
      subheading3: '3. Improved Sleep Patterns: ',
      subpara3: "Yoga helps to alleviate insomnia by relaxing the nervous system. Practices like Yoga Nidra (yogic sleep) promote deep rest and improve the quality of sleep.",
      subheading4: '4. Enhanced Physical Fitness: ',
      subpara4: "Yoga improves flexibility, strengthens muscles, and boosts stamina. This not only helps in reducing the risk of injuries but also alleviates chronic pain conditions associated with a sedentary lifestyle.",
      subheading5: '5. Promotion of Mindfulness: ',
      subpara5: "The meditative aspect of yoga encourages mindfulness, which can lead to better choices in terms of diet and lifestyle, fostering overall health.",
      title3: "Implementing Yoga in Daily Life",
      subh1: "- Consistency is Key: ",
      subp1: "Make yoga a regular part of your daily schedule. Even 15-20 minutes can be beneficial.",
      subh2: "- Choose the Right Style: ",
      subp2: "Different styles of yoga cater to different needs—Hatha yoga is great for beginners due to its slower pace, while Kundalini yoga focuses more on spiritual and physical energy.",
      subh3: "- Mindful Eating: ",
      subp3: "Combine your yoga practice with mindful eating to enhance digestive health and manage weight.",
      title4: "Meditation and Breathing: ",
      para3: "Dedicate time for meditation and pranayama to combat stress and enhance mental clarity.",
      conclusion: "Conclusion",
      conp: "Yoga offers a viable solution to the challenges posed by lifestyle disorders, addressing not just the physical symptoms but also the mental and emotional sides of these conditions. By adopting yoga as a holistic treatment, individuals can lead healthier lives, free from the ailments brought on by modern lifestyle choices."
    })
  },
  {
    id: 4,
    title: 'Reverse Aging with Yoga: A Holistic Approach to Staying Young',
    category: 'Longevity',
    author: 'Dr. Rohan Sen',
    summary: 'Discover how daily yoga, cellular detoxification, and conscious breathwork preserve elasticity, mental sharpness, and youthfulness naturally.',
    image: 'reverse',
    likes_count: 21,
    content: JSON.stringify({
      para1: 'Aging is an inevitable process, but how we age is profoundly influenced by our lifestyle choices. While various products and procedures promise the secret to eternal youth, yoga offers a holistic and sustainable approach to not only slowing down the aging process but also reversing some of its effects. Through a combination of physical postures, breathing exercises, and meditation, yoga nurtures the body, mind, and spirit, offering a blueprint for aging gracefully and healthily.',
      title1: 'The Science Behind Yoga and Anti-Aging',
      subheading1: '1. Cellular Health: ',
      subpara1: "Yoga helps in reducing oxidative stress in the body, which is a major contributor to aging at the cellular level. Practices like deep breathing and meditation enhance the body’s ability to detoxify, promoting cell regeneration and longevity.",
      subheading2: '2. Hormonal Balance: ',
      subpara2: "Yoga stimulates the glands responsible for hormone production, such as the thyroid and adrenals, balancing hormones that play a critical role in aging, like cortisol and thyroid hormones. Regular practice helps maintain a youthful endocrine system, which can improve skin elasticity, decrease the appearance of wrinkles, and boost vitality.",
      subheading3: '3. Flexibility and Mobility: ',
      subpara3: "As we age, our joints and muscles tend to become stiffer and less flexible, leading to decreased mobility and more pain. Yoga’s asanas (poses) improve flexibility, strengthen muscles, and lubricate joints, reversing the stiffness and immobility associated with aging.",
      subheading4: '4. Mental Acuity: ',
      subpara4: "Yoga involves concentration and mental exercises that can help sharpen the mind and improve cognitive function. Meditation and mindfulness practices enhance mental clarity, memory, and focus, which are often affected by aging.",
      subheading5: '5. Stress Reduction: ',
      subpara5: "Chronic stress accelerates the aging process by affecting physical and mental health. Yoga’s emphasis on relaxation and meditation not only reduces stress but also lowers blood pressure and has a calming effect on the entire body, promoting a youthful state of physical health and mental well-being.",
      title3: "Incorporating Yoga into Your Anti-Aging Regimen",
      subh1: "- Asanas: ",
      subp1: "Focus on poses that promote flexibility, strength, and balance. Poses like the Tree Pose, Warrior series, and Sun Salutations are excellent for building strength and flexibility. Inversions such as the Headstand or Shoulderstand are particularly beneficial for improving circulation and detoxifying the body.",
      subh2: "- Pranayama (Breath Control): ",
      subp2: "Include breathing exercises like Kapalabhati (Skull Shining Breath) and Anulom Vilom (Alternate Nostril Breathing) to improve respiratory capacity and energize the body.",
      subh3: "- Meditation: ",
      subp3: "Spend time in meditation to reduce stress and enhance mental clarity. Even a few minutes daily can have profound anti-aging effects.",
      title4: "Diet and Lifestyle: ",
      para3: "Complement your yoga practice with a balanced diet rich in antioxidants and hydrating fluids. Maintain a healthy lifestyle that includes sufficient sleep and minimal stress.",
      conclusion: "Conclusion",
      conp: "Yoga offers more than just physical benefits; it is a lifestyle choice that can significantly counteract the aging process. By integrating yoga into your daily life, you can maintain vitality, reduce the risk of age-related diseases, and enjoy a higher quality of life as you age. Embrace yoga as your fountain of youth—a tool to keep your body young, your mind sharp, and your spirit calm."
    })
  },
  {
    id: 5,
    title: 'The Importance of Spine Health and How Yoga Can Keep It Healthy',
    category: 'Spine & Posture',
    author: 'Aarav Patel',
    summary: 'The human spine supports every movement we make. Learn effective asanas to align vertebrae, relieve chronic stiffness, and keep your back resilient.',
    image: 'spine',
    likes_count: 19,
    content: JSON.stringify({
      para1: 'The human spine is a crucial yet often overlooked component of overall health and well-being. Acting as the main structural support for the body, it protects the spinal cord, supports the head, and provides flexibility and mobility. Unfortunately, due to modern lifestyle habits such as prolonged sitting and poor posture, spinal health issues are increasingly common. This is where yoga, an ancient practice with modern relevance, steps in as an effective tool to promote spine health and prevent related disorders.',
      title1: 'Understanding Spine Health',
      para2: "The spine is a complex structure made up of bones, muscles, ligaments, and nerves. Its health is essential for performing everyday activities painlessly and efficiently. When the spine is misaligned or under stress, it can lead to a host of issues, including back pain, neck pain, and reduced mobility. Over time, these conditions can significantly diminish quality of life and increase dependency on medications or surgeries.",
      title2: 'The Role of Yoga in Promoting Spine Health',
      subheading1: '1. Improves Flexibility and Balance: ',
      subpara1: "Many yoga poses, or asanas, are designed to increase the flexibility of the spine. Poses like the Cobra, Cat-Cow, and Child’s Pose gently stretch the spinal muscles, improving elasticity and range of motion. This enhanced flexibility helps counteract the stiffness associated with sedentary lifestyles.",
      subheading2: '2. Strengthens Back Muscles: ',
      subpara2: "Yoga includes a variety of postures that strengthen the muscles surrounding the spine. Stronger muscles support the spine more effectively and reduce the likelihood of injuries and chronic pain. Postures such as Plank, Locust Pose, and Bridge Pose focus on building strength in the lower back, upper back, and core.",
      subheading3: '3. Promotes Proper Alignment: ',
      subpara3: "Regular practice of yoga helps in aligning the spine correctly, thus promoting better posture. This alignment reduces unnecessary strain on the spine by distributing body weight evenly. Asanas like Mountain Pose and Warrior Pose teach the body to align itself naturally and correctly.",
      subheading4: '4. Encourages Mindfulness and Stress Reduction: ',
      subpara4: "Stress is a common contributor to spinal problems like muscle tension and spasms. Yoga’s meditative practices encourage mindfulness, which reduces stress and its physical impacts on the spine. Through controlled breathing exercises (pranayama), yoga helps in relaxing the mind and body, allowing the spine to remain supple and less prone to injury.",
      subheading5: '5. Increases Awareness of Body Mechanics: ',
      subpara5: "Yoga enhances body awareness, helping individuals recognize the habits that may be detrimental to their spine health, such as poor posture or incorrect lifting techniques. This increased awareness can lead to better habits in daily activities, reducing the risk of spine-related problems.",
      title3: "Implementing Yoga into Daily Life",
      para3: "Incorporating yoga into your daily routine can be simple. Start with a few basic poses, and gradually include more as you become comfortable. It's important to listen to your body and avoid any movements that cause pain. For those new to yoga, joining a class can be very beneficial, as a knowledgeable instructor can provide guidance and modifications to suit your individual needs.",
      conclusion: "Conclusion",
      conp: "In conclusion, maintaining spinal health is essential for a vibrant and active life. Yoga offers a powerful way to support the spine through its combination of stretching, strengthening, and stress-reduction techniques. By making yoga a regular part of your lifestyle, you can enhance your spine health and overall well-being."
    })
  }
];

// Seed initial blogs if database is empty
const checkBlogsCount = db.prepare('SELECT COUNT(*) as count FROM blogs').get();
if (Number(checkBlogsCount.count) === 0) {
  const insertBlog = db.prepare(`
    INSERT INTO blogs (id, title, summary, content, image, category, author, likes_count)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  for (const b of initialBlogsData) {
    insertBlog.run(b.id, b.title, b.summary, b.content, b.image, b.category, b.author, b.likes_count);
  }

  // Seed initial sample comments
  const insertComment = db.prepare(`
    INSERT INTO comments (blog_id, name, email, website, comment, created_at)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  insertComment.run(1, 'Neha Gupta', 'neha@example.com', '', 'Pranayama and regular yoga sessions have genuinely helped ease my hormonal fluctuations. Such a detailed and motivating article!', '2026-03-01 14:20:00');
  insertComment.run(2, 'Rahul Verma', 'rahul.v@example.com', 'https://rahulwellness.org', 'Doing 10 minutes of gentle forward bends and deep breathing before bed has completely transformed my sleep routine.', '2026-03-02 09:15:00');
  insertComment.run(5, 'Priya Sharma', 'priya.s@example.com', '', 'The Cat-Cow and Bridge pose recommendations significantly reduced my lower back stiffness after long desk hours. Thank you Ajnam!', '2026-03-03 16:45:00');

  console.log('Seeded initial blogs and comments into SQLite database.');
}

// Data Access API
export const blogDb = {
  // Get all blogs with likes count and comments count, plus whether clientId has liked it
  getAllBlogs(clientId = '') {
    const blogsQuery = db.prepare(`
      SELECT 
        b.id,
        b.title,
        b.summary,
        b.image,
        b.category,
        b.author,
        b.likes_count,
        b.created_at,
        (SELECT COUNT(*) FROM comments c WHERE c.blog_id = b.id) AS comments_count,
        (SELECT COUNT(*) FROM blog_likes bl WHERE bl.blog_id = b.id AND bl.client_id = ?) AS user_liked
      FROM blogs b
      ORDER BY b.id DESC
    `);
    const rows = blogsQuery.all(clientId);
    return rows.map((r) => ({
      id: Number(r.id),
      title: r.title,
      summary: r.summary,
      image: r.image,
      category: r.category,
      author: r.author,
      count: Number(r.likes_count || 0),
      commentsCount: Number(r.comments_count || 0),
      liked: Boolean(r.user_liked > 0),
      createdAt: r.created_at
    }));
  },

  // Get a single blog by ID
  getBlogById(id, clientId = '') {
    const blogQuery = db.prepare(`
      SELECT 
        b.*,
        (SELECT COUNT(*) FROM comments c WHERE c.blog_id = b.id) AS comments_count,
        (SELECT COUNT(*) FROM blog_likes bl WHERE bl.blog_id = b.id AND bl.client_id = ?) AS user_liked
      FROM blogs b
      WHERE b.id = ?
    `);
    const r = blogQuery.get(clientId, Number(id));
    if (!r) return null;

    // Get list of all available blog IDs for next/previous navigation
    const allIdsQuery = db.prepare('SELECT id FROM blogs ORDER BY id ASC');
    const allIds = allIdsQuery.all().map((item) => Number(item.id));

    return {
      id: Number(r.id),
      title: r.title,
      summary: r.summary,
      content: r.content,
      image: r.image,
      category: r.category,
      author: r.author,
      count: Number(r.likes_count || 0),
      commentsCount: Number(r.comments_count || 0),
      liked: Boolean(r.user_liked > 0),
      createdAt: r.created_at,
      allIds
    };
  },

  // Create a new blog
  createBlog({ title, summary, content, category, author, image }) {
    const insert = db.prepare(`
      INSERT INTO blogs (title, summary, content, category, author, image, likes_count)
      VALUES (?, ?, ?, ?, ?, ?, 0)
    `);
    const result = insert.run(
      title.trim(),
      summary ? summary.trim() : '',
      content.trim(),
      category ? category.trim() : 'Wellness',
      author ? author.trim() : 'Ajnam Community Member',
      image ? image.trim() : ''
    );
    const newId = Number(result.lastInsertRowid);
    return this.getBlogById(newId);
  },

  // Toggle like for a blog
  toggleLike(blogId, clientId) {
    if (!clientId) {
      throw new Error('clientId is required to like a blog');
    }

    const checkLiked = db.prepare(`
      SELECT id FROM blog_likes WHERE blog_id = ? AND client_id = ?
    `).get(Number(blogId), clientId);

    if (checkLiked) {
      // Unlike
      db.prepare('DELETE FROM blog_likes WHERE blog_id = ? AND client_id = ?').run(Number(blogId), clientId);
      db.prepare('UPDATE blogs SET likes_count = MAX(0, likes_count - 1) WHERE id = ?').run(Number(blogId));
      const updated = db.prepare('SELECT likes_count FROM blogs WHERE id = ?').get(Number(blogId));
      return {
        liked: false,
        count: Number(updated?.likes_count || 0)
      };
    } else {
      // Like
      db.prepare('INSERT INTO blog_likes (blog_id, client_id) VALUES (?, ?)').run(Number(blogId), clientId);
      db.prepare('UPDATE blogs SET likes_count = likes_count + 1 WHERE id = ?').run(Number(blogId));
      const updated = db.prepare('SELECT likes_count FROM blogs WHERE id = ?').get(Number(blogId));
      return {
        liked: true,
        count: Number(updated?.likes_count || 0)
      };
    }
  },

  // Get comments for a blog
  getComments(blogId) {
    const query = db.prepare(`
      SELECT id, blog_id, name, email, website, comment, created_at
      FROM comments
      WHERE blog_id = ?
      ORDER BY id DESC
    `);
    const rows = query.all(Number(blogId));
    return rows.map((c) => ({
      id: Number(c.id),
      blogId: Number(c.blog_id),
      name: c.name,
      email: c.email,
      website: c.website,
      comment: c.comment,
      createdAt: c.created_at
    }));
  },

  // Add a comment to a blog
  addComment({ blogId, name, email, website, comment }) {
    if (!name || !email || !comment) {
      throw new Error('Name, email, and comment are required.');
    }
    const insert = db.prepare(`
      INSERT INTO comments (blog_id, name, email, website, comment)
      VALUES (?, ?, ?, ?, ?)
    `);
    const result = insert.run(
      Number(blogId),
      name.trim(),
      email.trim(),
      website ? website.trim() : '',
      comment.trim()
    );
    const newCommentId = Number(result.lastInsertRowid);
    const commentRow = db.prepare('SELECT * FROM comments WHERE id = ?').get(newCommentId);
    return {
      id: Number(commentRow.id),
      blogId: Number(commentRow.blog_id),
      name: commentRow.name,
      email: commentRow.email,
      website: commentRow.website,
      comment: commentRow.comment,
      createdAt: commentRow.created_at
    };
  }
};
