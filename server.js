const express = require('express');
const path = require('path');
//const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');

const PORT = process.env.port || 3001;

const app = express();

// Import custom middleware, "cLog"
//app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET /notes for notes.html file
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/js/notes.html'))
);

// GET * for index.html file
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/js/index.html'))
);

// GET /api/notes for the db.json file to return all saved notes as JSON
app.get('/api/notes', (req, res) =>
  res.readFile(path.join(__dirname, 'db.json'))
);

// POST /api/notes for recieving new notes to save on the request body, add it to the db.json file, and then return the new note to the client
app.post('/api/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'db.json'))
);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
