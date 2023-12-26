const Grocery = require('../model/Grocery');

// Controller methods
exports.addGroceryItem = async (req, res) => {
  try {
    const newItem = await Grocery.create(req.body);
    res.status(201).json({ message: 'Item added to inventory', item: newItem });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllGroceryItems = async (req, res) => {
  try {
    const items = await Grocery.find();
    console.log(`items are : ${items}`)
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
