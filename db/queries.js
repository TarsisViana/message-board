import pool from "./pool.js";

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM MESSAGES");
  return rows;
}
async function createMessage(message) {
  await pool.query(
    `INSERT INTO messages (username, msgtext, added) VALUES ($1,$2,$3)`,
    [message.name, message.messageText, newDate()]
  );
}

function newDate() {
  return new Date().toISOString().slice(0, 19).replace("T", " ");
}

const db = { getAllMessages, createMessage };
export default db;
