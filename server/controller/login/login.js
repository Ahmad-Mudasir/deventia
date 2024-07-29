const User = require('../../Model/userModel');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the credentials match the admin credentials
        if (email === 'Admin@gmail.com' && password === 'adminabc') {
            return res.send('Admin Login Successful');
        }

        // If not admin, proceed with user login
        const user = await User.findOne({ email: email });
        if (user) {
            if (user.password === password) {
                res.send('User Login Successful');
            } else {
                res.send('Invalid email or password');
            }
        } else {
            res.send('User not found');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
};

module.exports = login;
