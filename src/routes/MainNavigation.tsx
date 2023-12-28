import Boards from '@components/Boards/Boards';
import PostDetail from '@components/Boards/components/PostDetail';
import Company from '@components/Company/Company';
import Main from '@components/Main/Main';
import Navigation from '@components/Navigation/Navigation';
import Products from '@components/Products/Products';
import Waytocome from '@components/Waytocome/Waytocome';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

const MainNavigation = () => {
  return (
    <Router>
      <Container>
        <Navigation />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/company' element={<Company />} />
          <Route path='/products' element={<Products />} />
          <Route path='/waytocome' element={<Waytocome />} />
          <Route path='/boards' element={<Boards />} />
          <Route path='/boards/post-detail' element={<PostDetail />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default MainNavigation;

const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  flex: 1;
`;
