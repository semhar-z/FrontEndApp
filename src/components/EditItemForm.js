import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles.css';

function EditItem({ setItems }) {
  const { postId } = useParams();  
  const navigate = useNavigate();

  // State to hold the item being edited
  const [item, setItem] = useState({
    postId: '',
    name: '',
    description: ''
  });

  // State for handling search input
  const [searchId, setSearchId] = useState('');

  // Fetch the item to be edited when the component mounts or searchId changes
  useEffect(() => {
    if (postId) {
      axios.get(`https://mern-app-8dn1.onrender.com/api/items/postId/${postId}`)
        .then(response => {
          setItem(response.data);  // Set the fetched item data to state
        })
        .catch(error => {
          console.error('Error fetching item:', error);
        });
    }
  }, [postId]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value
    }));
  };

  // Handle form submission (update item)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the updated item data to the backend via PUT request
    axios.put(`https://mern-app-8dn1.onrender.com/api/items/postId/${item.postId}`, item)
      .then((response) => {
        // Update the items list in the parent component
        setItems((prevItems) => prevItems.map(i => (i.postId === item.postId ? response.data : i)));
        navigate('/');  // Navigate back to the list view after updating
      })
      .catch((error) => {
        console.error('Error updating item:', error);
      });
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchId(e.target.value);
  };

  // Handle search submit (find item by postId)
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchId) {
      axios.get(`https://mern-app-8dn1.onrender.com/api/items/postId/${searchId}`)
      .then(response => {
          setItem(response.data);  // Set the item to be edited
        }
      )
        .catch(error => {
          console.error('Item not found:', error);
          alert('Item not found');
        });
    } else {
      alert('Please enter a valid postId');
    }
  };

  return (
    <div>
      <h2>Edit Item</h2>
      
      {/* Search input to find item by postId */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter postId"
          value={searchId}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>

      {/* Only show the form if the item is found */}
      {item.postId && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={item.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Description</label>
            <input
              type="text"
              name="description"
              value={item.description}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Update Item</button>
        </form>
      )}
    </div>
  );
}

export default EditItem;
