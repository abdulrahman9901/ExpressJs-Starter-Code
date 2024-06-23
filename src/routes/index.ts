import express from 'express';

const router = express.Router();

router.get('/', (_req, _res) => {
  console.log('this is index main route');
  _res.send('this is index main route');
});

export default router;
