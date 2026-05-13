import type { FC } from 'react';
import './PainPointsSection.css';

const PainPointsSection: FC = () => {
  const t = (key: string) => {
    const translations: Record<string, string> = {
      'painPoints.title': '이런 경험 있으신가요?',
      'painPoints.subtitle': '부산 여행, 아쉬움만 남았던 이유',
      'painPoints.problem1': '드라마 촬영지에 가도 평범한 관광지 사진만 나온다',
      'painPoints.problem2': '혼자 또는 친구들끼리만 가면 누가 우리를 찍어줄까?',
      'painPoints.problem3': '이곳저곳 다니느라 시간 낭비, 효율적 동선이 없다',
      'painPoints.problem4': '부산까지 왔는데 정통 로컬 음식을 못 먹었어',
      'painPoints.problem5': '드라마 촬영지가 정확히 어디인지 몰라서 헷갈렸어',
      'painPoints.problem6': '인스타그램에 올릴 만한 인생샷이 없었어',
    };
    return translations[key] || key;
  };

  const painPoints = [
    { id: 1, icon: '📸', textKey: 'painPoints.problem1' },
    { id: 2, icon: '🙋‍♀️', textKey: 'painPoints.problem2' },
    { id: 3, icon: '⏳', textKey: 'painPoints.problem3' },
    { id: 4, icon: '🍲', textKey: 'painPoints.problem4' },
    { id: 5, icon: '🗺️', textKey: 'painPoints.problem5' },
    { id: 6, icon: '😭', textKey: 'painPoints.problem6' },
  ];

  return (
    <section className="pain-points-section">
      <div className="pain-points-container">
        <h2 className="section-title">{t('painPoints.title')}</h2>
        <p className="section-subtitle">{t('painPoints.subtitle')}</p>
        <div className="section-divider"></div>

        <div className="pain-points-grid">
          {painPoints.map((point) => (
            <div key={point.id} className="pain-point-card">
              <div className="pain-point-number">PAIN POINT 0{point.id}</div>
              <div className="pain-point-icon">{point.icon}</div>
              <h3 className="pain-point-text">{t(point.textKey)}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
