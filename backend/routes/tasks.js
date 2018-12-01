const express = require('express');
const Tasks = require('../model/tasks');
const router = express.Router();

// Get all
router.get('/', (req, res) => {
  Tasks.getAll()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

// Add task
router.post('/', (req, res) => {
  Tasks.createTask(req.body)
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((error) => {
      res.status(500).json(error);
    })
});

// Edit task
router.put('/', (req, res) => {
  Tasks.updateTask(req.body.filter, req.body.task)
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((error) => {
      res.status(500).json(error);
    })
});

// Delete task
router.delete('/', (req, res) => {
  Tasks.deleteTask(req.body)
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((error) => {
      res.status(500).json(error);
    })
});

module.exports = router;
