import Main from '@components/Main/Main';
import Navigation from '@components/Navigation/Navigation';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

const MainNavigation = () => {
  return (
    <Router>
      <Container>
        <Navigation />
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default MainNavigation;

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  padding-left: 20px;
  padding-right: 20px;
`;
