# 🔐 MERN Authentication

A production-ready full-stack authentication system built with the MERN stack (MongoDB, Express, React, Node.js). This application implements secure user registration, email verification, OTP-based login, JWT authentication, and session management with Redis.

![MERN Stack](https://img.shields.io/badge/MERN-Stack-000000?style=for-the-badge&logo=mongodb&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js)
![License](https://img.shields.io/badge/License-ISC-green?style=for-the-badge)

## ✨ Features

### Security
- **JWT Authentication** - Access and refresh token mechanism with HTTP-only cookies
- **CSRF Protection** - Cross-Site Request Forgery token validation
- **Password Hashing** - Secure password storage using bcrypt
- **Rate Limiting** - Request rate limiting to prevent abuse
- **Input Validation** - Zod schema validation for all inputs
- **SQL Injection Prevention** - MongoDB sanitize middleware
- **Session Management** - Redis-based session tracking

### User Features
- **User Registration** with email verification
- **OTP Login** - Two-factor authentication via email OTP
- **Email Verification** - Secure email verification tokens
- **Protected Routes** - Authenticated route access control
- **Session Management** - Track multiple sessions
- **Profile Management** - View and manage user profile

### UI/UX
- **Modern Interface** - Clean and responsive design
- **Loading States** - Visual feedback during operations
- **Toast Notifications** - Real-time user feedback
- **Form Validation** - Real-time input validation

## 🛠️ Tech Stack

### Backend
| Technology | Purpose |
|------------|---------|
| Node.js | JavaScript runtime |
| Express.js | Web framework |
| MongoDB | Database |
| Mongoose | ODM library |
| Redis | Session & cache storage |
| JWT | Authentication tokens |
| Nodemailer | Email service |
| Zod | Schema validation |
| Bcrypt | Password hashing |

### Frontend
| Technology | Purpose |
|------------|---------|
| React 19 | UI library |
| Vite | Build tool |
| Tailwind CSS | Styling |
| React Router | Navigation |
| Axios | HTTP client |
| React Toastify | Notifications |
| JS Cookies | Cookie management |

## 📁 Project Structure

```
Mern-Authentication/
├── backend/
│   ├── config/
│   │   ├── csrfMiddleware.js    # CSRF token generation & validation
│   │   ├── db.js                # MongoDB connection
│   │   ├── generateToken.js     # JWT token generation
│   │   ├── html.js              # Email HTML templates
│   │   ├── sendMail.js          # Nodemailer configuration
│   │   └── zod.js               # Validation schemas
│   ├── controllers/
│   │   └── user.js              # User controller logic
│   ├── middlewares/
│   │   ├── isAuth.js            # Authentication middleware
│   │   └── TryCatch.js          # Error handling wrapper
│   ├── models/
│   │   └── User.js              # User Mongoose model
│   ├── routes/
│   │   └── user.js              # API route definitions
│   ├── index.js                 # Server entry point
│   ├── .env                     # Environment variables
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── assets/              # Static assets
│   │   ├── context/
│   │   │   └── AppContext.jsx   # Global state management
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx    # Protected dashboard
│   │   │   ├── Home.jsx         # Landing page
│   │   │   ├── Login.jsx        # Login page
│   │   │   ├── Register.jsx      # Registration page
│   │   │   ├── Verify.jsx       # Email verification
│   │   │   └── VerifyOtp.jsx     # OTP verification
│   │   ├── apiIntercepter.js    # Axios interceptors
│   │   ├── App.jsx              # Root component
│   │   ├── Loding.jsx           # Loading component
│   │   ├── index.css            # Global styles
│   │   └── main.jsx             # React entry point
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18 or higher)
- **MongoDB** (v6.0 or higher)
- **Redis** (v6.0 or higher)
- **npm** or **yarn**

### Installation

#### 1. Clone the Repository

```
bash
git clone https://github.com/ayush12-prog/Mern-Authentication.git
cd Mern-Authentication
```

#### 2. Backend Setup

```
bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:

```
env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB
MONGO_URI=mongodb://localhost:27017/MERNAuthentication

# Redis
REDIS_URL=redis://localhost:6379

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173

# JWT Secrets
JWT_SECRET=your-super-secret-jwt-key
JWT_REFRESH_SECRET=your-super-secret-refresh-key

# Email Configuration (Gmail as example)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

Start the backend server:

```
bash
npm run dev
# Server running on http://localhost:5000
```

#### 3. Frontend Setup

Open a new terminal:

```
bash
cd frontend
npm install
```

Start the development server:

```
bash
npm run dev
# Frontend running on http://localhost:5173
```

## 📡 API Endpoints

### Authentication Routes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/v1/users/register` | Register new user | ❌ |
| POST | `/api/v1/users/verify/:token` | Verify email | ❌ |
| POST | `/api/v1/users/login` | Login with credentials | ❌ |
| POST | `/api/v1/users/verifyotp` | Verify OTP & get tokens | ❌ |
| GET | `/api/v1/users/me` | Get current user profile | ✅ |
| POST | `/api/v1/users/logout` | Logout user | ✅ |
| POST | `/api/v1/users/refresh` | Refresh access token | ❌ |
| GET | `/api/v1/users/csrf` | Get CSRF token | ✅ |

### Request/Response Examples

#### Register User
```
bash
POST /api/v1/users/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

#### Login
```
bash
POST /api/v1/users/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

#### Verify OTP
```
bash
POST /api/v1/users/verifyotp
Content-Type: application/json

{
  "email": "john@example.com",
  "otp": "123456"
}
```

## 🔧 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment | `development` |
| `MONGO_URI` | MongoDB connection string | `mongodb://localhost:27017/MERNAuthentication` |
| `REDIS_URL` | Redis connection string | `redis://localhost:6379` |
| `FRONTEND_URL` | Frontend URL | `http://localhost:5173` |
| `JWT_SECRET` | JWT access token secret | `your-secret-key` |
| `JWT_REFRESH_SECRET` | JWT refresh token secret | `your-refresh-secret` |
| `EMAIL_USER` | SMTP email user | `your-email@gmail.com` |
| `EMAIL_PASS` | SMTP email password | `your-app-password` |

## 🧪 Testing the Application

1. **Start MongoDB**: Ensure MongoDB is running
2. **Start Redis**: Ensure Redis is running
3. **Start Backend**: `cd backend && npm run dev`
4. **Start Frontend**: `cd frontend && npm run dev`
5. **Open Browser**: Navigate to `http://localhost:5173`

### User Flow
1. Register a new account
2. Check email for verification link
3. Click verification link
4. Login with credentials
5. Enter OTP sent to email
6. Access protected dashboard

## 🔐 Security Features Explained

### JWT Tokens
- **Access Token**: Short-lived (15 min), sent in HTTP-only cookie
- **Refresh Token**: Long-lived (7 days), sent in HTTP-only cookie

### Rate Limiting
- Registration: 1 request per minute per IP/email
- Login: 5 attempts per minute per IP/email

### Session Management
- Sessions stored in Redis with 7-day expiration
- Multiple sessions per user supported
- Session revocation on logout

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

---

⭐ If you found this project helpful, please consider giving it a star!

Built with ❤️ using MERN Stack
