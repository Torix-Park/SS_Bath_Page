import ItemBox from '@components/ItemBox/ItemBox';
import './styles/Main.scss';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Banner from './components/Banner';

const Main = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query: string = queryParams.get('query') ?? '';

  const testName = 'V-세면기 겸용수전';

  useEffect(() => {
    const regex = new RegExp(query, 'g');
    const matches = testName.match(regex);

    console.log(matches);
  }, [query]);

  return (
    <div>
      <Banner />
      <Container>
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
      </Container>
    </div>
  );
};

export default Main;

const Container = styled.div`
  width: 1240px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
