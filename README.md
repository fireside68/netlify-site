# Unaffiliated Studios - React/TypeScript

A modern, responsive portfolio website built with React and TypeScript, showcasing software engineering expertise and music artistry.

## 🚀 Features

- **Modern React/TypeScript Architecture**: Clean, type-safe component structure
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Lazy loading, optimized assets, and smooth animations
- **SEO Ready**: Proper meta tags, structured data, and semantic HTML
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Content Security Policy**: Secure headers and CSP implementation
- **Google Analytics**: Integrated tracking with gtag

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Create React App
- **Styling**: Custom CSS with Tailwind utilities
- **Fonts**: Inter font family from Google Fonts
- **Icons**: Custom SVG icons
- **Analytics**: Google Analytics 4

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.tsx      # Site navigation and mobile menu
│   ├── Hero.tsx           # Hero section with floating animations
│   ├── About.tsx          # About section with skills grid
│   ├── Work.tsx           # Professional experience timeline
│   ├── Music.tsx          # Music and DJ services showcase
│   ├── Contact.tsx        # Contact form with social links
│   ├── Footer.tsx         # Site footer
│   ├── ScrollIndicator.tsx # Scroll progress indicator
│   └── Privacy.tsx        # Privacy policy page
├── App.tsx                # Main application component
├── App.css               # Global styles and custom CSS
├── index.tsx             # React entry point
└── reportWebVitals.ts    # Performance monitoring
```

## 🚦 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd unaffiliated-studios-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view in browser.

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Colors and Theming

The site uses a custom color palette defined in `tailwind.config.js`:

- **Primary**: Teal shades (#14b8a6)
- **Accent**: Yellow shades (#facc15)
- **Background**: Slate dark theme

### Content Updates

Key content areas to customize:

- **Personal Information**: Update name, bio, and contact details in respective components
- **Work Experience**: Modify the `experiences` array in `Work.tsx`
- **Skills**: Update the `skills` array in `About.tsx`
- **Social Links**: Change URLs in `Contact.tsx`
- **Meta Tags**: Update SEO information in `public/index.html`

### Analytics

Replace the Google Analytics ID in `App.tsx`:
```typescript
gtag('config', 'YOUR-GA4-ID');
```

## 🔧 Development Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (irreversible)

## 📱 Responsive Breakpoints

The site is optimized for:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🌟 Key Features Implementation

### Smooth Scrolling Navigation
```typescript
const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault();
  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};
```

### Animated Components
Custom CSS animations for fade-in effects and floating elements:
```css
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}
```

### Mobile Menu Toggle
State-managed mobile navigation with smooth transitions:
```typescript
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
```

## 🔒 Security

- Content Security Policy headers configured
- All external links use `rel="noopener noreferrer"`
- Form inputs are properly validated
- XSS protection through React's built-in escaping

## 🚀 Deployment

### Netlify Deployment

1. Build the project: `npm run build`
2. Deploy the `build/` folder to Netlify
3. Configure custom headers in `netlify.toml` for CSP

### Environment Variables

For production deployment, consider these environment variables:
- `REACT_APP_GA_ID` - Google Analytics ID
- `REACT_APP_CONTACT_EMAIL` - Contact form endpoint

## 📄 License

This project is part of a personal portfolio. Please respect intellectual property rights.

## 🤝 Contributing

This is a personal portfolio project. For suggestions or issues, please open an issue or contact directly.

---

Built with ❤️ by Cedric Johnson using React, TypeScript, and Tailwind CSS.