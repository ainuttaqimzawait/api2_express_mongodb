const fs = require('fs');
const path = require('path');
const Product = require('./model');

const index = (req, res) => {
    Product.find()
        .then(result => res.send({
            status: 'success',
            Response: result
        }))
        .catch(error => res.send(error));
}

const store = (req, res) => {
    const { name, price, stock, status } = req.body;
    const image = req.file;
    if (image) {
        const target = path.join(__dirname, '../../uploads', image.originalname);
        fs.renameSync(image.path, target);
        Product.create({ name, price, stock, status, image_url: `http://localhost:3000/public/${image.originalname}` })
            .then(result => res.send({
                status: 'success',
                Response: result
            }))
            .catch(error => res.send(error));
    }
}

module.exports = {
    index,
    store
};