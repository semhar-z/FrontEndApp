import { useState } from 'react';
import { createItem } from '../services/api';

const ItemForm = ({ setItems }) => {
  const [formData, setFormData] = useState({ name: '', description: '' , postId: ''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.postId) {
      alert('Please enter a Post ID');
      return;
    }

     try {
      const response = await createItem(formData);
      setItems((prev) => [...prev, response.data]); // Update state
      setFormData({ name: '', description: '', postId: '' }); // Clear form
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
      <input type="number" name="postId" value={formData.postId} onChange={handleChange} placeholder="Post ID"  required unique />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ItemForm;
