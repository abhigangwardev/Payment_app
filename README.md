Payment App
A full-stack payment application that allows users to sign up, sign in, check their balance, and send money to other users. This project is built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and utilizes JWT for authentication.

✨ Features
User Authentication: Secure sign-up and sign-in functionality using JWT (JSON Web Tokens).

Check Balance: Users can view their current account balance.

Send Money: Users can send money to other registered users.

User Search: Ability to search for other users on the platform.

Responsive Design: A clean and responsive user interface built with Tailwind CSS.

🛠️ Tech Stack
Frontend:

React.js

React Router

Tailwind CSS

Axios

Backend:

Node.js

Express.js

MongoDB

Mongoose

JSON Web Token (JWT)

Zod (for validation)

🚀 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Node.js and npm (or yarn)

MongoDB instance (local or cloud-based like MongoDB Atlas)

Installation
Clone the repository:

git clone https://github.com/abhigangwardev/Payment_app.git
cd Payment_app

Install backend dependencies:

cd backend
npm install

Install frontend dependencies:

cd ../frontend
npm install

Create a .env file in the backend directory and add the following variables:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Running the Application
Start the backend server:

cd backend
npm start

Start the frontend development server:

cd frontend
npm run dev

The application should now be running at http://localhost:5173.

📂 Project Structure
Payment_app/
├── backend/
│   ├── config.js
│   ├── db.js
│   ├── index.js
│   ├── middleware.js
│   ├── package.json
│   └── routes/
│       ├── account.js
│       └── user.js
└── frontend/
    ├── index.html
    ├── package.json
    ├── src/
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── components/
    └── tailwind.config.js
