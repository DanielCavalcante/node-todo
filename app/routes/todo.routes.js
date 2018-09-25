const app = require('express');

module.exports = function(server) {
  const router = app.Router();
  server.use('/api', router);

  const todoService = require('../service/todo.service');
  todoService.register(router, '/todos');
};