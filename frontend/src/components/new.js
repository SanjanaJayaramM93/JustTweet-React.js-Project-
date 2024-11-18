// index.js

const express = require('express');
const bodyParser = require('body-parser');
const trucks = require('./trucks');

const app = express();
app.use(bodyParser.json());

// Enable CORS (for development purposes only)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Get all trucks
app.get('/trucks', (req, res) => {
  res.json(trucks);
});

// Add a new truck
app.post('/trucks', (req, res) => {
  const newTruck = req.body;
  trucks.push(newTruck);
  res.json(newTruck); // Return the added truck instead of the entire truck list
});

// Delete a truck
app.delete('/trucks/:registrationId', (req, res) => {
  const registrationId = req.params.registrationId;
  const index = trucks.findIndex((truck) => truck.registration === registrationId);
  if (index !== -1) {
    const deletedTruck = trucks.splice(index, 1)[0]; // Get the deleted truck
    res.json(deletedTruck); // Return the deleted truck instead of the entire truck list
  } else {
    res.status(404).json({ error: 'Truck not found' });
  }
});
// Function to format time as HH:mm
function formatTime(date) {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
}
// Update truck departure time
app.put('/trucks/:registrationId', (req, res) => {
  const registrationId = req.params.registrationId; // Retrieve the registrationId parameter

  const truck = trucks.find((truck) => truck.registration === registrationId);
  if (truck) {
    // Increase the departure time by 5 minutes
    const newDepartureTime = new Date(truck.departureTime);
    newDepartureTime.setMinutes(newDepartureTime.getMinutes() + 5);
    const formattedTime = formatTime(newDepartureTime); // Format the time

    truck.departureTime = formattedTime;

    res.json(truck); // Return the updated truck
  } else {
    res.status(404).json({ error: 'Truck not found' });
  }
});



const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
