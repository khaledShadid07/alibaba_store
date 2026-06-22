const User = require('../models/user.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()



exports.getAllUsers = async (req, res) => {
  try {

    const users = await User.find()
    res.status(200).json(users)

  }

  catch (error) { res.status(500).json({ message: error.message }) }

}


exports.register = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) { return res.status(400).json({ message: 'Email and password are required.' }) }

  try {
    const existUser = await User.findOne({ email: email }).exec();
    if (existUser) { return res.status(409).json({ message: 'email already registerd' }) }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new User({
      email,
      password: hashedPassword
    })

    await newUser.save()

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1d' })

    res.status(201).json({ token, user: newUser })

  }

  catch (error) {
    console.error('Registration error:', error.message);
    res.status(500).json({ message: 'An internal server error occurred.' });

  }
}


exports.logIn = async (req, res) => {
  const { email, password } = req.body
  // Input Validation (Early return)
  if (!email || !password) { return res.status(400).json({ message: 'Email and password are required.' }) }

  try {
    const userExist = await User.findOne({ email: email })
    if (!userExist) { return res.status(400).json({ message: 'invalid credintails' }) }

    const passMatch = await bcrypt.compare(password, userExist.password)
    if (!passMatch) { return res.status(400).json({ message: 'invalid credintails' }) }

    const token = jwt.sign({ id: userExist._id }, process.env.JWT_SECRET, { expiresIn: '1d' })
    res.status(200).json({ token, userExist, message: 'Login successful. You are now securely authenticated.' })
  }

  catch (error) { res.status(500).json({ message: error.message }) }


}