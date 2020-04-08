const path = require('path');

const Product = require(path.join(__dirname, '../models/product'));
const Order = require(path.join(__dirname, '../models/order'));

module.exports = async function () {
    const product1 = new Product({
        title: 'Dell Monitor 24\'\'',
        price: 139.99,
        description: 'High-performance Monitor',
        imageUrl: 'images\\1586344827425-monitor.jpg',
        userId: '5e760e87bdddaa674c8c3635'
    });
    const product2 = new Product({
        title: 'Dell Laptop 15',
        price: 350,
        description: 'Business-oriented laptop.',
        imageUrl: 'images\\1586344878661-laptop.jpg',
        userId: '5e760e87bdddaa674c8c3635'
    });
    const product3 = new Product({
        title: 'External HDD',
        price: 39.99,
        description: '1 TB external drive!',
        imageUrl: 'images\\1586344926693-hdd.jpg',
        userId: '5e760e87bdddaa674c8c3635'
    });
    const product4 = new Product({
        title: 'Dell PC',
        price: 300,
        description: 'Dell PC - business variant.',
        imageUrl: 'images\\1586344989205-desk.jpg',
        userId: '5e760e87bdddaa674c8c3635'
    });
    const product5 = new Product({
        title: 'Graphic card!',
        price: 159.99,
        description: 'Enjoy your game time!',
        imageUrl: 'images\\1586345050135-1.jpg',
        userId: '5e760e87bdddaa674c8c3635'
    });
    const product6 = new Product({
        title: 'No Name Phone',
        price: 99.99,
        description: 'Great phone for everyday use!',
        imageUrl: 'images\\1586347708744-phone.jpg',
        userId: '5e760e87bdddaa674c8c3635'
    });


    await Order.deleteMany({});
    await Product.deleteMany({});
    await Product.collection.insertMany([product1, product2, product3, product4, product5, product6]);
};
