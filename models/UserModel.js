let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  // username: {
  //   type: String,
  //   require: true,
  //   unique: true
  // },
  ig_username: {
    type: String,
    require: true,
    unique: true
  },
  // password: {
  //   type: String,
  //   require: true,
  //   minLength: 6
  // },
  // refered_username: {
  //   type: String,
  //   required: true
  // }
})

// userSchema.pre('save', function (next)
// {
//   if(this.password && this.isModified('password'))
//   {
//     bcrypt.hash(this.password, 10, (err, hashed) =>
//     {
//       if(err) return next(err)
//       this.password = hashed;
//       next();
//     });
//   } else
//   {
//     next()
//   }
// })

let User = mongoose.model('User', userSchema);

module.exports = User;