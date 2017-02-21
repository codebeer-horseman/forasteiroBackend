import express from 'express';
import apiUser from '../controllers/apiUsers';

let router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {title: 'Pug - Fun', currentTime: req.requestTime});
});

router.use('/users', apiUser.getAll);

export default router;
