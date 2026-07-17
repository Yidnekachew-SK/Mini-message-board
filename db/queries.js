const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query('SELECT * FROM messages');
    return rows;
}

async function insertMessage(users, message, date) {
  await pool.query("INSERT INTO messages (users, message, date) VALUES ($1, $2, $3)", [users, message, date]);
}

async function getMessageById(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = ($1)", [id]);
  return rows;
}

module.exports = {
  getAllMessages,
  insertMessage,
  getMessageById,
};