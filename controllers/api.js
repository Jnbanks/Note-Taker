// const router = require("express").Router();
// const data = require("../db/db.json");
// const fs = require('fs');

// router.get('/notes', (req, res) => {
//     console.log(data);
//     res.send(data)
// }
// );

// router.post("/notes", function(req, res) {
//     let newNote = req.body;

// } )

// module.exports = router;




// fs.readFile("db/db.json","utf-8", (err, data) => {
//     if (err) throw err;
//     var notes = JSON.parse(data);

// })
// POST /api/notes for recieving new notes to save on the request body, add it to the db.json file, and then return the new note to the client