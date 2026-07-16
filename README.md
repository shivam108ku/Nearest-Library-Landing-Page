# 📚 Nearest Library Landing Page

A modern, fast, and responsive landing page for the **Nearest Library** project. This application helps users locate nearby libraries, book study spaces, browse unified catalogs, and explore community literary events.

---

## 🚀 Features (Planned & Implemented)

- 📍 **Smart Library Locator**: Find public, academic, and private libraries near your current location using geolocation or postal codes.
- 📅 **Study Space Reservations**: Real-time booking system for study desks, private cabins, and collaboration rooms.
- 🔍 **Unified Catalog Search**: Search for books, journals, and digital media across multiple local library databases.
- 🎟️ **Event Discoverer**: Find book readings, workshops, storytelling sessions, and academic seminars in your neighborhood.
- 🪪 **Digital Library Card**: Store and manage library memberships in one secure digital wallet.

---

## 🛠️ Tech Stack

This project is built using a modern frontend stack:

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & PostCSS
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Package Manager**: [pnpm](https://pnpm.io/)

---

## 📂 Project Structure

```text
nearestlibrary-landing/
├── app/                  # Next.js App Router files
│   ├── favicon.ico       # Page favicon
│   ├── globals.css       # Global styles (Tailwind imports)
│   ├── layout.tsx        # Main application layout
│   └── page.tsx          # Home page view (Landing Page)
├── public/               # Static assets (images, vectors, etc.)
├── eslint.config.mjs     # ESLint configuration
├── next.config.ts        # Next.js configuration
├── postcss.config.mjs    # PostCSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies & metadata
```

---

## 🚦 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+) and [pnpm](https://pnpm.io/installation) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nearestlibrary-landing.git
   cd nearestlibrary-landing
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

### Running Locally

To start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Building for Production

To build the project for production:

```bash
pnpm build
```

To run the built production version locally:

```bash
pnpm start
```

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvement, please follow these steps:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
