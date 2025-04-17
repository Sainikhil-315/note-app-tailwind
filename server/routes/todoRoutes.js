const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const auth = require('../middleware/auth');

router.use(auth);

router.get('/', todoController.getAllTodos);

router.post('/', todoController.createTodo);

router.put('/:id', todoController.toggleTodoStatus);

router.delete('/:id', todoController.deleteTodo);

module.exports = router;