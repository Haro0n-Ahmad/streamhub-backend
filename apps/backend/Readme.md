# Backend API

Express.js backend server for the YouTube project.

## Features

- User authentication (JWT)
- Video upload and management
- MongoDB database with Mongoose
- Cloudinary integration for media storage
- File upload with Multer

## Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

## Development

```bash
npm run dev
```

## Production

```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user
- `POST /api/users/logout` - Logout user

### Videos
- `GET /api/videos` - Get all videos
- `POST /api/videos` - Upload video
- `GET /api/videos/:id` - Get video by ID
- `PATCH /api/videos/:id` - Update video
- `DELETE /api/videos/:id` - Delete video
