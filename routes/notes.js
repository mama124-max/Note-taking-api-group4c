const express = require("express");
const router = express.Router();

let notes = [
  { id: 1, title: "First Note", content: "This is a sample note." },
  { id: 2, title: "Second Note", content: "This is another sample note." }
];

// GET all notes
router.get("/", (req, res) => {
  res.json(notes);
});

// POST a new note
router.post("/", (req, res) => {
  const newNote = {
    id: notes.length + 1,
    title: req.body.title,
    content: req.body.content
  };
  notes.push(newNote);
  res.status(201).json(newNote);
});

// GET one note by id
router.get("/:id", (req, res) => {
  const noteId = parseInt(req.params.id);
  const note = notes.find((n) => n.id === noteId);

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }
  res.json(note);
});

// UPDATE a note fully (PUT)
router.put("/:id", (req, res) => {
  const noteId = parseInt(req.params.id);
  const noteIndex = notes.findIndex((n) => n.id === noteId);

  if (noteIndex === -1) {
    return res.status(404).json({ message: "Note not found" });
  }

  notes[noteIndex] = {
    id: noteId,
    title: req.body.title,
    content: req.body.content
  };

  res.json(notes[noteIndex]);
});

// UPDATE a note partially (PATCH)
router.patch("/:id", (req, res) => {
  const noteId = parseInt(req.params.id);
  const note = notes.find((n) => n.id === noteId);

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  if (req.body.title !== undefined) {
    note.title = req.body.title;
  }
  if (req.body.content !== undefined) {
    note.content = req.body.content;
  }

  res.json(note);
});

// DELETE a note
router.delete("/:id", (req, res) => {
  const noteId = parseInt(req.params.id);
  const noteIndex = notes.findIndex((n) => n.id === noteId);

  if (noteIndex === -1) {
    return res.status(404).json({ message: "Note not found" });
  }

  const deletedNote = notes.splice(noteIndex, 1);
  res.json({ message: "Note deleted successfully", note: deletedNote[0] });
});

module.exports = router;
