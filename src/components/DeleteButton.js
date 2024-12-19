import { deleteItem } from '../services/api';

const DeleteButton = ({ id, setItems }) => {
  const handleDelete = async () => {
    try {
      await deleteItem(id);
      setItems((prev) => prev.filter((item) => item._id !== id)); // Remove item from state
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteButton;
