const moongose = require('mongoose')

const userSchema = new moongose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
   
}, {timestamps: true})


const User = moongose.model('user',userSchema);

module.exports = User