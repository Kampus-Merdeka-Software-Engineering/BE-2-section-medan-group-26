const { DataTypes } = require('sequelize')
const db = require('../config/database.js');
const User = require('./username.js');

const Comment = db.define("comments", {
    comment_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      references: {
        model: Username,
        key: 'username',
      },
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
    }, {
      freezeTableName: true,
    });


// WARNING! KODE DI BAWAH BERFUNGSI UNTUK MEMBUAT TABLE BARU ATAU UPDATE TABLE TAPI DENGAN MENGHAPUS SEMUA VALUE YG ADA 
// db.sync({ alter: true }) // kalo mau menambahkan agar data tidak ke reset semua ganti force jadi alt: true
// .then(() => {
//     console.log(`comment synced`)
// })
// .catch((error) => console.log(`Unable to connect to databse: ${error}`));

module.exports = Comment;