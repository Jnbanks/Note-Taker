const router = require("express").Router();
const path = require("path");

// GET /notes for notes.html file
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// GET * for index.html file, Home page
router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router;