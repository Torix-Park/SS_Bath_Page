import { Link, useLocation } from 'react-router-dom';
import './styles/Navigation.scss';
import styled from 'styled-components';

interface MenuProps {
  route: string;
  nav: string;
}

const Menu = ({ route, nav }: MenuProps) => {
  const location = useLocation();

  return (
    <p className={location.pathname.includes(route) ? 'point' : ''}>
      <Link to={`/${route}`}>{nav}</Link>
    </p>
  );
};

const Navigation = () => {
  return (
    <Container>
      <nav>
        <div className='flex'>
          <Link to='/'>
            <div className='logo'>
              <img
                className='logo-img'
                src={`${import.meta.env.BASE_URL}assets/SS_logo2_white.png`}
              />
            </div>
          </Link>
          <div className='menus'>
            <Menu route='company' nav='회사소개' />
            <Menu route='products' nav='상품소개' />
            <Menu route='waytocome' nav='오시는길' />
            <Menu route='boards' nav='게시판' />
          </div>
        </div>
      </nav>
    </Container>
  );
};

const Container = styled.div`
  background-color: #80cbc4;
  color: #fff;

  /* 화면 상단 고정 */
  /* position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1; */
`;

export default Navigation;
