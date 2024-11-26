// Import express
const express = require("express");

// Create an express application
const app = express();

// Define a route for fetching quotes
app.get("/quotes", async (req, res) => {
  try {
    // Fetch quotes from the Quotable API
    const response = await fetch("https://api.quotable.io/quotes");
    const quotes = await response.json(); // Convert response to JSON

    // Send the quotes back to the user
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" }); // Error handling
  }
});

// Make the server listen on port 3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
