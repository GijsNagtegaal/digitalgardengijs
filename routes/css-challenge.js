import { Router } from 'express';

const router = Router();

router.get('/challenges', (req, res) => {
  res.render('css-challanges.liquid');
});

export default router;
