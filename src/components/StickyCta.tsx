import type { FC } from 'react';
import './StickyCta.css';

interface StickyCtaProps {
  onClick: () => void;
}

const StickyCta: FC<StickyCtaProps> = ({ onClick }) => {
  return (
    <div className="sticky-cta-bar">
      <div className="container sticky-cta-content">
        <div className="sticky-cta-text">
          나만의 부산 인생샷 투어, 지금 바로 예약하세요!
        </div>
        <button type="button" className="btn-luxury sticky-cta-btn-main" onClick={onClick}>
          지금 예약하기
        </button>
      </div>
    </div>
  );
};

export default StickyCta;
