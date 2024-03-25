import React, { useState } from 'react';
import '../styles/Test.scss'; // SCSS 파일을 import 해주세요.

const Test = () => {
  const [firstCategoryHovered, setFirstCategoryHovered] = useState<number | null>(null);
  const [secondCategoryHovered, setSecondCategoryHovered] = useState<number | null>(null);

  const categories = [
    {
      name: 'First Category',
      subCategories: ['SubCategory 1-1', 'SubCategory 1-2', 'SubCategory 1-3'],
    },
    {
      name: 'Second Category',
      subCategories: ['SubCategory 2-1', 'SubCategory 2-2', 'SubCategory 2-3'],
    },
    {
      name: 'Third Category',
      subCategories: ['SubCategory 3-1', 'SubCategory 3-2', 'SubCategory 3-3'],
    },
  ];

  return (
    <div className='categories-container'>
      {categories.map((category, index) => (
        <div
          key={index}
          className='category'
          onMouseEnter={() => setFirstCategoryHovered(index)}
          onMouseLeave={() => setFirstCategoryHovered(null)}
        >
          {category.name}
          {firstCategoryHovered === index && (
            <div className='sub-categories'>
              {category.subCategories.map((subCategory, subIndex) => (
                <div
                  key={subIndex}
                  className='sub-category'
                  onMouseEnter={(e) => {
                    e.stopPropagation();
                    setSecondCategoryHovered(subIndex);
                  }}
                  onMouseLeave={() => setSecondCategoryHovered(null)}
                >
                  {subCategory}
                  {secondCategoryHovered === subIndex && (
                    <div className='sub-sub-category'>{/* Third level categories */}</div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Test;
