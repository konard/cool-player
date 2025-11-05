# Cool Player

A modern video player UI built with Next.js, React, and TypeScript. This project features a custom video player interface with controls, progress tracking, and a chat system.

## Features

- Custom video player UI with play/pause controls
- Progress bar with seeking functionality
- Volume control
- Fullscreen mode
- Integrated chat system
- Responsive design with Material-UI v6
- Built with TypeScript for type safety

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript 5.6
- **UI Library**: Material-UI (MUI) v6
- **Video Player**: react-player
- **Styling**: Emotion (CSS-in-JS)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Romanxz/cool-player.git
cd cool-player
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build the application for production:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Type Checking

Run TypeScript type checking:

```bash
npm run type-check
```

### Linting

Run ESLint:

```bash
npm run lint
```

## Project Structure

```
cool-player/
├── src/
│   ├── components/
│   │   ├── playerui/           # Player UI components
│   │   │   ├── chat/           # Chat system
│   │   │   ├── menu/           # Control menu
│   │   │   ├── progressbar/    # Progress bar
│   │   │   └── playerui.tsx    # Main player UI
│   │   ├── root.tsx            # Root layout component
│   │   └── theme/              # Theme configuration
│   ├── pages/
│   │   ├── _app.tsx            # Next.js app wrapper
│   │   ├── _document.tsx       # Document structure
│   │   └── index.tsx           # Main page
│   ├── styles/
│   │   └── globals.css         # Global styles
│   └── types/
│       └── player.types.ts     # TypeScript type definitions
├── public/                     # Static assets
├── next.config.js              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and not licensed for public use.
