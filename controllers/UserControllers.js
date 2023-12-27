const { dbConnect } = require('../db/dbConnection')
const UserModel = require('../models/UserModel')
module.exports = {
  
  addUser: async (req, res) =>
  {
    const { name, username } = req.body
    try
    {
      let userData = await UserModel.find({ "$or": [{ name: name }, { ig_username: username }] });
      if(!userData)
      {
        // console.log("already exist !!!")
        res.send({ message: "😊 User already Exists 😊" })
        return;
      } else
      {
        const data = {
          name: name,
          ig_username: username
        }
        const user = await UserModel.create(data)
        const result = await user.save();
        res.send({message: "Data updated", status: 2})
        // isReffered ? datas.isReffered = 0 : datas.isReffered = 1;
      }
    } catch (error) {
      console.log(error);
      res.send({message: error})
    }
  } 
}