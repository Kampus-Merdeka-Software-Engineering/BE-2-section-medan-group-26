const express = require('express');
const app = express();

// Endpoint untuk halaman berita dan komentar
app.get('/news/:id', (req, res) => {
  const newsId = req.params.id;
})

// Endpoint komentar (metode POST)
app.post('/comments', (req, res) => {
  const { username, comments } = req.body;

  // Query untuk menyimpan komentar baru ke database
  const insertComment = 'INSERT INTO comments (username, comments, news_id) VALUES (?, ?, ?)';
  db.query(insertComment, [username, comments], (err, results) => {
    if (err) {
      console.error('Error during comment creation:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    res.send('Komentar berhasil ditambahkan!');
  });
});
