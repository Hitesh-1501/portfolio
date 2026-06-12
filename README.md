# 🚀 Hitesh Badgujar — Android Developer Portfolio
 
A modern, animated, and fully responsive personal portfolio website built to showcase my skills, projects, achievements, and journey as an **Android (Kotlin + Jetpack Compose) Developer**.
 
The site features smooth scroll-based animations, a glassmorphism UI, an interactive 3D phone mockup, floating particle effects, and a mouse-tracking spotlight — all built with **React** and **Framer Motion**.
 
---
 
## 📸 Preview
 
> *(Replace this section with a screenshot or GIF of your live portfolio)*
 
```
[ Add your portfolio screenshot/GIF here ]
```
 
---
 
## 🧰 Tech Stack
 
### Core
- **React** – Component-based UI library
- **Vite** – Fast build tool and dev server
- **JavaScript (JSX)**
### Styling
- **Tailwind CSS** – Utility-first CSS framework
- **Custom CSS** (`index.css`) – Global styles, scrollbar styling, animated mesh backgrounds, reduced-motion support
### Animation & Interactivity
- **Framer Motion** – Page transitions, scroll-based animations, hover effects, 3D tilt effects, spring physics
- **react-type-animation** – Typewriter-style animated text in the Hero section
### Icons
- **react-icons** – `react-icons/si` (Android, Kotlin, Firebase, LeetCode), `react-icons/fa` (GitHub, LinkedIn), `react-icons/hi` (Download/Check icons)
### Other Features
- **IntersectionObserver API** – Active section highlighting in navbar
- **Scroll progress indicator** – Animated top progress bar using `useScroll` + `useSpring`
- **Responsive design** – Optimized for mobile, tablet, and desktop
---
 
## 📂 Project Structure
 
```
src/
├── assets/
│   └── images/              # Profile photo, project screenshots, etc.
├── components/
│   ├── Container.jsx        # Reusable max-width wrapper
│   ├── FloatingParticles.jsx # Animated background particles
│   ├── FloatingTech.jsx     # Floating tech badges (Android, Kotlin, Firebase)
│   ├── HeroStats.jsx        # Animated counter stats
│   ├── MouseSpotlight.jsx   # Mouse-tracking spotlight effect
│   ├── Navbar.jsx           # Sticky responsive navbar with active link tracking
│   ├── PhoneMockup.jsx      # 3D tilt phone mockup with project preview
│   ├── ProfilePhoto.jsx     # Animated profile photo with orbiting ring
│   └── QuickStats.jsx       # Quick stats grid
├── data/
│   └── portfolioData.js     # Personal info (name, title, contact links, etc.)
├── sections/
│   ├── Hero.jsx             # Landing/intro section
│   ├── About.jsx            # About me, journey, milestones, education, focus areas
│   ├── Skills.jsx           # Skill categories with proficiency badges
│   ├── Projects.jsx         # Project showcase
│   ├── Achievements.jsx     # Hackathons, certifications, coding profiles
│   └── Contact.jsx          # Contact section
├── App.jsx                  # Main app layout and section composition
└── index.css                # Global styles & Tailwind import
```
 
---
 
## ✨ Features
 
- 🎨 **Glassmorphism UI** with backdrop blur, soft borders, and glowing accents (Android green theme: `#3DDC84`)
- 🧭 **Smart Navbar** — auto-highlights the active section while scrolling, with a mobile hamburger menu
- 🌟 **Animated Hero Section** — typewriter effect, animated stat counters, and a 3D interactive phone mockup
- 🪐 **Floating Particles & Tech Badges** — subtle ambient motion across the hero section
- 🖱️ **Mouse Spotlight Effect** — soft glow that follows the cursor across the page
- 📈 **Scroll Progress Bar** — shows reading progress at the top of the page
- 🧱 **About Section** — personal journey, animated milestone timeline, education, and career goals
- 🛠️ **Skills Section** — categorized into Android Core, Architecture, Firebase & Backend, and Tools, with proficiency levels
- 🏆 **Achievements Section** — hackathon timeline, certifications grid, and coding profile links (LeetCode, GitHub)
- 📬 **Contact Section** — ways to get in touch (email, LinkedIn, GitHub)
- 📄 **Resume Download** — animated download button with success state
- ♿ **Accessibility-aware** — respects `prefers-reduced-motion` for animations
---
 
## 🧑‍💻 Tech Highlights Showcased
 
- Kotlin
- Jetpack Compose
- Firebase (Auth, Firestore, Storage, Cloud Messaging)
- MVVM Architecture & Repository Pattern
- Kotlin Coroutines, StateFlow & SharedFlow
- Retrofit, Room, WorkManager
- Figma (UI/UX Design)
- AI-powered Android apps (e.g., Gemini AI-based Expense Tracker)
---
 
## 📬 Contact
 
- **Name:** Hitesh Jitendra Badgujar
- **Email:** badgujarhitesh1501@gmail.com
- **GitHub:** [Hitesh-1501](https://github.com/Hitesh-1501)
- **LinkedIn:** [hitesh-badgujar](https://www.linkedin.com/in/hitesh-badgujar-b5b489346/)
- **LeetCode:** [hitesh_b1501](https://leetcode.com/u/hitesh_b1501/)
---
 
## 📄 License
 
This project is open for personal portfolio inspiration. Feel free to fork it, but please update the personal information, images, and content before deploying it as your own.
 