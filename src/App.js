import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemList from './components/ItemList'; // Component to display list of items
import ItemForm from './components/ItemForm'; // Form component for adding new items
import EditItemForm from './components/EditItemForm'; // Form component for editing an item
import NavBar from './components/NavBar';
import './styles.css'

function App() {
  // State to store items fetched from the backend
  const [items, setItems] = useState([]);
  
  // Fetch items from the backend on component mount
  useEffect(() => {
    // axios.get('http://localhost:5000/api/items') 
     axios.get('https://mern-app-8dn1.onrender.com/api/items')
    .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching items:', error);
      });
  }, []);

  // Delete an item
  const deleteItem = (id) => {
    axios.delete(`https://mern-app-8dn1.onrender.com/api/items/${id}`)  
      .then(() => {
        setItems(items.filter(item => item._id !== id));
      })
      .catch(error => {
        console.error('Error deleting item:', error);
      });
  };

  return (
    <Router>
      <div className="App">
        <NavBar />
        <h1>Items Task Management App</h1>
        <Routes>
          {/* Route to display the list of items */}
          <Route path="/" element={<ItemList items={items} onDelete={deleteItem} />} />

          {/* Route to add new item */}
          {/* <Route path="/add" element={<ItemForm onAdd={addItem} />} /> */}
          <Route path="/add" element={<ItemForm setItems={setItems} />} />

          {/* Route to edit an existing item */}
          {/* <Route path="/edit/:postId" element={<EditItemForm items={items} onEdit={editItem} />} /> */}
          <Route path="/edit/:postId" element={<EditItemForm setItems={setItems}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
