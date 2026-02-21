# Mern Authentication

A full-stack MERN (MongoDB, Express, React, Node.js) authentication application with features like user registration, login, email verification, OTP verification, and JWT-based authentication.

## Features

- User Registration with email verification
- User Login with JWT tokens
- Email OTP verification
- Password reset functionality
- Protected routes
- Redis for session management
- Modern React UI with Tailwind CSS

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Redis
- JWT (JSON Web Tokens)
- Nodemailer (for emails)
- Zod (validation)
- Bcrypt (password hashing)

### Frontend
- React 19
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- React Toastify
- JS Cookies

## Project Structure

```
Mern Authentication/
├── backend/
│   ├── config/         # Configuration files
│   ├── controllers/    # Route controllers
│   ├── middlewares/   # Express middlewares
│   ├── models/        # Mongoose models
│   ├── routes/        # API routes
│   ├── index.js       # Entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── assets/       # Static assets
│   │   ├── context/      # React context
│   │   ├── pages/        # Page components
│   │   ├── App.jsx       # Main app component
│   │   └── main.jsx      # Entry point
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── .gitignore
└── README.md
```

## Installation

### Prerequisites
- Node.js (v18+)
- MongoDB
- Redis

### Backend Setup

```
bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```
env
MONGO_URI=your_mongodb_connection_string
REDIS_URL=your_redis_url
FRONTEND_URL=http://localhost:5173
JWT_SECRET=your_jwt_secret
PORT=5000
```

Start the backend:

```
bash
npm run dev
```

### Frontend Setup

```
bash
cd frontend
npm install
```

Start the frontend:

```
bash
npm run dev
```

## API Endpoints

### User Routes
- `POST /api/v1/users/register` - Register a new user
- `POST /api/v1/users/login` - Login user
- `POST /api/v1/users/verify` - Verify email
- `POST /api/v1/users/verifyotp` - Verify OTP
- `GET /api/v1/users/me` - Get current user
- `POST /api/v1/users/logout` - Logout user

## License

ISC
