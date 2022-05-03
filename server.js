const express = require('express');
const app = express();
const PORT = process.env.port || 3001;

//const fs = require('fs');
const path = require('path');

//const api = require('./public/index');

const routes = require('./controllers/routes');

// Middleware for parsing JSON and urlencoded form data
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes)
app.use('/api', api);

app.delete('/api/notes/:title', (req, res) => {

})

app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT} 🚀`)
);
