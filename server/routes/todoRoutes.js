const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const auth = require('../middleware/auth');

// Apply auth middleware to all todo routes
router.use(auth);

// GET /api/todos - Get all todos
router.get('/', todoController.getAllTodos);

// POST /api/todos - Create a new todo
router.post('/', todoController.createTodo);

// PUT /api/todos/:id - Toggle todo status
router.put('/:id', todoController.toggleTodoStatus);

// DELETE /api/todos/:id - Delete a todo
router.delete('/:id', todoController.deleteTodo);

module.exports = router;