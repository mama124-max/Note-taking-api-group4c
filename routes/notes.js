const express = require("express");
const router = express.Router();

let notes = [];

// GET all notes
router.get("/", (req, res) => {
  res.json(notes);
});

// CREATE a new note: YOREKA ALBERT
router.post("/", (req, res) => {
  if (!req.body.title || !req.body.content) {
    return res.status(400).json({ message: "Title and content are required" });
  }
  const newNote = {
    id: notes.length + 1,
    title: req.body.title,
    content: req.body.content
  };
  notes.push(newNote);
  res.status(201).json(newNote);
});

// TODO: GET one note by id — add your route here
// router.get("/:id", (req, res) => { ... });

// TODO: UPDATE a note fully (PUT) — add your route here
// router.put("/:id", (req, res) => { ... });

// TODO: UPDATE a note partially (PATCH) — add your route here
// router.patch("/:id", (req, res) => { ... });

// TODO: DELETE a note — add your route here
// router.delete("/:id", (req, res) => { ... });

module.exports = router;