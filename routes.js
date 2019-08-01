const express = require('express');
const app = express();

// Import our Page Routes
const blogsRoutes = require('./routes/blogs');
const authorsRoutes = require('./routes/authors');
const sessionsRoutes = require('./routes/sessions');

// Register our Page Routes with our app
app.use('/blogs', blogsRoutes);
app.use('/authors', authorsRoutes);
app.use('/', sessionsRoutes);


// Export our changes
module.exports = app;