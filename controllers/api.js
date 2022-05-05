const router = require("express").Router();
const fs = require('fs');
const uuid = require("uuid");


router.get('/api/notes', (req, res) => {
    fs.readFile("./db.json", "utf-8", (err, data) => {
        if(err) {
            throw err
        }
        const parse = JSON.parse(data)
        res.json(parse)
    })
}
);

//create a note
router.post("/api/notes", function(req, res) {
    const newNote = req.body;
    fs.readFile("./db.json", "utf-8", (err, data) => {
        if(err) {
            throw err
        }
        const parse = JSON.parse(data)
        newNote.id = uuid.v1();
        parse.push(newNote);
        fs.writeFile("./db.json", JSON.stringify(parse), (err) => {
            if(err) {
                console.log(err)
                throw err
            }
            res.status(201).json(newNote);
        })
    })
} )

//delete
router.delete("/api/notes/:id", function(req, res) {
    fs.readFile("./db.json", "utf-8", (err, data) => {
        if(err) {
            throw err
        }
        const parse = JSON.parse(data)
        const newArr = parse.filter(note => {
            if (note.id == req.params.id) {
                return false;
            } else {
                return true;
            }
        });
        fs.writeFile("./db.json", JSON.stringify(newArr), (err) => {
            if(err) {
                console.log(err)
                throw err
            }
            res.status(201).json(newArr);
        })
    })
} )

module.exports = router;




// fs.readFile("db/db.json","utf-8", (err, data) => {
//     if (err) throw err;
//     var notes = JSON.parse(data);

// })
// POST /api/notes for recieving new notes to save on the request body, add it to the db.json file, and then return the new note to the client