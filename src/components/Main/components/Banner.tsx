import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

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
              style={{ backgroundColor: `${index === i ? '#2c3e50' : ''}` }}
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

  .banner-container {
    display: flex;
    transition: left 1s ease-in-out;
    position: relative;
    width: 200%;
    height: 100%;

    .banner-img {
      overflow: hidden;
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.75s ease-in-out;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .banner-img.active {
      opacity: 1;
    }
  }

  .button-container {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    margin-bottom: 16px;

    button {
      user-select: none;
      padding: 8px;
      margin: 5px;
      border-radius: 25px;
      cursor: pointer;
      background-color: #63b6ee;
      color: #fff;
      transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

      &:hover {
        background-color: #364757;
      }
    }
  }
`;
