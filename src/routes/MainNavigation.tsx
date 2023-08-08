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
          <Route path='/search?' element={<Main />} />
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
