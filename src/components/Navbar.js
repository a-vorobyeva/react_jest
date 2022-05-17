import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='navbar__list'>
        <li className='navbar__list-item'><Link className='navbar__item-link' to='/'>Answer</Link></li>
        <li className='navbar__list-item'><Link className='navbar__item-link' to='/dose'>Dose</Link></li>
      </ul>
    </div>
  )
}

export default Navbar;
