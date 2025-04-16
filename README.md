# Todo App with MERN Stack and Tailwind CSS

A full-stack Todo application built with MongoDB, Express.js, React, Node.js, and Tailwind CSS. This application allows users to create, read, update, and delete todos, with user authentication functionality.

## Features

- **User Authentication**: Registration and login functionality
- **CRUD Operations**: Create, read, update, and delete todos
- **Filter Todos**: Filter by all, completed, or pending tasks
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS
- **Dark/Light Mode**: Based on Browser Preferences

## Technologies Used

- **Frontend**:
  - React 19
  - Tailwind CSS 4
  - Vite 6

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - JSON Web Tokens for authentication

## Project Structure

```
todo-app/
├── client/               # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth/     # Authentication components
│   │   │   ├── Todo/     # Todo components 
│   │   │   └── UI/       # UI components
│   │   ├── context/      # React context
│   │   ├── services/     # API services
│   │   └── App.jsx       # Main App component
│   └── index.html
└── server/               # Node.js backend
    ├── controllers/      # Route controllers
    ├── db/               # Database connection
    ├── middleware/       # user authentication
    ├── models/           # MongoDB models
    ├── routes/           # API routes
    └── index.js          # Entry point
```

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)

### Backend Setup

1. Navigate to the server directory:
   ```
   cd server
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:
   ```
   npm start
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```
   cd client
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## API Endpoints

### Authentication
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login a user
- `GET /api/users/profile` - Get user profile (protected)

### Todos
- `GET /api/todos` - Get all todos for authenticated user
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Toggle todo completion status
- `DELETE /api/todos/:id` - Delete a todo


## License

MIT

## Author

Mullapudi Sai Nikhil