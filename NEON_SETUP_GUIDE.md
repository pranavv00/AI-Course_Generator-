# Neon Database Setup Guide

## Quick Steps to Get Your Database Connection String

### 1. Sign Up / Log In
- Visit: https://neon.tech
- Click "Sign Up" (use GitHub, Google, or email)
- Complete the registration

### 2. Create a New Project
- After logging in, click **"Create Project"** button
- Enter a project name (e.g., "ai-course-generator")
- Select a region (choose the one closest to you)
- Click **"Create Project"**

### 3. Get Your Connection String
- In your project dashboard, look for **"Connection Details"** or **"Connect"** button
- You'll see connection options:
  - **Connection pooling** (recommended for Next.js/serverless) - Use this one!
  - Direct connection
- Click on **"Connection pooling"** tab
- Copy the connection string (it will look like):
  ```
  postgresql://username:password@ep-xxxxx-xxxxx.region.aws.neon.tech/dbname?sslmode=require
  ```
- **IMPORTANT**: If a password is shown, copy it immediately - you won't see it again!

### 4. Update Your .env.local File
- Open the file: `.env.local` in the `ai-course-generator` directory
- Find the line: `NEXT_PUBLIC_DB_CONNECTION_STRING=`
- Paste your connection string after the `=` sign
- Save the file

### 5. Restart Your Development Server
- Stop the current server (Ctrl+C)
- Run `npm run dev` again

## Example Connection String Format
```
NEXT_PUBLIC_DB_CONNECTION_STRING=postgresql://username:password@ep-cool-darkness-123456.us-east-2.aws.neon.tech/neondb?sslmode=require
```

## Troubleshooting
- **Free Tier**: Neon offers a generous free tier, perfect for development
- **Connection Pooling**: Always use the connection pooling option for Next.js applications
- **Password**: If you lose your password, you can reset it in the Neon dashboard under "Settings"

## Need Help?
- Neon Documentation: https://neon.tech/docs
- Neon Discord: https://discord.gg/neondatabase

