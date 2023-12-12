const express = require('express');
const router = express.Router();
const Comment = require('../controller/CommentController');
const Authentication = require('../middleware/CommentVerify')

//komentar baru
router.post('/comment', Authentication, Comment.createComment);

// All Comment
router.get('/comments', Comment.getAllComments);

// Komentar berdasarkan ID
router.get('/comments/:id', Comment.getCommentById);

// Komentar berdasarkan ID
router.delete('/comments/:id', Comment.deleteComment);

module.exports = router;