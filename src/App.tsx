import { Suspense } from 'react';

import './App.css';
import Spinner from '@components/Spinner/Spinner';
import MainNavigation from '@routes/MainNavigation';
import Footer from '@components/Footer/Footer';

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <MainNavigation />
      <Footer />
    </Suspense>
  );
};

export default App;
