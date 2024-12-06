const User = require("../models/users")

async function handleGetAllUsers(req, res){
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}
async function handleGetAllUsersById(req, res){
    const user = await User.findById(req.params.id)
        if(!user) return res.status(404).json({error: 'user not found'});
        return res.json(user);
    
}
async function handleUpdateUserById(req, res){
    const user = await User.findByIdAndUpdate(req.params.id,{ lastName: 'LastnameupdatedtoDas'})
        if(!user) return res.status(404).json({error: 'user not found'});
        return res.json({...user, msg:'Updated!'});
}
async function handleDeleteUserById(req, res){
    const user = await User.findByIdAndDelete(req.params.id)
         if(!user) return res.status(404).json({error: 'user not found'});
        return res.json({ msg:`Deleted ${user.firstName}!`});
}

async function handleCreateNewUser(req, res){
    const body = req.body;
    if (!body || !body.firstName || !body.lastName || !body.email) {
        return res.status(400).json({ msg: 'Fields are required' })
    }

    const result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email

    })
    return res.status(201).json({ msg: `User ${body.firstName} created!` })
}

module.exports = {handleGetAllUsers, handleGetAllUsersById, handleUpdateUserById, handleDeleteUserById,handleCreateNewUser}