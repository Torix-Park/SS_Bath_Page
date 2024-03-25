import styled from 'styled-components';
import './styles/Products.scss';
import { useEffect, useState } from 'react';
import Categories from './components/Categories';
import Test from './components/Test';

export interface Product {
  id: string;
  image: string;
  name: string;
  brand: string;
  type: string;
}

const buttonPerPage: number = 5;

const Products = () => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(20);

  useEffect(() => {}, []);

  return (
    <Container>
      <Categories />
      {/* <div>products</div>
      <div>paginations</div> */}

      <Test />
    </Container>
  );
};

export default Products;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 1280px;
  margin: 0 auto;
  margin-top: 16px;
  height: auto;
`;
