import "dotenv/config";
import pg from "pg";
const { Client } = pg;

const test =
  "postgresql://tarsis:Qu4Os9NpYOcr4CHtFHSv8MxUV7f08xbg@dpg-crk2cet2ng1s73fnjkq0-a.frankfurt-postgres.render.com/message_board_3blw";

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(255),
  msgtext TEXT,
  added TIMESTAMP
);

INSERT INTO messages (username, msgtext, added) 
VALUES
  ('Bryan', 'Hey, this is a test', '${newDate()}'),
  ('Odin', 'Hello World!', '${newDate()}'),
  ('Damon', 'Hi there!', '${newDate()}')
`;

function newDate() {
  return new Date().toISOString().slice(0, 19).replace("T", " ");
}

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.USER}:${process.env.USER_PASSWORD}@${process.env.HOST}:${process.env.DEFAULT_PORT}/${process.env.DATABASE}?ssl=true`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
//`postgresql://${process.env.USER}:${process.env.USER_PASSWORD}@${process.env.HOST}:${process.env.DEFAULT_PORT}/${process.env.DATABASE}`
