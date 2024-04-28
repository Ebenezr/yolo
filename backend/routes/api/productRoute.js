const express = require('express');
const router = express.Router();

// Product Model
const Product = require('../../models/Products');

// @route GET /products
// @desc Get ALL products
router.get('/', async (req, res) => {
  try {
    // Fetch all products from database
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.log(error);
  }
});

// @route POST /products
// @desc  Create a product
router.post('/', async (req, res) => {
  // Create a product item
  const newProduct = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
  });

  try {
    const product = await newProduct.save();
    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to save product' });
  }
});
// @route PUT api/products/:id
// @desc  Update a product
router.put('/:id', async (req, res) => {
  // Update a product in the database
  try {
    await Product.updateOne(
      { _id: req.params.id },
      {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
        photo: req.body.photo,
      },
      { upsert: true }
    );
    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.json({ success: false });
  }
});
// @route DELETE api/products/:id
// @desc  Delete a product
router.delete('/:id', async (req, res) => {
  // Delete a product from database
  try {
    await Product.deleteOne({ _id: req.params.id });
    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.json({ success: false });
  }
});

module.exports = router;
