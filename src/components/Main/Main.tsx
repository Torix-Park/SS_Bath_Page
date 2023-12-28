import styled from 'styled-components';
import Banner from './components/Banner';
import Showcase from './components/ShowCase';

const Main = () => {
  return (
    <div>
      <Banner />
      <Container>
        <Showcase />
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
