const router = require('express').Router();
const multer = require('multer');
const db = require('../../config/mongodb');
const upload = multer({ dest: 'uploads' });

router.get('/product', (req, res) => {
    db.collection('products').find()
        .toArray()
        .then(result => res.send(result))
        .catch(error => res.send(error));
});

module.exports = router;