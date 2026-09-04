import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Routes
import healthRoute from './routes/health.js';
import projectsRoute from './routes/projects.js';
import storyRoute from './routes/story.js';
import charactersRoute from './routes/characters.js';
import locationsRoute from './routes/locations.js';
import storyboardRoute from './routes/storyboard.js';
import videoRoute from './routes/video.js';
import jobsRoute from './routes/jobs.js';
import audioRoute from './routes/audio.js';
import renderRoute from './routes/render.js';

// Middleware
import { errorHandler } from './middleware/errorHandler.js';
import { corsConfig } from './middleware/cors.js';

// Initialize
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsConfig));

// Health Check
app.use('/api/health', healthRoute);

// Routes
app.use('/api/projects', projectsRoute);
app.use('/api/story', storyRoute);
app.use('/api/characters', charactersRoute);
app.use('/api/locations', locationsRoute);
app.use('/api/storyboard', storyboardRoute);
app.use('/api/video', videoRoute);
app.use('/api/jobs', jobsRoute);
app.use('/api/audio', audioRoute);
app.use('/api/render', renderRoute);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    path: req.path
  });
});

// Error Handler
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`🎬 Original Animation Studio Backend`);
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📍 API Documentation: http://localhost:${PORT}/api`);
});

export default app;