const express = require("express");
const cors = require('cors');

// Initialize Express app
const app = express();

// Use middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

// Import main router
const mainRouter = require("./routes/index");

// Use the main router for API routes
app.use('/api/v1', mainRouter);

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
