import type { FC } from 'react';
import './SolutionsSection.css';

const SolutionsSection: FC = () => {
  const t = (key: string) => {
    const translations: Record<string, string> = {
      'solutions.title': '더 이상 아쉬워하지 마세요.\n우리가 당신을 드라마 속 주인공으로 만듭니다.',
      'solutions.subtitle': '완벽한 인생샷부터 최적화된 동선까지,\n오직 당신만을 위해 준비된 6가지 프리미엄 솔루션입니다.',
      'solutions.solution1': '드라마속 찜질방, 스파 체험',
      'solutions.solution2': '당신은 모델, 우리는 포토그래퍼 (그룹샷도 완벽)',
      'solutions.solution3': '최적화된 6시간 동선: 해운대→청사포→광안리',
      'solutions.solution4': '광안리 로컬 신선한 음식 포함 (저녁 식사)',
      'solutions.solution5': '드라마 촬영지 전문 가이드 설명',
      'solutions.solution6': '가이드 추천 인생샷 장소',
    };
    return translations[key] || key;
  };

  const solutions = [
    { id: 1, icon: '♨️', textKey: 'solutions.solution1' },
    { id: 2, icon: '📸', textKey: 'solutions.solution2' },
    { id: 3, icon: '🗺️', textKey: 'solutions.solution3' },
    { id: 4, icon: '🥘', textKey: 'solutions.solution4' },
    { id: 5, icon: '🎙️', textKey: 'solutions.solution5' },
    { id: 6, icon: '📍', textKey: 'solutions.solution6' },
  ];

  return (
    <section className="solutions-section">
      <div className="solutions-container">
        <h2 className="section-title">{t('solutions.title')}</h2>
        <p className="section-subtitle">{t('solutions.subtitle')}</p>
        <div className="section-divider"></div>

        <div className="solutions-grid">
          {solutions.map((solution) => (
            <div key={solution.id} className="solution-card">
              <div className="solution-check">✓</div>
              <div className="solution-icon">{solution.icon}</div>
              <h3 className="solution-text">{t(solution.textKey)}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
