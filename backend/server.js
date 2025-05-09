const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('MealJoin backend is running');
});

app.get('/meals', (req, res) => {
    const meals = [
      { id: 1, name: 'Spaghetti Bolognese', price: 15 },
      { id: 2, name: 'Chicken Curry', price: 18 },
      { id: 3, name: 'Grilled Salmon', price: 20 },
    ];
  
    res.json(meals);
});

app.post('/meals', (req, res) => {
    const { name, price } = req.body;
  
    if (!name || !price) {
      return res.status(400).json({ message: 'Name and price are required' });
    }
  
    const newMeal = {
      id: Date.now(),
      name,
      price,
    };
  
    // Database to be added.
    // Simulating with HTTP request for now.
  
    res.status(201).json(newMeal);
  });
  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
