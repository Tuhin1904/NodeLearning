const express = require("express");

const  { 
        handleGetAllUsersById, 
        handleGetAllUsers, 
        handleUpdateUserById, 
        handleDeleteUserById,
        handleCreateNewUser
       } = require("../controllers/user")
       
const router = express.Router();


router.route('/')
    .get(handleGetAllUsers).post(handleCreateNewUser)

router.
    route('/:id')
    .get(handleGetAllUsersById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById)


module.exports = router;

// router.get('/users',async(req, res)=>{
//     const allDbUsers = await User.find({});
//     const html =  `
//     <ul>
//        ${allDbUsers.map((user, index) => `<li> ${user.firstName} and index position is: ${index} </li>`).join(" ")}
//     </ul>
//     `
//     res.send(html);
// })

// router.get('/', handleGetAllUsers);