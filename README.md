# Modern Business Website

A professional construction and design company website built with Next.js 16, React 19, and Tailwind CSS.

## Features

- Modern, responsive design
- Hero section with call-to-action
- Services showcase
- Portfolio gallery
- Professional affiliations slider
- CEO message section
- Contact information

## Tech Stack

- **Framework:** Next.js 16
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4
- **Components:** Radix UI + shadcn/ui
- **Icons:** Lucide React
- **Fonts:** Inter & Playfair Display

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd <your-project-name>
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploy to Netlify

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [Netlify](https://app.netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Choose "GitHub" and select your repository
5. Netlify will automatically detect Next.js and configure the build settings
6. Click "Deploy site"

The `netlify.toml` file is already configured with the optimal settings for Next.js deployment.

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── hero.tsx
│   ├── services.tsx
│   ├── portfolio.tsx
│   ├── ceo-message.tsx
│   └── ...
├── public/              # Static assets
│   └── images/
├── netlify.toml         # Netlify configuration
└── package.json
```

## License

Private - All rights reserved
