# YouTube Project

A full-stack YouTube-like application with video upload, streaming, and user management capabilities.

## Project Structure

```
youtube-project/
├── apps/
│   ├── backend/     # Express.js API server
│   └── frontend/    # React + Vite application
├── packages/        # Shared code and utilities
└── docs/           # Documentation
```

## Tech Stack

### Backend
- Node.js + Express.js
- MongoDB + Mongoose
- JWT Authentication
- Cloudinary (media storage)
- Multer (file uploads)

### Frontend
- React 19
- Vite
- Tailwind CSS
- ESLint

## Getting Started

### Prerequisites
- Node.js >= 18.0.0
- MongoDB
- npm >= 9.0.0

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env` in `apps/backend`
   - Fill in your configuration values

### Development

Run both frontend and backend:
```bash
npm run dev
```

Run backend only:
```bash
npm run dev:backend
```

Run frontend only:
```bash
npm run dev:frontend
```

### Build

Build all apps:
```bash
npm run build
```

## License

ISC
