const Comment = require('../model/comment');

// Membuat komentar baru
const createComment = async (req, res) => {
  try {
    const { comment, username } = req.body;
    const newComment = await Comment.create({ comment, username });
    res.status(201).json(newComment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Terjadi kesalahan dalam membuat komentar' });
  }
};

// Menampilkan semua komentar
const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.json(comments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Terjadi kesalahan dalam mengambil komentar' });
  }
};

const deleteComment = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedComment = await Comment.destroy({ where: { comment_id: id } });
      if (!deletedComment) {
        res.status(404).json({ message: 'Komentar tidak ditemukan' });
        return;
      }
      res.json({ message: 'Komentar berhasil dihapus' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Terjadi kesalahan dalam menghapus komentar' });
    }
  }

module.exports = {
    createComment,
    getAllComments,
    deleteComment,
}
