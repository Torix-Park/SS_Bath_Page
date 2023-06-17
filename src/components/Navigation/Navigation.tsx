import { Link } from 'react-router-dom';
import './styles/Navigation.scss';

const Navigation = () => {
  return (
    <nav>
      <div className='logo'>
        <img alt='Logo' />
      </div>
      <ul>
        <li>
          <Link to='/'>메인</Link>
        </li>
        <li>
          <Link to='/sub'>서브</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
