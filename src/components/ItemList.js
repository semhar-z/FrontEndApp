import { useEffect, useState } from 'react';
import { getItems } from '../services/api';
import DeleteButton from './DeleteButton';
import { Link } from 'react-router-dom';
import '../styles.css';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await getItems();
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h2>Items</h2>
      {loading ? <p>Loading...</p> : (
        <ul>
          {items.map((item) => (
              <li key={item.postId} className='card'>
              {item.postId}. {item.name} - {item.description}
              {/* <Link to={`/edit/${item.postId}`}>Edit</Link> */}
              <DeleteButton id={item._id} setItems={setItems} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
