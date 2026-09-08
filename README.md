# 🧘 AJANM — Holistic Yoga & Wellness Platform

<div align="center">

![Ajanm Wellness Platform](public/Ajnam.png)

[![React](https://img.shields.io/badge/React-19.2.6-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0.13-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Express](https://img.shields.io/badge/Express-5.2.1-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![SQLite](https://img.shields.io/badge/SQLite-ACID_Engine-003B57?style=for-the-badge&logo=sqlite&logoColor=white)](https://www.sqlite.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

**Empowering balanced living through authentic Yogic wisdom, lifestyle therapy, and real-time community engagement.**

[Explore Features](#-key-features) • [System Architecture](#-system-architecture) • [ER Diagram](#-entity-relationship-er-diagram) • [API Reference](#-api-endpoints) • [Quickstart](#-getting-started)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [System Architecture](#-system-architecture)
- [Workflows & System Logic](#-workflows--system-logic)
- [Entity-Relationship (ER) Diagram](#-entity-relationship-er-diagram)
- [API Reference](#-api-reference)
- [Project Directory Structure](#-project-directory-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Contributing](#-contributing)

---

## 🌿 Overview

**AJANM** is a modern full-stack web platform dedicated to holistic well-being, therapeutic yoga programs, and health transformation. It bridges traditional yogic wisdom with contemporary wellness practices, providing tailored programs for hormonal regulation, sleep enhancement, spinal care, and healthy aging.

The platform includes a real-time database-driven **Community & Insights Blog** enabling readers worldwide to discover wellness articles, interact via persistent likes, participate in community discussions, and contribute their own articles.

---

## ✨ Key Features

### 💖 Real Database Persistent Likes
- **Global Visibility**: Every like is stored and synced in a real SQLite database; like counts update in real-time across all visitors and devices.
- **Client Identity Tracking**: Uses persistent client identifiers to guarantee authentic, one-vote-per-user like/unlike toggling with instant optimistic UI feedback.

### 💬 Interactive Community Discussion & Comments
- **Real-Time Comment Threads**: Visitors can share personal stories, questions, and insights.
- **Smart Captcha Protection**: Dynamic arithmetic captcha prevents automated spam submissions.
- **Memory Convenience**: Option to securely store commenter name and email in local storage for seamless subsequent replies.
- **Rich Display**: Shows custom commenter avatars, formatted dates, and website hyperlinks.

### ✍️ Community Blog Authoring (`/add-blog`)
- **Self-Service Publishing**: Users and wellness practitioners can compose and publish new articles directly to the database.
- **Curated Asset Presets**: Quick-select presets for Hormones, Sleep, Lifestyle, Aging, Spine, Meditation, Pranayama, and Nutrition, or provide a custom image URL.
- **One-Click Template**: Pre-formatted guide template to help authors structure introductions, health connections, asana routines, and conclusions.

### 📱 Responsive & Accessible UI
- Designed with brand identity tokens (`#e67e22` primary theme, warm typography, and smooth card elevations).
- Fully responsive across mobile, tablet, laptop, and ultra-wide displays.

---

## 🏛 System Architecture

The application adopts a unified full-stack architecture where Vite's development server integrates an Express API middleware, connecting directly to Node.js's native SQLite database engine.

```mermaid
graph TD
    subgraph Client ["🖥️ Client Tier (React 19 + Tailwind CSS)"]
        UI_Home["Home & Programs (/"]
        UI_Blogs["Blog Feed (/blogs)"]
        UI_Detail["Blog Details (/blogs_desc/:id)"]
        UI_Add["Publish Blog (/add-blog)"]
        API_Client["API Service (src/services/api.js)"]
        
        UI_Blogs --> API_Client
        UI_Detail --> API_Client
        UI_Add --> API_Client
    end

    subgraph Server ["⚙️ Server Tier (Node.js + Express)"]
        ViteDev["Vite Dev Server (Port 5173)"]
        Standalone["Express Server (Port 5000)"]
        Router["Express Router (/api)"]
        Middleware["ajnamApiPlugin (server/middleware.js)"]
        
        ViteDev --> Middleware --> Router
        Standalone --> Router
    end

    subgraph Database ["💾 Persistence Tier (SQLite WAL Mode)"]
        DB_Engine["node:sqlite DatabaseSync"]
        DB_File[("server/data/ajnam.sqlite")]
        
        DB_Engine <--> DB_File
    end

    API_Client -->|"HTTP /api/blogs*"| Router
    Router -->|"CRUD Transactions"| DB_Engine
```

---

## 🔄 Workflows & System Logic

### 1. Like Toggle Workflow

```mermaid
sequenceDiagram
    autonumber
    actor User as 👤 Reader
    participant Frontend as 💻 React App
    participant API as 🌐 Express API (/api/blogs/:id/like)
    participant DB as 🗄️ SQLite Database

    User->>Frontend: Clicks Heart Icon
    Frontend->>Frontend: Optimistic UI Update (Immediate visual feedback)
    Frontend->>API: POST { clientId: "client_xxx" }
    
    API->>DB: SELECT * FROM blog_likes WHERE blog_id=? AND client_id=?
    alt User has already liked
        API->>DB: DELETE FROM blog_likes WHERE blog_id=? AND client_id=?
        API->>DB: UPDATE blogs SET likes_count = MAX(0, likes_count - 1) WHERE id=?
        DB-->>API: Returns updated likes_count
        API-->>Frontend: { success: true, liked: false, count: N }
    else User has not liked yet
        API->>DB: INSERT INTO blog_likes (blog_id, client_id) VALUES (?, ?)
        API->>DB: UPDATE blogs SET likes_count = likes_count + 1 WHERE id=?
        DB-->>API: Returns updated likes_count
        API-->>Frontend: { success: true, liked: true, count: N+1 }
    end
    
    Frontend->>User: Syncs exact state with Database
```

---

### 2. Comment Posting & Validation Workflow

```mermaid
flowchart TD
    Start([User Fills Comment Form]) --> CheckFields{Name, Email &<br/>Comment present?}
    CheckFields -- No --> ShowErr1[Show Error: Fill required fields]
    CheckFields -- Yes --> CheckCaptcha{Math Captcha<br/>Correct?}
    CheckCaptcha -- No --> ShowErr2[Show Error: Incorrect arithmetic answer]
    CheckCaptcha -- Yes --> SendAPI[POST /api/blogs/:id/comments]
    SendAPI --> DBInsert[(Insert into comments table)]
    DBInsert --> Success[Return 201 Created Comment Object]
    Success --> UpdateUI[Prepend comment to discussion list & Increment counter]
    UpdateUI --> End([Display Green Success Alert])
```

---

### 3. Article Authoring & Publishing Workflow

```mermaid
flowchart LR
    A[Author opens /add-blog] --> B[Enter Title, Category & Content]
    B --> C[Select Curated Preset or Enter URL]
    C --> D[Solve Dynamic Captcha Challenge]
    D --> E[Submit Form]
    E --> F[(Save in SQLite Database)]
    F --> G[Navigate to /blogs_desc/:id]
    G --> H[Article Live for Global Readers]
```

---

## 🗄️ Entity-Relationship (ER) Diagram

The relational model stores blogs, user likes, and comments with cascading foreign-key integrity.

```mermaid
erDiagram
    BLOGS ||--o{ BLOG_LIKES : "receives"
    BLOGS ||--o{ COMMENTS : "has"

    BLOGS {
        INTEGER id PK "Auto Increment"
        TEXT title "Required article headline"
        TEXT summary "Short excerpt / card preview"
        TEXT content "Full article body (Structured or Markdown)"
        TEXT image "Asset identifier or HTTPS URL"
        TEXT category "Yoga, Sleep, Spine, Longevity, etc."
        TEXT author "Contributor / Practitioner name"
        INTEGER likes_count "Cached aggregate like count"
        DATETIME created_at "Publication timestamp"
    }

    BLOG_LIKES {
        INTEGER id PK "Auto Increment"
        INTEGER blog_id FK "References BLOGS(id) ON DELETE CASCADE"
        TEXT client_id "Unique persistent client device identifier"
        DATETIME created_at "Timestamp of like action"
    }

    COMMENTS {
        INTEGER id PK "Auto Increment"
        INTEGER blog_id FK "References BLOGS(id) ON DELETE CASCADE"
        TEXT name "Commenter full name"
        TEXT email "Commenter email (private)"
        TEXT website "Optional personal URL"
        TEXT comment "Comment message content"
        DATETIME created_at "Submission timestamp"
    }
```

---

## 📡 API Reference

All endpoints are served under `/api` and return standardized JSON responses: `{ success: true, data: ... }`.

| Method | Endpoint | Query / Body Parameters | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/blogs` | `?clientId=<id>` *(optional)* | Retrieve all articles, including total likes, comment counts, and client liked status. |
| `GET` | `/api/blogs/:id` | `?clientId=<id>` *(optional)* | Retrieve a single article with content, metadata, like status, and pagination IDs. |
| `POST` | `/api/blogs` | `{ title, summary, content, category, author, image }` | Publish a new wellness article to the database. |
| `POST` | `/api/blogs/:id/like` | `{ clientId: "<id>" }` | Atomically toggle like / unlike status for a visitor. |
| `GET` | `/api/blogs/:id/comments` | *None* | Fetch all comments for an article sorted in descending order (newest first). |
| `POST` | `/api/blogs/:id/comments` | `{ name, email, website, comment }` | Submit a new comment to an article. |

---

## 📁 Project Directory Structure

```text
Ajnam/
├── public/                     # Public static assets & favicon
│   ├── Ajnam.png               # Main project banner
│   ├── logo.png                # Ajanm brand logo
│   └── _redirects              # SPA hosting redirect rules
├── server/                     # Backend API & Database
│   ├── data/                   # SQLite database directory (gitignored)
│   │   └── ajnam.sqlite        # Persistent database file
│   ├── api.js                  # Express API routes (/api/blogs*)
│   ├── db.js                   # SQLite schema, queries & initial seed data
│   ├── middleware.js           # Vite dev-server connect middleware plugin
│   └── server.js               # Standalone production Express server
├── src/
│   ├── assets/                 # Wellness illustrations & blog images
│   │   ├── blogs-image/        # Seed blog cover images
│   │   └── images/             # UI icons, branding & program graphics
│   ├── components/             # Reusable UI & Page components
│   │   ├── Aboutus.jsx         # About us view
│   │   ├── AddBlog.jsx         # New article authoring page
│   │   ├── AjanmApp.jsx        # Mobile app promotional section
│   │   ├── AjanmProgram.jsx    # Holistic programs list
│   │   ├── Blogs.css           # Blog & community styling
│   │   ├── Blogs.jsx           # Real-time blogs grid & like toggles
│   │   ├── Blogs_desc.jsx      # Article detail, likes & comment threads
│   │   ├── Feature.jsx         # Platform features
│   │   ├── Footer.jsx          # App footer
│   │   ├── Navbar.jsx          # Responsive header navigation
│   │   ├── Page.jsx            # Hero section
│   │   ├── Program.jsx         # Program cards
│   │   ├── Table.jsx           # Pricing & comparison table
│   │   └── Terms.jsx           # Terms & conditions
│   ├── services/
│   │   └── api.js              # Client API helper & persistent clientId manager
│   ├── App.css                 # Global CSS overrides
│   ├── App.jsx                 # Route definitions & router setup
│   ├── index.css               # Tailwind CSS imports & CSS variables
│   └── main.jsx                # React root entry point
├── package.json                # Dependencies & script configurations
├── vite.config.js              # Vite configuration with API middleware
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### Demo
- *https://ajanm.netlify.app/*

### Prerequisites
- **Node.js**: `v22.0.0` or higher *(recommended for native `node:sqlite`)*
- **npm**: `v10.0.0` or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AkshitaGaur-hub/Ajanm.git
   cd Ajanm/Ajnam
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the development environment:
   ```bash
   npm run dev
   ```
   *The Vite development server will automatically mount the backend API on `http://localhost:5173`.*

---

## 🛠️ Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts Vite dev server with integrated SQLite API middleware on `http://localhost:5173`. |
| `npm run build` | Compiles and optimizes frontend assets into `dist/`. |
| `npm run preview` | Previews the production build locally. |
| `npm run server` | Starts standalone Express API server on `http://localhost:5000`. |
| `npm run lint` | Lints JavaScript and JSX files using ESLint. |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to open an issue or submit a pull request to help make wellness accessible to everyone.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

<div align="center">
  <sub>Built with ❤️ for health, harmony, and mindfulness.</sub>
</div>
