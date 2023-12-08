const express = require('express');
const app = express.Router();

router.get('/', (req, res) => {
    res.send('Hello world!');
});

module.exports = router;



const express = require('express');
const router = express.Router();

const postController = require('../BE-2-section-medan-group-26/controller/post.controller');

router.get('/', postController.findAll);
router.get('/:id', postController.getById);
router.post('/', postController.create);
router.put('/:id', postController.update);
router.delete('/:id', postController.delete);

module.exports = router;