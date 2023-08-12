const mongoose = require("mongoose");
const Pusher = require("pusher");
const User = require("../models/userModel");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(
        `Mongodb is connected to the host ${con.connection.host} this is Narikoootam`
      );
    })
    .catch((e) => {
      console.log("Failed to connect", e);
    });
};

const pusher = new Pusher({
  appId: "1649100",
  key: "063411480e1c559a7529",
  secret: "8640ab9c04d92c06f903",
  cluster: "ap2",
  useTLS: true,
});

// const db = mongoose.connection;

// db.once("open", () => {
//   const chatCollection = db.collection("chats");
//   const changeStream = chatCollection.watch();

//   changeStream.on("change", (change) => {
//     if (change.operationType === "insert") {
//       const messageDetails = change.fullDocument;
//       pusher.trigger("messages", "inserted", {
//         createdAt: messageDetails.createdAt,
//         text: messageDetails.text,
//         user: messageDetails.user,
//         name: messageDetails.name,
//         avatar: messageDetails.avatar,
//       });
//     } else {
//       console.log("Error triggering Pusher");
//     }
//   });
// });

const db = mongoose.connection;

db.once("open", () => {
  const chatCollection = db.collection("chats");
  const changeStream = chatCollection.watch();

  changeStream.on("change", async (change) => {
    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;

      try {
        // Assuming messageDetails.user is an ObjectId
        const user = await User.findById(messageDetails.user);
       
        if (user) {
          const userObj = {
            _id: user._id,
            name: user.name,
            avatar: user.avatar,
          };

          pusher.trigger("messages", "inserted", {
            createdAt: messageDetails.createdAt,
            text: messageDetails.text,
            user: userObj,
          });
           
        } else {
          console.log("User not found");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    } else {
      console.log("Error triggering Pusher");
    }
  });
});

module.exports = connectDatabase;
