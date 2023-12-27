const express = require('express');
// const User = require('../models/UserModel')


const HomeRouter = express.Router()
HomeRouter.get('/', (req, res) => {res.send({msg: "ok"})})
// {
//   const { name, username } = req.body;
//   console.log('Received username:', username);
//   const user = new User({
//     name: name,
//     ig_username: username,
//   })
//   res.json({ message: 'Username received successfully', currentUrl: "http://google.com" });
//   user.save();
// }


module.exports = HomeRouter;