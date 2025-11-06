# 🚀 AI Course Generator

<div align="center">

![AI Course Generator](https://img.shields.io/badge/AI-Course%20Generator-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=for-the-badge&logo=typescript)

**Create personalized coding courses powered by AI**

[Live Demo](#) • [Documentation](#getting-started) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 📹 Demo Video

<div align="center">

### 🎥 Watch the Demo

[![Demo Video](https://img.shields.io/badge/▶️-Watch%20Demo-red?style=for-the-badge)](https://youtube.com/watch?v=YOUR_VIDEO_ID)

> **Note:** Add your demo video link above. You can upload the video to YouTube and replace `YOUR_VIDEO_ID` with your actual video ID.

**Or embed the video directly:**

```markdown
[![Demo Video](https://img.shields.io/badge/▶️-Watch%20Demo-red?style=for-the-badge)](YOUR_VIDEO_URL)
```

</div>

---

## ✨ Overview

**AI Course Generator** is a cutting-edge web application that leverages artificial intelligence to create personalized coding courses. Built with Next.js 15 and powered by Google's Gemini AI, it automatically generates comprehensive course content, integrates YouTube videos, and provides a seamless learning experience tailored to each user's needs.

### 🎯 Key Highlights

- 🤖 **AI-Powered Content Generation** - Automatically create course layouts and detailed chapter content
- 🎥 **YouTube Integration** - Seamlessly embed relevant educational videos
- 👤 **User Authentication** - Secure login with Clerk
- 📚 **Course Management** - Create, edit, and publish courses with ease
- 🎨 **Modern UI/UX** - Beautiful, responsive design with Tailwind CSS
- 🗄️ **Database Integration** - PostgreSQL with Drizzle ORM for reliable data storage

---

## 🎨 Features

### Core Features

- ✅ **AI-Generated Course Layouts** - Create complete course structures in seconds
- ✅ **Intelligent Chapter Content** - Detailed explanations with code examples
- ✅ **YouTube Video Integration** - Automatically find and embed relevant videos
- ✅ **Course Customization** - Edit course details, chapters, and content
- ✅ **User Dashboard** - Manage all your courses in one place
- ✅ **Course Publishing** - Share your courses with the community
- ✅ **Image Upload** - Firebase storage for course banners
- ✅ **Responsive Design** - Works perfectly on all devices

### Advanced Features

- 🔐 **Secure Authentication** - Powered by Clerk
- 📊 **Database Management** - Neon PostgreSQL with Drizzle ORM
- 🎯 **Category-Based Organization** - Organize courses by programming languages and topics
- 📝 **Markdown Support** - Rich text formatting for course content
- 🔍 **Course Exploration** - Browse and discover courses created by others

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI, shadcn/ui
- **Icons:** Lucide React, React Icons
- **Animations:** Motion (Framer Motion)

### Backend & APIs
- **AI Model:** Google Gemini 2.5 Flash
- **Database:** Neon PostgreSQL (Serverless)
- **ORM:** Drizzle ORM
- **Storage:** Firebase Storage
- **Authentication:** Clerk

### APIs & Services
- **YouTube Data API v3** - Video integration
- **Google Generative AI** - Content generation
- **Clerk** - User authentication

### Development Tools
- **Package Manager:** npm
- **Database Tools:** Drizzle Kit
- **Deployment:** Vercel (recommended)

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or higher
- **npm** or **yarn**
- **Git**

### Required API Keys

You'll need to obtain API keys for:

1. **Google Gemini API** - [Get your API key](https://aistudio.google.com/apikey)
2. **YouTube Data API v3** - [Get your API key](https://console.cloud.google.com/apis/credentials)
3. **Clerk** - [Sign up for Clerk](https://clerk.com)
4. **Neon Database** - [Create a free database](https://neon.tech)
5. **Firebase** (Optional) - [Firebase Console](https://console.firebase.google.com)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/pranavv00/AI-CourseGenerator.git
cd AI-CourseGenerator
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
# Google Gemini API
NEXT_PUBLIC_GEMINI_API_KEY=your-gemini-api-key

# YouTube Data API
NEXT_PUBLIC_YOUTUBE_API_KEY=your-youtube-api-key

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key

# Database (Neon PostgreSQL)
NEXT_PUBLIC_DB_CONNECTION_STRING=postgresql://user:password@host/database?sslmode=require

# Firebase (Optional - for image uploads)
NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

# Application URL
NEXT_PUBLIC_HOST_URL=http://localhost:3000
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

### 4. Set Up the Database

Push the database schema to your Neon database:

```bash
npm run db:push
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
ai-course-generator/
├── app/
│   ├── _components/          # Shared components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   └── Footer.jsx
│   ├── _context/             # React contexts
│   ├── (auth)/               # Authentication pages
│   ├── create-course/        # Course creation flow
│   ├── dashboard/            # User dashboard
│   ├── course/               # Course viewing
│   └── layout.js             # Root layout
├── components/
│   └── ui/                   # UI components (shadcn/ui)
├── configs/
│   ├── AiModel.jsx           # Gemini AI configuration
│   ├── db.jsx                # Database configuration
│   ├── firebaseConfig.jsx    # Firebase configuration
│   └── schema.jsx            # Database schema
├── hooks/                    # Custom React hooks
├── lib/                      # Utility functions
├── public/                   # Static assets
└── drizzle/                  # Database migrations
```

---

## 🎯 Usage

### Creating a Course

1. **Sign Up/Login** - Create an account or sign in
2. **Navigate to Dashboard** - Click "Create Course"
3. **Select Category** - Choose a programming language or topic
4. **Enter Topic Details** - Provide course topic and description
5. **Configure Options** - Set level, duration, number of chapters, and video preferences
6. **Generate Layout** - Let AI create the course structure
7. **Customize** - Edit course details and chapters as needed
8. **Generate Content** - Create detailed chapter content with code examples
9. **Publish** - Share your course with the community

### Exploring Courses

- Browse courses created by the community
- Filter by category, level, or topic
- Start learning from any published course

---

## 🗄️ Database Schema

### Tables

- **courseList** - Stores course metadata and layout
- **chapters** - Stores chapter content and video IDs

See `configs/schema.jsx` for detailed schema definitions.

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add your environment variables
4. Deploy!

### Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm start
```

---

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start            # Start production server

# Database
npm run db:push      # Push schema to database
npm run db:studio    # Open Drizzle Studio
npm run db:generate  # Generate migrations

# Linting
npm run lint         # Run ESLint
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Google Gemini](https://ai.google.dev/) - AI Model
- [Clerk](https://clerk.com/) - Authentication
- [Neon](https://neon.tech/) - Serverless PostgreSQL
- [Drizzle ORM](https://orm.drizzle.team/) - TypeScript ORM
- [shadcn/ui](https://ui.shadcn.com/) - UI Components

---

## 📞 Support

If you have any questions or need help, please:

- Open an issue on GitHub
- Check the documentation
- Review existing issues and discussions

---

## ⭐ Star History

If you find this project helpful, please consider giving it a star! ⭐

---

<div align="center">

**Made with ❤️ using Next.js and AI**

[⬆ Back to Top](#-ai-course-generator)

</div>
