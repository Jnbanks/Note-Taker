//Dependencies
const express = require('express');
const util = require("util");
const fs = require('fs');
const path = require('path');
const uuid = require("uuid");
console.log(uuid.v1());

//Asynchronous Processes
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//Server
const app = express();
const PORT = process.env.port || 3001;


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Static Middleware
app.use(express.static('public'));


//Get Request for user input
app.get("/api/notes", (req, res) => {
    readFileAsync("./db.json", "utf8").then(function(data) {
        notes = [].concat(JSON.parse(data))
        res.json(notes);
    })
});

//Post Request for user input
app.post("/api/notes", (req, res) => {
    const note = req.body;
    readFileAsync("./db.json", "utf8").then(function(data) {
        const notes = [].concat(JSON.parse(data));
        note.id = uuid.v1();
        notes.push(note);
        return notes;
    }).then(function(notes) {
        writeFileAsync("./db.json", JSON.stringify(notes))
        res.json(note);
    })  
});

app.delete('/api/notes/:title', (req, res) => {
    
});

// GET /notes for notes.html file
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET * for index.html file, Home page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT} 🚀`)
);










//const api = require('./public/index');
//const routes = require('./controllers/routes');
//app.use("/", routes)
//app.use('/api', api);