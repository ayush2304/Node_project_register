const parents = require('express').Router();
const multer = require('multer');


var parentController = require('./parent_controller');

  // todoList Routes
  
parents.get('/', parentController.list_all_parents);
parents.post('/', parentController.create_a_parent);

parents.get('/:parentId', parentController.read_a_parent);
parents.put('/:parentId', parentController.update_a_parent);
parents.delete('/:parentId', parentController.delete_a_parent);


module.exports = parents;


