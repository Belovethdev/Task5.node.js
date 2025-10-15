const express = require('express');
const path = require('path');
const app = express();

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views')); // Vercel needs this explicit path

// Sample to-do list data
const todos = [
  { id: 1, task: 'Learn Node.js', completed: false },
  { id: 2, task: 'Build a simple app', completed: true },
  { id: 3, task: 'Deploy to server', completed: false },
  { id: 4, task: 'Read a book on JavaScript', completed: false },
  { id: 5, task: 'Exercise for 30 minutes', completed: true },
  { id: 6, task: 'Plan weekend trip', completed: false },
  { id: 7, task: 'Update resume', completed: false }
];

// Route to display the to-do list
app.get('/', (req, res) => {
  res.render('index', { todos });
});

// ❌ Remove app.listen()
// ✅ Export the app instead (for Vercel)
module.exports = app;
