import './styles/Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className='footer-content'>
        <p className='company-name'>신성바쓰</p>
        <section>
          <div className='flex'>
            <p className='title'>주소</p>
            <p>대구광역시 동구 공항로33길 37 ( 불로동 849-2 )</p>
          </div>
          <div className='flex'>
            <p className='title'>팩스 및 문의</p>
            <p>053-636-9980</p>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
