const jwt = require('jsonwebtoken');
const User = require('../../Model/userModel');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email === 'admin@gmail.com' && password === 'adminabc') {
      const token = jwt.sign({ email }, 'your_jwt_secret_key', {
        expiresIn: '1h',
      });
      return res.json({ message: 'Admin Login Successful', token });
    }

    const user = await User.findOne({ email });
    if (user) {
      if (user.password === password) {
        const token = jwt.sign({ email }, 'your_jwt_secret_key', {
          expiresIn: '1h',
        });
        res.json({ message: 'User Login Successful', token });
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = login;
