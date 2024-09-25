---

# MERN Stack Social Media App

A full-stack social media application using the **MERN stack** (MongoDB, Express, React, Node.js), with **Socket.io** for real-time chat and **Chakra UI** for a modern and responsive interface. This app features post creation, user interaction, dark/light mode, and real-time messaging.

[![Video Tutorial](https://img.shields.io/badge/YouTube-Video%20Tutorial-red?style=for-the-badge)](https://youtu.be/G4V4xO9wyD8)

## 🚀 Features

- 🌟 **Tech Stack**: MERN + Socket.io + Chakra UI
- 🎃 **Authentication & Authorization**: Secure JWT-based system
- 📝 **Post Management**: Create, delete, like/unlike posts
- 💬 **Comments**: Comment on posts
- 👥 **Follow/Unfollow**: Social networking features
- ❄️ **Account Freezing**: Freeze your account
- 🌓 **Dark/Light Mode**: Theme switcher
- 📱 **Responsive Design**: Mobile-friendly
- 💬 **Real-Time Chat**: Includes image sharing
- 👀 **Message Status**: Seen/unseen indicators
- 🔊 **Notification Sounds**: Alerts for messages
- ⭐ **Free Deployment**: Ready for free hosting

---

## ⚙️ Setup Guide

### 1. Clone the repository

```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup `.env` File

Create a `.env` file in the project root and fill in the following variables:

```bash
PORT=...
MONGO_URI=...
JWT_SECRET=...
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```

- **PORT**: Server port (e.g., 5000)
- **MONGO_URI**: MongoDB connection URI
- **JWT_SECRET**: Secret key for JWT
- **CLOUDINARY**: Credentials for image hosting (Cloudinary)

### 4. Build the App

```bash
npm run build
```

### 5. Start the App

```bash
npm start
```

---

## 🛠 Development Mode

To run the app in development mode:

```bash
npm run dev
```

This will start both the client and server with hot-reloading using **concurrently**.

---

## 🛠 Tech Stack

- **Frontend**: React, Chakra UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Real-Time**: Socket.io for chat and notifications
- **Authentication**: JWT for token-based authentication
- **Image Uploads**: Cloudinary for handling media files
- **Deployment**: Ready for platforms like Heroku or Vercel

---

## ✨ Deployment

Deploy the app for free on platforms like **Heroku**, **Vercel**, or **Netlify**. Be sure to set your environment variables for deployment.

---

### Contribution

Feel free to contribute to the project by submitting issues or pull requests.

---
