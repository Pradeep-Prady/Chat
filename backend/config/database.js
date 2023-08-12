const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(
        `MongoDB is connected to the host:${con.connection.host} This is Chat`
      );
    })
    .catch(() => {
      console.log("Failed to connect to MongoDB");
    });
};

module.exports = connectDatabase;
