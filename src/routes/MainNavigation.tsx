import Main from '@components/Main/Main';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/'>메인</Link>
          </li>
          <li>
            <Link to='/sub'>서브</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </Router>
  );
};
export default MainNavigation;
