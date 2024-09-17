const express = require('express');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3000
const foodRoutes = require('./routes/foodRoutes');


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World from the Ghibli Food API')
});

app.use('/api', foodRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})