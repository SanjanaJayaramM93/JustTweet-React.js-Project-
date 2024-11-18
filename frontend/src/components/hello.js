import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import NavbarComponent from './components/Navbar';
import AddTruck from './components/AddTruck';
import TruckTable from './components/TruckTable';

function App() {
  const [trucks, setTrucks] = useState([]);
  const [newTruckRegistration, setNewTruckRegistration] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTruckData, setNewTruckData] = useState({
    registration: '',
    arrivalDate: '',
    arrivalTime: '',
    departureDate: '',
    departureTime: '',
    bay: '',
  });

  useEffect(() => {
    fetchTrucks();
  }, []);

  const fetchTrucks = async () => {
    try {
      const response = await axios.get('http://localhost:3000/trucks');
      setTrucks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTruck = async (registration) => {
    try {
      await axios.delete(`http://localhost:3000/trucks/${registration}`);
      fetchTrucks();
    } catch (error) {
      console.log(error);
    }
  };

 /* const increaseDepartureTime = async (registration) => {
    try {
      const truckToUpdate = trucks.find((truck) => truck.registration === registration);
      if (truckToUpdate) {
        const updatedTruck = { ...truckToUpdate };
        const newDepartureTime = new Date(updatedTruck.departureTime);
        newDepartureTime.setMinutes(newDepartureTime.getMinutes() + 5);
        updatedTruck.departureTime = newDepartureTime.toISOString();
  
        await axios.put(`http://localhost:3000/trucks/${registration}`, updatedTruck);
        fetchTrucks();
      }
    } catch (error) {
      console.log(error);
    }
  };*/
  
  
 // ...

/*const increaseDepartureTime = async (registrationId) => {
  try {
    const truckToUpdate = trucks.find((truck) => truck.registration === registrationId);
    if (truckToUpdate) {
      const updatedTruck = { ...truckToUpdate };
      const newDepartureTime = new Date(updatedTruck.departureTime);
      newDepartureTime.setMinutes(newDepartureTime.getMinutes() + 5);
      updatedTruck.departureTime = newDepartureTime.toISOString();

      await axios.put(`http://localhost:3000/trucks/${registrationId}`, updatedTruck);
      fetchTrucks();
    }
  } catch (error) {
    console.log(error);
  }
};

// ...

  */
const increaseDepartureTime = async (registration) => {
  try {
    const updatedTrucks = trucks.map((truck) => {
      if (truck.registration === registration) {
        const newDepartureTime = new Date(truck.departureTime);
        newDepartureTime.setMinutes(newDepartureTime.getMinutes() + 5);
        return { ...truck, departureTime: newDepartureTime.toISOString() };
      }
      return truck;
    });

    await axios.put(`http://localhost:3000/trucks/${registration}`, updatedTrucks.find((truck) => truck.registration === registration));
    fetchTrucks();
  } catch (error) {
    console.log(error);
  }
};


  const addTruck = async () => {
    setShowAddForm(true);
  };

  const handleAddTruck = async () => {
    try {
      const response = await axios.post('http://localhost:3000/trucks', newTruckData);
      console.log(response); // Log the response to the console
      setNewTruckData({
        registration: '',
        arrivalDate: '',
        arrivalTime: '',
        departureDate: '',
        departureTime: '',
        bay: '',
      });
      setShowAddForm(false);
      fetchTrucks();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelAddTruck = () => {
    setShowAddForm(false);
    setNewTruckData({
      registration: '',
      arrivalDate: '',
      arrivalTime: '',
      departureDate: '',
      departureTime: '',
      bay: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTruckData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="App">
      <NavbarComponent  />
      <h1>Truck Management</h1>
      <Container>
        {!showAddForm && (
          <div>
            <TruckTable
              trucks={trucks}
              deleteTruck={deleteTruck}
              increaseDepartureTime={increaseDepartureTime}
            />
            <h2>Add a New Truck</h2>
            <Button variant="success" onClick={addTruck}>
              Add Truck
            </Button>
          </div>
        )}
        {showAddForm && (
          <AddTruck
            newTruckData={newTruckData}
            handleInputChange={handleInputChange}
            handleAddTruck={handleAddTruck}
            handleCancelAddTruck={handleCancelAddTruck}
          />
        )}
      </Container>
    </div>
  );
}

export default App;