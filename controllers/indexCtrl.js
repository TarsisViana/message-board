import db from "../db/queries.js";

export async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
  });
}
