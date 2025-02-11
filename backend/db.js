const mongoose = require('mongoose');

const mongouri = 'mongodb+srv://himajathota1995:Himaja02@cluster0.oeoj4.mongodb.net/Delicious?retryWrites=true&w=majority&appName=Cluster0';

const mongodb = async () => {
  try {
    // Using async/await to handle the connection
    await mongoose.connect(mongouri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB successfully");

    // Querying the "zomato" collection
    const z = mongoose.connection.db.collection("zomato");
    const data = await z.find({}).toArray(); // Using async/await to handle the promise
    console.log(); // Data is now available
  } catch (error) {
    console.error("Error connecting to MongoDB or fetching data:", error);
  }
};

module.exports = mongodb;
