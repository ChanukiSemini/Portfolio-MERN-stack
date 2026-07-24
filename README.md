# Personal Portfolio Website (MERN Stack)
ICT 2022 — Full Stack Development, Practical Guide 09 / Assignment 02

A personal portfolio website built with **MongoDB, Express, React, and Node.js**.

- **Home** — Intro/hero section with profile photo and CTA buttons
- **About** — Education, skills list, and contact details
- **Projects** — Cards pulled dynamically from local MongoDB
- **Admin** — Add, edit, and delete projects (stored in MongoDB)

```
mern-portfolio/
├── client/     React front-end (Vite)
└── server/     Express + MongoDB back-end API
```

---

## 1. Prerequisites

Make sure the following are installed:
1. **Node.js** (v18 or later) — https://nodejs.org
2. **MongoDB Community Server** & **MongoDB Compass** (for local database) — https://www.mongodb.com/try/download/community

---

## 2. Run the project locally

### 2.1 Configure Environment Variables
1. Go to the `server/` directory.
2. Copy the `.env.example` file and rename it to `.env`.
3. Verify that your `.env` contains the local MongoDB URI:
   ```env
   MONGO_URI=mongodb://localhost:27017/portfolioDB
   PORT=5000
   ```

---

### 2.2 Install Dependencies
From the **root folder** (`mern-portfolio`), install dependencies for both the frontend and backend in one command:
```bash
npm run install-all
```

---

### 2.3 Run the Application
You need to run both the backend server and the frontend client:

1. **Start the Backend Server**:
   In your terminal, run:
   ```bash
   npm run server
   ```
   *(You should see: `Server running on port 5000` and `MongoDB connected successfully`)*

2. **Start the Frontend Client**:
   Open a **second terminal window** in the root folder and run:
   ```bash
   npm run client
   ```
   *(This starts the Vite dev server. Open the local address in your browser, e.g., http://localhost:5173)*

---

## 3. Features & CRUD Actions

1. **Home Page**: Showcases your profile description and photo (`client/public/my-photo.png`).
2. **Projects Page**: Automatically pulls project entries from the local MongoDB instance.
3. **Admin Page**: Add a project, edit text/links, or delete a project. View your MongoDB Compass instance (under `portfolioDB`) to see updates happening in real-time.
