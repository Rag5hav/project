# MERN Blog Website

A full-stack blog website built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring user authentication, CRUD operations, and a modern responsive design.

## Features

### 🔐 Authentication
- User signup and login with JWT tokens
- Protected routes for authenticated users
- Password hashing with bcrypt
- Session management with local storage

### 📝 Blog Management
- Create, read, update, and delete blog posts
- Rich content editor with support for long-form content
- Featured images and post excerpts
- Tag system for categorizing posts
- View counter for posts
- Author attribution

### 🎨 Modern UI/UX
- Responsive design for all devices
- Beautiful gradient backgrounds and animations
- Card-based layout with hover effects
- Loading states and error handling
- Clean typography and spacing

### 📊 Dashboard
- Personal dashboard for managing posts
- Post statistics (views, published count)
- Quick actions for editing and deleting posts
- User-friendly post management interface

## Tech Stack

### Frontend
- **React.js** - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **Express Validator** - Input validation

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mern-blog-website
   ```

2. **Install dependencies**
   ```bash
   # Install frontend dependencies
   npm install
   
   # Install backend dependencies
   cd server
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the server directory:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/blogapp
   JWT_SECRET=your-super-secret-jwt-key-here
   CLIENT_URL=http://localhost:5173
   ```

4. **Start MongoDB**
   
   Make sure MongoDB is running on your system:
   ```bash
   # For macOS (using Homebrew)
   brew services start mongodb-community
   
   # For Ubuntu/Debian
   sudo systemctl start mongod
   
   # For Windows
   net start MongoDB
   ```

5. **Start the development servers**
   
   Backend (in the server directory):
   ```bash
   cd server
   npm run dev
   ```
   
   Frontend (in the root directory):
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to `http://localhost:5173` to see the application.

## API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Posts
- `GET /api/posts` - Get all posts (with pagination and search)
- `GET /api/posts/:id` - Get single post
- `POST /api/posts` - Create new post (protected)
- `PUT /api/posts/:id` - Update post (protected)
- `DELETE /api/posts/:id` - Delete post (protected)
- `GET /api/posts/user/my-posts` - Get user's posts (protected)

## Project Structure

```
├── server/                 # Backend code
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   ├── server.js          # Express server setup
│   └── package.json       # Backend dependencies
├── src/                   # Frontend code
│   ├── components/        # Reusable components
│   ├── pages/             # Page components
│   ├── context/           # React context
│   ├── hooks/             # Custom hooks
│   └── App.jsx            # Main app component
├── public/                # Static files
└── package.json           # Frontend dependencies
```

## Features in Detail

### User Authentication
- Secure password hashing with bcrypt
- JWT token-based authentication
- Protected routes for authenticated users
- Automatic token refresh and logout

### Blog Post Management
- Rich text editor for creating content
- Image upload support for featured images
- Tag system for categorization
- Draft and published states
- View counter and engagement metrics

### Search and Filtering
- Full-text search across posts
- Filter by tags and categories
- Pagination for large datasets
- Sort by date, popularity, or relevance

### Responsive Design
- Mobile-first approach
- Optimized for tablets and desktops
- Touch-friendly interface
- Fast loading and smooth animations

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Input validation and sanitization
- Rate limiting for API endpoints
- CORS configuration
- Helmet for security headers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.