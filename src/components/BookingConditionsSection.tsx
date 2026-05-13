import type { FC } from 'react';
import './BookingConditionsSection.css';

const BookingConditionsSection: FC = () => {
  const t = (key: string) => {
    const translations: Record<string, string> = {
      'bookingConditions.title': '예약 안내',
      'bookingConditions.condition1': '✓ 1명부터 예약 가능합니다',
      'bookingConditions.condition2': '✓ 최소 2명 이상 예약되면 투어가 확정됩니다',
      'bookingConditions.condition3': '✓ 1명만 예약된 상태에서 추가 신청이 없으면 투어는 자동으로 취소됩니다 (환불 또는 이월)',
    };
    return translations[key] || key;
  };

  return (
    <section className="booking-conditions-section">
      <div className="booking-conditions-card">
        <h3 className="booking-conditions-title">{t('bookingConditions.title')}</h3>
        <ul className="booking-conditions-list">
          <li className="booking-condition-item">{t('bookingConditions.condition1')}</li>
          <li className="booking-condition-item">{t('bookingConditions.condition2')}</li>
          <li className="booking-condition-item">{t('bookingConditions.condition3')}</li>
        </ul>
      </div>
    </section>
  );
};

export default BookingConditionsSection;
