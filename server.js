const express = require('express');

const app = express();

app.use(express.json());

const PORT = 3000;


let users = [
    {
        id: 1,
        name: "Het",
        role: "Backend Intern"
    },
    {
        id: 2,
        name: "Rahul",
        role: "Frontend Developer"
    }
];


// Home Route
app.get('/', (req, res) => {
    res.json({
        message: "Server is running successfully!"
    });
});


// GET Users
app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {

    const userId = parseInt(req.params.id);

    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json(user);

});

// Products Route
app.get('/products', (req, res) => {
    res.json([
        {
            id: 101,
            product: "Laptop",
            price: 50000
        },
        {
            id: 102,
            product: "Phone",
            price: 25000
        }
    ]);
});


// POST User
app.post('/users', (req, res) => {

    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        role: req.body.role
    };

    users.push(newUser);

    res.json({
        message: "User added successfully!",
        data: newUser
    });

});


// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});