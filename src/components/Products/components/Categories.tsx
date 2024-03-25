import styled from 'styled-components';
import categoriesData from '../productCategories.json';
import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface Category {
  id: string;
  name: string;
  categories?: {
    id: string;
    name: string;
    sub?: {
      id: string;
      name: string;
    }[];
  }[];
}

const productsCategories: Category[] = categoriesData;

const Categories = () => {
  const [hoverCategory, setHoverCategory] = useState<string>('');
  const [subHoverCategory, setSubHoverCategory] = useState<string>('');

  return (
    <Container>
      <div className='categories'>
        <ul className='category-list'>
          {productsCategories.map((category) => (
            <li
              onMouseOver={() => {
                setHoverCategory(category.id);
              }}
              onMouseLeave={() => {
                setHoverCategory('');
              }}
            >
              <p>{category.name}</p>

              {/* 표시될 서브카테고리가 마우스를 올린 카테고리값에 일치한지 체크 && 서브카테고리가 존재하는지 체크 */}
              {category.id === hoverCategory && category?.categories && (
                <ul className='second-categories'>
                  {category?.categories?.map((subCategory) => (
                    <li
                      onMouseOver={() => {
                        setSubHoverCategory(subCategory.id);
                      }}
                      onMouseLeave={() => {
                        setSubHoverCategory('');
                      }}
                    >
                      <p>
                        {subCategory.name} {subCategory.sub ? '>' : ''}
                      </p>

                      {subHoverCategory && (
                        <ul className='thrid-categories'>
                          {subCategory.sub?.map((thridCategory) => (
                            <li>{thridCategory.name}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Categories;

const Container = styled.div`
  width: 100%;
  position: relative;
`;
