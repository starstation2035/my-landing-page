import type { FC } from 'react';
import './Footer.css';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>부산 K-드라마 인생샷 투어</h3>
          <p className="footer-description">드라마 속 명소를 전문가의 시선으로 담아드립니다.</p>
        </div>
        
        <div className="footer-info">
          <div className="contact-info">
            <p>이메일: contact@busandramatour.com</p>
            <p>전화: 051-XXXX-XXXX</p>
          </div>
          
          <div className="social-links">
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">KakaoTalk</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2026 Busan Cinema Tour. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
