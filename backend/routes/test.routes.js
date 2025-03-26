import express from 'express';
const router = express.Router();

router.get('/env-test', (req, res) => {
  // Only check if values exist, don't log the actual values
  const envStatus = {
    IK_URL_ENDPOINT: !!process.env.IK_URL_ENDPOINT,
    IK_PUBLIC_KEY: !!process.env.IK_PUBLIC_KEY,
    IK_PRIVATE_KEY: !!process.env.IK_PRIVATE_KEY
  };
  res.json(envStatus);
});

export default router; 