const path = require("path");

const dbPath = path.resolve(__dirname, "database/products.db");

const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true,
});

knex.schema
  .hasTable("products")
  .then((exists) => {
    if (!exists) {
      return knex.schema
        .createTable("products", (table) => {
          table.increments("id").primary();
          table.string("name");
          table.string("category");
          table.string("price");
        })
        .then(() => {
          console.log("Table 'products' created");
        })
        .catch((error) => {
          console.error(`Error when creating table: ${error}`);
        });
    }
  })
  .then(() => {
    console.log("done");
  })
  .catch((error) => {
    console.error(`Error configuring database: ${error}`);
  });

// knex
//   .select("*")
//   .from("products")
//   .then((data) => console.log("data:", data))
//   .catch((err) => console.log(err));

module.exports = knex;
