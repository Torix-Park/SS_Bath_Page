import styled from 'styled-components';
import '../styles/ShowCase.scss';
import { Link } from 'react-router-dom';

interface ItemProps {
  item: number;
  company: string;
}

const Item = ({ item, company }: ItemProps) => {
  return (
    <Link to={`/products?company=${company}&item=${item}`} className='item'>
      <div>
        <img src={`${import.meta.env.BASE_URL}assets/RLSV60-V9.jpg`} />
      </div>
    </Link>
  );
};

const Showcase = () => {
  return (
    <Container>
      <div className='item-case'>
        <div className='title'>
          <img src={`${import.meta.env.BASE_URL}assets/royal_logo.png`} />
          <p>로얄 컴퍼니</p>
          <Link to={'/products?company=royal'} className='right-arrow'>
            <img src={`${import.meta.env.BASE_URL}assets/right_arrow.png`} />
          </Link>
        </div>
        <div className='item-list'>
          <Item item={0} company='royal' />
          <Item item={0} company='royal' />
          <Item item={0} company='royal' />
          <Item item={0} company='royal' />
        </div>
      </div>
      <div className='item-case'>
        <div className='title'>
          <img src={`${import.meta.env.BASE_URL}assets/info_logo.png`} />
          <p>인포메탈</p>
          <Link to={'/products?company=info'} className='right-arrow'>
            <img src={`${import.meta.env.BASE_URL}assets/right_arrow.png`} />
          </Link>
        </div>
        <div className='item-list'>
          <Item item={0} company='info' />
          <Item item={0} company='info' />
          <Item item={0} company='info' />
          <Item item={0} company='info' />
        </div>
      </div>
      <div className='customer'>
        <div className='title'>
          <p>고객문의</p>
        </div>
        <div className='description'>
          <p>
            <b>번호 :</b> 053-636-9980
          </p>
          <p>
            <b>주소 :</b> 대구 동구 공항로33길 37 (우)41039
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Showcase;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
