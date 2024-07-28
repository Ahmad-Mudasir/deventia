const User = require('../../Model/userModel')
const login = async(req,res)=>{
    try {
        const {email,password}= req.body;
        const user = await User.findOne({ email: email });
        if(user){
            if (user.password === password) {
                res.send('Login Successful');
            } else {
                res.send('Invalid email or password');
            }
        }else{
            res.send('user not found ');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
}

module.exports = login;