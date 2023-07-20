const movieRoute = require('./Route/movieRoute');
const customerRoute = require('./Route/customerRoute')
const express = require('express');
const mongoose = require('mongoose');

require('dotenv/config');

const app = express();

//Middleware
app.use(express.json());

// Default route
app.get('/', (req, res) => {
    res.send("This is default route");
})

app.use('/api/movie', movieRoute);
app.use('/api/customer', customerRoute);

async function main() {
    const data = await mongoose.connect(process.env.DB);
    console.log(data.default.STATES.connected)
}
main()

app.listen(process.env.PORT)