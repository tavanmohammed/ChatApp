Got it 👍
Here’s an **updated README** that **explicitly includes**:

* 🎨 Theme switching
* 🎥 Video calls
* 🧑‍🎨 Generated avatars

You can **replace your current README** with this version.

---

# 💬 ChatApp – Real-Time Chat & Video Communication App

ChatApp is a full-stack real-time **chat and video communication** application built with **React**, **Node.js**, **Express**, **MongoDB**, and **Stream**.
It supports authentication, real-time messaging, **video calls**, **theme customization**, and **auto-generated user avatars**.

---

## 🚀 Features

* 🔐 User authentication (signup, login, logout)
* 👤 User profiles with **auto-generated avatars**
* 💬 Real-time chat using **Stream Chat**
* 🎥 **1-on-1 video calls** using Stream Video SDK
* 🎨 **Theme switching** (light / dark)
* 🧑‍🤝‍🧑 Friends & chat management
* 🍪 Secure JWT authentication using HTTP-only cookies
* 📦 MongoDB database (local or Atlas)
* ⚡ Modern frontend with React + Vite

---

## 🛠 Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS / DaisyUI
* Axios
* React Query
* Stream Chat React SDK
* Stream Video React SDK

### Backend

* Node.js
* Express
* MongoDB + Mongoose
* JWT Authentication
* Stream Chat Server SDK
* Cookie-based authentication

---

## 📂 Project Structure

```
ChatApp/
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── store/
│   ├── public/
│   ├── package.json
│   └── .env (ignored)
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── lib/
│   ├── server.js
│   ├── package.json
│   └── .env (ignored)
│
└── README.md
```

---

## ⚙️ Environment Variables

### Backend (`backend/.env`)

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
```

### Frontend (`frontend/.env`)

```env
VITE_STREAM_API_KEY=your_stream_api_key
```

---

## ▶️ Running the Project Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/ChatApp.git
cd ChatApp
```

---

### 2️⃣ Start the backend

```bash
cd backend
npm install
npm start
```

Backend runs on:

```
http://localhost:5001
```

---

### 3️⃣ Start the frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 💬 Stream Setup (Chat & Video)

1. Create a **Chat App** on 👉 [https://getstream.io](https://getstream.io)
2. Enable **Chat** and **Video**
3. Copy:

   * API Key
   * API Secret
4. Add them to:

   * `backend/.env` (key + secret)
   * `frontend/.env` (key only)

---

## 🎨 Theme Customization

* Users can switch between **light and dark themes**
* Theme preference is saved locally and persists across sessions

---

## 🧑‍🎨 Avatars

* Avatars are **automatically generated**
* Fast fallback avatars via DiceBear
* Lazy-loaded for smooth UI experience

---

## 🔒 Authentication Flow

* JWT tokens created on signup/login
* Stored in **HTTP-only cookies**
* Automatically attached to requests
* Protected backend routes via middleware

---

## 🧪 Common Scripts

### Backend

```bash
npm start
```

### Frontend

```bash
npm run dev
npm run build
```

<img width="1440" height="900" alt="Screenshot 2026-02-08 at 6 44 45 PM" src="https://github.com/user-attachments/assets/bf6be985-445e-408a-baf4-37fa3760eacd" />

<img width="1440" height="900" alt="Screenshot 2026-02-08 at 6 45 09 PM" src="https://github.com/user-attachments/assets/6770ab8e-883e-440c-90f6-c5ad8a976d6b" />
<img width="1440" height="900" alt="Screenshot 2026-02-08 at 6 45 18 PM" src="https://github.com/user-attachments/assets/f3ec9d3a-7489-40d3-9cdc-9a5280e6ede4" />
<img width="1440" height="900" alt="Screenshot 2026-02-08 at 6 50 36 PM" src="https://github.com/user-attachments/assets/90ae13e4-fe2d-445f-b3bd-93e5dd49cdd7" />
<img width="1372" height="756" alt="Screenshot 2026-02-08 at 6 50 58 PM" src="https://github.com/user-attachments/assets/37bf44ee-34d2-430f-a969-b22642510a36" />

<img width="1369" height="769" alt="Screenshot 2026-02-08 at 6 51 21 PM" src="https://github.com/user-attachments/assets/0b86fb3e-bda7-4f3a-b139-17aaa7bf3222" />
<img width="1431" height="773" alt="Screenshot 2026-02-08 at 6 51 35 PM" src="https://github.com/user-attachments/assets/e7ba44db-0abf-4194-865b-09e12ea5b83c" />


<img width="1431" height="772" alt="Screenshot 2026-02-08 at 6 51 53 PM" src="https://github.com/user-attachments/assets/2eba895c-c059-4e96-8c50-937476c2c063" />


<img width="1440" height="900" alt="Screenshot 2026-02-08 at 6 52 08 PM" src="https://github.com/user-attachments/assets/40f42cab-1954-4fb6-a945-1db888d99e91" />

<img width="1397" height="764" alt="Screenshot 2026-02-08 at 6 53 35 PM" src="https://github.com/user-attachments/assets/5ac5fe70-fc30-4416-8deb-6f3e1cc94e21" />

<img width="1383" height="774" alt="Screenshot 2026-02-08 at 6 54 25 PM" src="https://github.com/user-attachments/assets/87694fc9-0cef-4804-8b36-1759c2eb671c" />

<img width="1440" height="900" alt="Screenshot 2026-02-08 at 6 55 34 PM" src="https://github.com/user-attachments/assets/1d1a83e7-48df-4d59-ac6e-eb51a17fd722" />

<img width="1433" height="779" alt="Screenshot 2026-02-08 at 6 56 12 PM" src="https://github.com/user-attachments/assets/d952e1d7-0791-4ed8-b21b-8f9cd953e53f" />
<img width="1440" height="900" alt="Screenshot 2026-02-08 at 6 56 26 PM" src="https://github.com/user-attachments/assets/54a1836f-d46a-490b-9e49-24a1199a586d" />



<img width="1430" height="779" alt="Screenshot 2026-02-08 at 6 56 29 PM" src="https://github.com/user-attachments/assets/39c2d306-d869-4c44-a22e-0e19172ded0e" />

<img width="1422" height="781" alt="Screenshot 2026-02-08 at 6 56 51 PM" src="https://github.com/user-attachments/assets/007b3579-d63d-46c5-9d65-5c8fe785132e" />
<img width="1438" height="778" alt="Screenshot 2026-02-08 at 6 57 05 PM" src="https://github.com/user-attachments/assets/2f6e7672-d079-493e-8760-c056570ff7b9" />

