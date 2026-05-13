import { useState } from 'react';
import './BookingModal.css';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: BookingData) => void;
}

export interface BookingData {
  name: string;
  email: string;
  guests: number;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState(1);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  if (!isOpen) return null;

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; email?: string } = {};

    if (name.length < 2) {
      newErrors.name = '이름을 2자 이상 입력해주세요.';
    }

    if (!validateEmail(email)) {
      newErrors.email = '올바른 이메일 형식을 입력해주세요.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    onSubmit({ name, email, guests });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">예약 정보 입력</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              placeholder="이름을 입력해주세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={errors.name ? 'input-error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="guests">인원 수</label>
            <select
              id="guests"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <option key={num} value={num}>{num}명</option>
              ))}
            </select>
            <p className="warning-text">투어 확정을 위해 최소 2명 이상이 필요합니다</p>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-button">예약하기</button>
            <button type="button" className="cancel-button" onClick={onClose}>취소</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
