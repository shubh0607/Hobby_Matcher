# Hobby Matcher 🎯

**A full-stack social networking application that connects people based on shared hobbies and interests.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/shubh0607/Hobby-Matcher)](https://github.com/shubh0607/Hobby-Matcher/stargazers)

## 🚀 Features

✨ **User Authentication**: Secure registration and login with JWT tokens  
👤 **Profile Management**: Create and manage user profiles with hobbies and location  
🎯 **Smart Matching**: Find users with similar interests and hobbies  
💬 **Real-time Messaging**: Chat with matched users instantly  
📍 **Location-based**: Connect with people in your area  
📱 **Responsive Design**: Works seamlessly on desktop and mobile  
🎨 **Modern UI**: Beautiful glass-morphism design with smooth animations  

## 🛠️ Tech Stack

### Frontend
- **React.js** - User interface library
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **CSS3** - Modern styling with glass-morphism effects
- **Socket.io Client** - Real-time communication

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Token authentication
- **bcryptjs** - Password hashing
- **Socket.io** - Real-time bidirectional communication

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- Git

## 🚀 Installation & Setup

### 1. Clone the repository
git clone https://github.com/shubh0607/Hobby-Matcher.git
cd Hobby-Matcher

text

### 2. Backend Setup
cd backend
npm install

text

Create a `.env` file in the backend directory:
MONGO_URI=your_mongodb_connection_string_here
JWT_SECRET=your_super_secret_jwt_key_here
PORT=5000

text

Start the backend server:
npm start

text

### 3. Frontend Setup
Open a new terminal and navigate to frontend:
cd frontend
npm install
npm start

text

The application will open at `http://localhost:3000`

## 📱 Usage

1. **Register**: Create a new account with your name, email, password, hobbies, and location
2. **Login**: Sign in to your account using your credentials
3. **Discover**: Browse all users or find people with matching hobbies
4. **Connect**: Start conversations with users who share your interests
5. **Chat**: Send and receive real-time messages

## 🏗️ Project Structure

Hobby-Matcher/
├── backend/
│ ├── models/
│ │ ├── User.js
│ │ └── Message.js
│ ├── routes/
│ │ ├── users.js
│ │ └── messages.js
│ ├── middleware/
│ │ └── auth.js
│ ├── server.js
│ └── package.json
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Login.js
│ │ │ └── Register.js
│ │ ├── pages/
│ │ │ └── Dashboard.js
│ │ ├── context/
│ │ │ └── AuthContext.js
│ │ ├── services/
│ │ │ └── api.js
│ │ ├── App.js
│ │ └── App.css
│ └── package.json
└── README.md

text

## 🔧 API Endpoints

### Authentication
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user

### Users
- `GET /api/users/profile` - Get current user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/all` - Get all users (excluding current)
- `GET /api/users/matches` - Get users with matching hobbies

### Messages
- `POST /api/messages/send` - Send a message
- `GET /api/messages/conversation/:userId` - Get conversation with specific user

## 🌟 Screenshots

![Dashboard](https://via.placeholder.com/800x400/667eea/ffffff?text=Add+Your+Screenshot+Here)

*Add your actual screenshots here*

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Shubham**
- GitHub: [@shubh0607](https://github.com/shubh0607)
- Project Link: [https://github.com/shubh0607/Hobby-Matcher](https://github.com/shubh0607/Hobby-Matcher)
