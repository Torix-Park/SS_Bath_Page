import { Suspense } from 'react';
import './App.css';
import Spinner from '@components/Spinner/Spinner';

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <div></div>
    </Suspense>
  );
}

export default App;
