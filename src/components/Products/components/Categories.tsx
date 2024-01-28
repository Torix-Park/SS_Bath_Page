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
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [showOptions, setShowOptions] = useState<boolean>(false);

  useEffect(() => {
    navigate(`?category=` + productsCategories[0].id);

    setSelectedCategory(productsCategories[0].id);
  }, [setSelectedCategory]);

  const handleCategoryChange = useCallback(
    (targetValue: string) => {
      const newCategory = targetValue;
      // URL 업데이트 및 페이지 이동
      navigate(`?category=${newCategory}`);

      setSelectedCategory(newCategory);
    },
    [setSelectedCategory],
  );

  const handleOptionClick = useCallback(
    (option: string) => {
      setSelectedCategory(option);
      setShowOptions(false);
    },
    [setSelectedCategory, setShowOptions],
  );

  return (
    <Container>
      <div className='category-select'>
        <div
          className={`selected-option ${showOptions ? 'open' : ''}`}
          onClick={() => {
            setShowOptions(!showOptions);
          }}
        >
          {productsCategories.find((category) => category.id === selectedCategory)?.name}
        </div>
        {showOptions && (
          <div className='options'>
            {productsCategories.map((category) => (
              <span
                draggable={false}
                className={`option ${category.id === selectedCategory ? 'selected' : ''}`}
                key={category.id}
                onClick={() => {
                  handleOptionClick(category.id);
                }}
              >
                {category.name}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className='sub-category-select'>
        {productsCategories
          .find((category) => category.id === selectedCategory)
          ?.categories?.map((category, i) => (
            <div className='sub-options' key={category.id}>
              <p>{category.name}</p>
            </div>
          ))}
      </div>
    </Container>
  );
};

export default Categories;

const Container = styled.div`
  width: 100%;
  display: flex;
`;
