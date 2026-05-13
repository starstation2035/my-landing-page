import type { FC } from 'react';
import './StickyCta.css';

interface StickyCtaProps {
  onClick: () => void;
}

const StickyCta: FC<StickyCtaProps> = ({ onClick }) => {
  return (
    <div className="sticky-cta-container">
      <button type="button" className="sticky-cta-button" onClick={onClick}>
        지금 예약하기
      </button>
    </div>
  );
};

export default StickyCta;
