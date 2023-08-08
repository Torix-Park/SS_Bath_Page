import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/Navigation.scss';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import Search from './components/Search';
import Bar from './components/Bar';

const Navigation = () => {
  return (
    <nav>
      <div className='flex'>
        <div className='logo'>
          {/* <div className='logo-img'>신성&바쓰</div> */}
          <img className='logo-img' src={`${import.meta.env.BASE_URL}assets/SS_logo2.png`} />
        </div>
        <Search />
        <div className='menus'>
          <div className='icons'>
            <Link to='/login'>
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </div>
        </div>
      </div>
      <Bar />
    </nav>
  );
};

export default Navigation;
