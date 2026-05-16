# Yassin Abdalla - Interactive Neon CV

A stunning, interactive CV showcasing AI, robotics, and embedded systems expertise. Built with Next.js, Tailwind CSS, Framer Motion, and Font Awesome icons.

## 🎨 Features

- **Neon Aesthetic**: Cyan, lime green, yellow, and purple on pure black
- **Interactive Projects**: Click cards to expand details
- **Right Sidebar Layout**: Skills, timeline, academic info, and contact
- **Glassmorphism Effects**: Modern UI with blur and transparency
- **Responsive Design**: Desktop-optimized layout
- **Font Awesome Icons**: Colorful, scalable icons throughout

## 📋 Project Structure

```
cv-project/
├── app/
│   ├── layout.jsx         # Root layout with metadata
│   ├── page.jsx           # Main CV component
│   └── globals.css        # Global styles and Tailwind
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS for Tailwind
├── next.config.js         # Next.js configuration
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
- Node.js 16+ installed
- Git installed
- Code editor (VS Code recommended)

### 2. Clone & Install

```bash
# Navigate to project folder
cd cv-project

# Install dependencies
npm install
```

### 3. Run Locally

```bash
npm run dev
```

Open `http://localhost:3000` in your browser. You should see the neon CV!

### 4. Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel (Recommended)

### Method 1: GitHub + Vercel (Best)

1. **Create GitHub Repository**
   - Go to github.com
   - Click "New repository"
   - Name it `yassin-cv`
   - Add `.gitignore` and `README.md`
   - Click "Create repository"

2. **Push Your Code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Neon CV"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/yassin-cv.git
   git push -u origin main
   ```

3. **Deploy to Vercel**
   - Go to vercel.com
   - Click "Import Project"
   - Select "GitHub" and authorize
   - Find and select your `yassin-cv` repository
   - Click "Import"
   - Vercel auto-configures Next.js settings
   - Click "Deploy"
   - Done! Get your live URL

### Method 2: Direct Vercel Upload

1. Go to vercel.com
2. Click "Create New"
3. Choose "Project" → "Create a Git Repository"
4. Upload your `cv-project` folder
5. Vercel handles the rest

## 🛠️ Technologies

- **Next.js 14**: React framework with built-in optimizations
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS preprocessing for Tailwind
- **Font Awesome 6.4**: Icon library (via CDN)
- **Node.js**: JavaScript runtime

## 📝 Customization

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  neon: {
    cyan: '#00D9FF',    // Change these hex codes
    lime: '#39FF14',
    yellow: '#FFFF00',
    purple: '#A020F0',
  }
}
```

### Edit Content
Edit `app/page.jsx` - modify:
- `projects` array - add/remove/edit projects
- `skills` array - update skills
- `timeline` array - change timeline events

### Styling
Edit `app/globals.css` for global styles and effects.

## 🎓 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Font Awesome Icons](https://fontawesome.com/icons)

## ❓ Troubleshooting

**Styles not loading?**
- Run `npm install` again
- Clear `.next` folder: `rm -rf .next`
- Restart dev server

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Git issues on ChromeOS?**
- Use Vercel's web interface instead of CLI
- Or install Linux on ChromeOS for full dev environment

## 📞 Contact

- Email: devhackerg@gmail.com
- GitHub: github.com/Anonyoumss
- LinkedIn: linkedin.com/in/yassin-abdalla-yassin

---

**Happy coding!** 🚀✨
