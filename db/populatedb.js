import pg from "pg";
const { Client } = pg;

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
    connectionString: `postgresql://${process.env.USER}:${process.env.USER_PASSWORD}@${process.env.HOST}:${process.env.DEFAULT_PORT}/${process.env.DATABASE}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
