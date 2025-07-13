# Portfolio v2

A modern React portfolio website showcasing my skills and projects.

## 🚀 Live Demo

Visit the live site: [https://cooldev900.github.io/portfolio-v2](https://cooldev900.github.io/portfolio-v2)

## 🛠️ Technologies Used

- React 17
- Tailwind CSS
- DaisyUI
- GSAP (for animations)
- CRACO (Create React App Configuration Override)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/cooldev900/portfolio-v2.git
cd portfolio-v2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

## 🚀 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

### Prerequisites

1. Make sure you have a GitHub account
2. Create a new repository on GitHub named `portfolio-v2`
3. Push your code to the repository

### Deployment Steps

1. **Initialize Git and push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/cooldev900/portfolio-v2.git
git push -u origin main
```

2. **Deploy to GitHub Pages:**
```bash
npm run deploy
```

3. **Configure GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Source", select "Deploy from a branch"
   - Choose the `gh-pages` branch
   - Click "Save"

Your site will be available at `https://cooldev900.github.io/portfolio-v2`

### Automatic Deployment

After the initial setup, you can deploy updates by simply running:
```bash
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/
│   ├── about_me/          # About section components
│   ├── blog_posts/        # Blog section components
│   ├── contact/           # Contact form components
│   ├── projects/          # Projects showcase components
│   └── UI/               # Reusable UI components
├── assets/
│   ├── img/              # Images and icons
│   └── pdf/              # PDF files (resume)
└── App.js                # Main application component
```

## 🎨 Features

- Responsive design
- Modern UI with Tailwind CSS
- Smooth animations
- Contact form
- Project showcase
- Blog section
- Downloadable resume
- Social media links

## 📝 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run test` - Launches the test runner
- `npm run deploy` - Deploys to GitHub Pages

## 🤝 Contributing

Feel free to fork this project and make your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
