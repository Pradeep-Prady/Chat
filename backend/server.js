const app = require("./app");
const path = require("path");


const connectDatabase = require("./config/database");


connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server Started ar Port: ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the server due to the unhandledRejection error`);
  server.close(() => {
    process.exit(1);
  });
});

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the server due to the uncaughtException error`);
  server.close(() => {
    process.exit(1);
  });
});

 