import { Suspense } from 'react';
import './App.css';
import Spinner from '@components/Spinner/Spinner';
import MainNavigation from '@routes/MainNavigation';
import Footer from '@components/Footer/Footer';
import styled from 'styled-components';

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <AppContainer>
        <MainNavigation />
        <Footer />
      </AppContainer>
    </Suspense>
  );
};

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
