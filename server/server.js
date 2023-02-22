const express = require('express');
const cors = require('cors')
const app = express();

app.use(express.json()); ///when we want to be able to accept JSON
app.use(cors());

const SERVER_PORT = 5050;

const inventory = [
    'Computer',
    'Purse',
    'Hammer',
    'Cable',
    'Helmet',
    'Phone',
    'Tacos',
    "Coat",
    "Charger",
    "Bag"
];

app.get('/api/inventory', (req, res) => {
    if (req.query.item) {
        const filteredItems = inventory.filter(invItem => invItem.toLowerCase().includes(req.query.item.toLowerCase()))

        res.status(200).send(filteredItems)
    } else {
        res.status(200).send(inventory)
    }
});

app.get('/api/inventory/:index', (req, res) => {
    res.status(200).send(inventory[+req.params.index])
});


app.listen(SERVER_PORT, () =>
    console.log(`Server listening on port ${SERVER_PORT}`)
);