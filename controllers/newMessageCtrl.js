import db from "../db/queries.js";

export default async function addMessage(req, res) {
  const message = req.body;
  await db.createMessage(message);

  res.redirect("/");
}
