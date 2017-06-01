const express = require('express');
const router = express.Router();
const Note = require('../models/note');

// GET - fetching data ffrom the database
// POST - creating anew doc
// PUT - updating an existing doc
// DELETE - destroy extisting doc

// Notes Index, getting all of the notes
router.get('/', (req, res) => {
  Note.find( ( err, notes) => {
    res.json(notes);
  });
});

// creating a new note or doc
router.post('/', (req, res) => {
  let { title, body } = req.body;
  new Note({
    title,
    body
  }).save( (err, note) => {
    if (err)
      return res.json(err);
    return res.json(note);
  });
});

// update existing note or docs
router.put('/:id', (req, res) => {
  let { title, body } = req.body;
  Note.findByIdAndUpdate(
    req.params.id,
    { $set: { title, body, updatedAt: Date.now() }},
    { new: true },
    ( err, note) => {
      if (err)
        return res.json(err)
      return res.json(note)
    }
  )
});

// Destroy existing note or doc
router.delete('/:id', (req, res) => {
  Note.findByIdAndRemove(req.params.id, (err) => {
    if (err)
      return res.json(err)
    return res.sendStatus(204);
  });
});

module.exports = router;