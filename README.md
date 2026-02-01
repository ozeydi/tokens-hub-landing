# Tokens Hub Landing Page

A modern, responsive landing page for Tokens Hub, built with Next.js, React, and Tailwind CSS.

## Project Overview

Tokens Hub is a platform for digital token management and exchange. This landing page showcases the platform's features, vision, and value proposition, with a clean and modern design optimized for conversions.

## Technologies Used

- **Next.js 14** - React framework with server-side rendering
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformation tool

## Project Structure

```
tokens-hub-landing/
├── app/                      # Next.js App Router directory
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page component
├── components/              # Reusable React components
│   ├── CallToAction.tsx     # Call-to-action section
│   ├── Footer.tsx           # Footer component
│   ├── Header.tsx           # Header with navigation
│   ├── Hero.tsx             # Hero section
│   ├── UseCases.tsx         # Use cases section
│   ├── ValueProposition.tsx # Value proposition section
│   └── Vision.tsx           # Vision section
├── public/                  # Static assets
│   └── index.html           # Static HTML file
├── types/                   # TypeScript type definitions
│   └── index.ts             # Common types
├── next.config.js           # Next.js configuration
├── package.json             # Project dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Component-based architecture for maintainability
- Type-safe development with TypeScript
- Optimized for performance with Next.js

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/tokens-hub-landing.git
   ```

2. Navigate to the project directory:

   ```bash
   cd tokens-hub-landing
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Run the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check for code issues

## Contributing

Contributions are welcome! Please feel free to submit a pull request or create an issue for any bugs or feature requests.

## License

This project is licensed under the MIT License.
