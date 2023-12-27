const express = require('express');
// const User = require('../models/UserModel')
const UserControllers = require('../controllers/UserControllers')

const router = express.Router()
router.post('/', UserControllers.addUser)
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


module.exports = router;