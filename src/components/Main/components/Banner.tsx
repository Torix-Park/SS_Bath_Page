import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import '../styles/Banner.scss';

const Banner = () => {
  const [images] = useState<string[]>(['banner1.jpg', 'banner2.jpg']);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 15000);

    return () => clearInterval(intervalId);
  }, [index, images]);

  const handelButtonClick = useCallback((newIndex: number) => {
    setIndex(newIndex);
  }, []);

  return (
    <Container>
      <div className='banner-container'>
        {images.map((image, i) => (
          <div
            key={i}
            className={`banner-img ${i === index ? 'active' : ''}`}
            style={{ left: `${(i - index) * 100}%` }}
          >
            <img src={`${import.meta.env.BASE_URL}assets/${image}`} alt={`Image ${i + 1}`} />
          </div>
        ))}
        <div className='button-container'>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => handelButtonClick(i)}
              style={{ backgroundColor: `${index === i ? '#80cbc4' : ''}` }}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  width: 100vw;
  height: 55vh;
  overflow: hidden;
`;
