const mongoose = require('mongoose');

// Connect to MongoDB
const dbConnect = () =>
{
  mongoose.connect(process.env.MONGO_URL)
  mongoose.connection.on('error', error => console.log(`not connected. Reason : ${error}`))
  mongoose.connection.on('open', async () => console.log('Connected to MongoDB'))
}

const dbDisconnect = async () =>
{
  if(!mongoose.connection) return;
  mongoose.disconnect()
  mongoose.connect('close', async() => console.log('Disconnected from DB'))
}

module.exports = { dbConnect, dbDisconnect }