import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">Add Item</Link></li>
        <li><Link to="/edit/:postId">Edit Items</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
