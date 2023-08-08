import { Link } from 'react-router-dom';
import './styles/ItemBox.scss';
import { useEffect, useState } from 'react';

// type Props = {
//   brand: string;
//   img: string;
//   name: string;
//   newItem?: boolean;
//   type: string;
//   id : string;
// };

const ItemBox = () => {
  const [img, setImg] = useState<string>('');

  // TODO : 테스트용도 추후 삭제
  useEffect(() => {
    if (Math.floor(Math.random() * 2) === 0) {
      setImg('RLSV60-V9.jpg');
    } else {
      setImg('RLSV10-V9.jpg');
    }
  }, []);

  return (
    <div className='item-box'>
      <Link to={'/RLSV60'}>
        <div className='img-box'>
          <img src={`${import.meta.env.BASE_URL}assets/${img}`} />
        </div>
        <div className='description'>
          <span className='brand'>로얄앤컴퍼니</span>
          <span className='name'>V-세면기 겸용수전</span>
          <span className='id'>RLSV60-V9</span>
        </div>
      </Link>
    </div>
  );
};

export default ItemBox;
