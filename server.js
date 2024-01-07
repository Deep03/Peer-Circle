// Example route for user registration
app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Check if the username already exists in the database
      const existingUser = await User.findOne({ username });
  
      if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
      }
  
      // Hash the password (using bcrypt or another secure hashing library)
      // For example purposes, let's assume 'hashedPassword' represents the hashed password
  
      // Save the user to the database
      const newUser = new User({ username, password});
      await newUser.save();
  
      return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Registration failed', error });
    }
  });
  