const express = require('express');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', 'views');  // Specify the folder where the templates will be stored

// Middleware to serve static files from 'public' directory
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');  // Use the EJS template named 'index'
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});