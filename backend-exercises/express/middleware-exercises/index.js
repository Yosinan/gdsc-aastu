//importing/requiring necessary modules
const express = require('express')
const bodyParser = require('body-parser')
const data = require('./data.json')

//creating express app
const app = express()
app.use(bodyParser.json())

//signin route that handles a POST request
app.post('/signin', (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

	//compare the body's password with if the user is found in the array of users object
	const user = data.users.find(u => u.email === email);

	if(!user) {
		return res.status(401).json({ error: 'invalid email'})
	}

	if (user.password !== password) {
    return res.status(401).json({ error: 'Invalid password' });
  }

  req.session.user = user;
  return res.status(200).json({ message: 'You have Signed in successfully !' });
});

const port = 3000;

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
