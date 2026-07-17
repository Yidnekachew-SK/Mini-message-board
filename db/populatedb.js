const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  users VARCHAR (50),
  message VARCHAR (200),
  date DATE
);

INSERT INTO messages (users, message, date) 
VALUES
  ('Yidnekachew', 'Welcome to the message board!', '2026-07-17')
`;

console.log('db url', process.env.DB_URL)
async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DB_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();