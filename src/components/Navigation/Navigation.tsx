import { Link, useLocation } from 'react-router-dom';
import './styles/Navigation.scss';
import styled from 'styled-components';
import { useEffect } from 'react';

interface MenuProps {
  route: string;
  nav: string;
  location: string;
}

const Menu = ({ route, nav, location }: MenuProps) => {
  return (
    <p className={location.includes(route) ? 'point' : ''}>
      <Link to={`/${route}`}>{nav}</Link>
    </p>
  );
};

const Navigation = () => {
  const locationPathname = useLocation().pathname;

  return (
    <Container>
      <nav style={{ maxHeight: locationPathname.includes('products') ? '100px' : '150px' }}>
        <div className='flex'>
          <div className='logo'>
            <Link to='/'>
              <img
                className='logo-img'
                src={`${import.meta.env.BASE_URL}assets/SS_logo2_white.png`}
              />
            </Link>
          </div>
          <div className='menus'>
            <Menu route='company' nav='회사소개' location={locationPathname} />
            <Menu route='products' nav='상품소개' location={locationPathname} />
            <Menu route='waytocome' nav='오시는길' location={locationPathname} />
            <Menu route='boards' nav='게시판' location={locationPathname} />
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
