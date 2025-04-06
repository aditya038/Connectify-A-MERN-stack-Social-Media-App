
# Connectify - A MERN Stack Social Media App

Connectify is a full-fledged social media platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides a clean, interactive, and dynamic user experience similar to popular social platforms, enabling users to connect, share, and interact with friends online.

## Demo

> Repository: [Connectify GitHub Repo](https://github.com/aditya038/Connectify-A-MERN-stack-Social-Media-App)

---

## Features

### Authentication & Authorization
- Secure Signup & Login using JWT
- Password hashing with bcrypt
- Protected Routes for logged-in users only

### User Profile
- View & Edit Profile
- Upload & Update Profile & Cover Picture
- Follow / Unfollow Users
- View Followers & Following List

### Posts
- Create, Update & Delete Posts
- Like / Unlike Posts
- Comment on Posts
- Real-time Feed updates
- Timeline for each user

### Chat / Messaging
- Real-time Chat with Socket.io
- Online / Offline User Indicator
- 1-to-1 Conversations
- Instant Messaging with Live Status

### Search & Explore
- Search Users
- Explore Latest Posts

### Notifications (Optional / Planned)
- Like, Comment, Follow Notifications (Upcoming)

---

## Tech Stack

| Technology | Usage |
|------------|-------|
| MongoDB    | Database |
| Express.js | Backend Framework |
| React.js   | Frontend Framework |
| Node.js    | Backend Runtime |
| Redux      | State Management |
| Socket.io  | Real-time Communication |
| JWT        | Authentication |
| Cloudinary | Image Uploads |
| bcrypt.js  | Password Hashing |

---

## Folder Structure

```
Connectify/
├── client/        → React Frontend
├── server/        → Node.js + Express Backend
│   ├── models/    → MongoDB Models
│   ├── routes/    → API Routes
│   ├── controllers/ → Business Logic
│   └── config/    → Database & Other Configs
└── README.md
```

---

## Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/aditya038/Connectify-A-MERN-stack-Social-Media-App.git
cd Connectify-A-MERN-stack-Social-Media-App
```

### 2. Setup Backend (server)
```bash
cd server
npm install
```

Create `.env` file in `/server` folder:
```
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Start Backend:
```bash
npm start
```

### 3. Setup Frontend (client)
```bash
cd client
npm install
npm start
```

App runs at: `http://localhost:3000`

---

## Contact

Made by [Aditya Chauhan](https://github.com/aditya038)
