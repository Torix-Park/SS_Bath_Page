import { Link } from 'react-router-dom';
import './styles/Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className='footer-content'>
        <p className='company-name'>신성배관</p>
        <div className='company-info'>
          <div className='flex'>
            <p className='company-info-title'>팩스 및 문의</p>
            <p className='company-info-content'>053-636-9980</p>
          </div>
          <div className='flex'>
            <p className='company-info-title'>상호명</p>
            <p className='company-info-content'>신성배관</p>
          </div>
          <div className='flex'>
            <p className='company-info-title'>대표</p>
            <p className='company-info-content'>박인권</p>
          </div>
          <div className='flex'>
            <p className='company-info-title'>주소</p>
            <p className='company-info-content'>대구광역시 동구 공항로33길 37 ( 불로동 849-2 )</p>
          </div>
          <div className='flex'>
            <p className='company-info-content'>Copyright (c) 2023 SSBath. All Right Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
