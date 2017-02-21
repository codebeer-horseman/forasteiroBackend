import express from 'express';
import apiUser from '../controllers/apiUsers';

let router = express.Router();

router.get('/api/v1', (req, res) => {
    res.render('index', {title: 'Pug - Fun', currentTime: req.requestTime});
});

router.use('/api/users/v1', apiUser.getAll);

export default router;
