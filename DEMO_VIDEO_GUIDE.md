# 📹 Demo Video Guide

## How to Add Your Demo Video to the README

### Option 1: YouTube (Recommended)

1. **Upload your video to YouTube**
   - Go to [YouTube Studio](https://studio.youtube.com)
   - Upload your demo video
   - Make it public or unlisted

2. **Get the Video ID**
   - Copy the video URL (e.g., `https://www.youtube.com/watch?v=VIDEO_ID`)
   - Extract the `VIDEO_ID` from the URL

3. **Update README.md**
   - Open `README.md`
   - Find the line: `[![Demo Video](https://img.shields.io/badge/▶️-Watch%20Demo-red?style=for-the-badge)](https://youtube.com/watch?v=YOUR_VIDEO_ID)`
   - Replace `YOUR_VIDEO_ID` with your actual video ID

### Option 2: Direct Video Embed

Replace the demo video section in README.md with:

```markdown
## 📹 Demo Video

<div align="center">

### 🎥 Watch the Demo

[![Demo Video](https://img.shields.io/badge/▶️-Watch%20Demo-red?style=for-the-badge)](YOUR_VIDEO_URL)

**Or embed directly:**

<video width="800" controls>
  <source src="YOUR_VIDEO_URL" type="video/mp4">
  Your browser does not support the video tag.
</video>

</div>
```

### Option 3: GitHub Releases

1. Create a new release on GitHub
2. Attach your video file to the release
3. Link to the release in the README

### Option 4: External Hosting

You can host your video on:
- **Vimeo** - Professional video hosting
- **Loom** - Screen recording and sharing
- **Cloudinary** - Video hosting service
- **Your own CDN** - For maximum control

---

## Video Content Suggestions

Your demo video should include:

1. **Introduction** (0:00 - 0:30)
   - Brief overview of the project
   - What problem it solves

2. **Features Demo** (0:30 - 3:00)
   - User authentication
   - Creating a course
   - AI-generated content
   - Course customization
   - Publishing and sharing

3. **Technical Highlights** (3:00 - 4:00)
   - Tech stack overview
   - Key integrations (Gemini AI, YouTube, etc.)

4. **Conclusion** (4:00 - 4:30)
   - Call to action
   - Links to repository and live demo

**Recommended Length:** 3-5 minutes

---

## Video Quality Tips

- **Resolution:** 1080p (1920x1080) minimum
- **Frame Rate:** 30fps
- **Format:** MP4 (H.264 codec)
- **Audio:** Clear narration or background music
- **Thumbnail:** Create an eye-catching thumbnail

---

## Quick Update Command

After uploading your video, update the README:

```bash
# Edit README.md and replace YOUR_VIDEO_ID with your actual video ID
# Then commit and push
git add README.md
git commit -m "docs: Add demo video link"
git push
```


