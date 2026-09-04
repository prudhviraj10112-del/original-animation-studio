import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Original Animation Studio Backend is running',
    timestamp: new Date().toISOString(),
    version: '0.1.0'
  });
});

export default router;