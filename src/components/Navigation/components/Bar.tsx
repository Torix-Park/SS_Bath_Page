import { useState } from 'react';

const Bar = () => {
  const [currentNav, setCurrentNav] = useState<boolean>(false);

  const onMouseHover = (event: React.MouseEvent) => {};

  return (
    <div className='navigation-bar'>
      <ul>
        <li
          onMouseOver={(e) => {
            setCurrentNav(true);
          }}
          onMouseLeave={() => {
            setCurrentNav(false);
          }}
        >
          <p>메뉴</p>
          {currentNav && (
            <div className='sub-navigation'>
              <p>A</p>
              <p>B</p>
              <p>C</p>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};
export default Bar;
