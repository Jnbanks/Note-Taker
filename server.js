//Dependencies
const express = require('express');
const path = require('path');
const routes = require("./controllers/routes");
const apiRoutes = require("./controllers/api");

//Asynchronous Processes
// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);

//Server
const app = express();
const PORT = process.env.port || 3001;


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Static Middleware
app.use(express.static('public'));
app.use(apiRoutes);
app.use(routes);


// // GET /notes for notes.html file
// app.get('/notes', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/notes.html'))
//   );

// // GET * for index.html file, Home page
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );

app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT} 🚀`)
);

// //Get Request for user input
// app.get("/api/notes", (req, res) => {
//     readFileAsync("./db.json", "utf8").then(function(data) {
//         notes = [].concat(JSON.parse(data))
//         res.json(notes);
//     })
// });

// //Post Request for user input
// app.post("/api/notes", (req, res) => {
//     const note = req.body;
//     readFileAsync("./db.json", "utf8").then(function(data) {
//         const notes = [].concat(JSON.parse(data));
//         note.id = uuid.v1();
//         notes.push(note);
//         return notes;
//     }).then(function(notes) {
//         writeFileAsync("./db.json", JSON.stringify(notes))
//         res.json(note);
//     })  
// });

// //Get a note with specific id
// app.get("/api/notes/:title", (req, res) => {
//     res.json(notes[req.params.title]);
// })

// //Delete a note with specific id
// app.delete('/api/notes/:title', (req, res) => {
//     notes.splice(req.params.id);
//     console.log("Deleted note with id "+req.params.title);
// });



//const api = require('./public/index');
//const routes = require('./controllers/routes');
//app.use("/", routes)
//app.use('/api', api);