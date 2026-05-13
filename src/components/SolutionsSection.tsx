import type { FC } from 'react';
import './SolutionsSection.css';

const SolutionsSection: FC = () => {
  const t = (key: string) => {
    const translations: Record<string, string> = {
      'solutions.title': '저희가 해결해드립니다',
      'solutions.subtitle': '6가지 완벽한 솔루션으로 부산 드라마 투어를 경험하세요',
      'solutions.solution1': '드라마 촬영지에서 실제 장면 구도 그대로 재현',
      'solutions.solution2': '당신은 모델, 우리는 포토그래퍼 (그룹샷도 완벽)',
      'solutions.solution3': '최적화된 6시간 동선: 해운대→청사포→광안리',
      'solutions.solution4': '광안리 로컬 신선한 음식 포함 (저녁 식사)',
      'solutions.solution5': '드라마 촬영지 전문 가이드 설명 + 드라마 장면 공유',
      'solutions.solution6': '영화 포스터 수준의 인생샷 보장 (프로 촬영)',
    };
    return translations[key] || key;
  };

  const solutions = [
    { id: 1, icon: '📸', textKey: 'solutions.solution1' },
    { id: 2, icon: '✨', textKey: 'solutions.solution2' },
    { id: 3, icon: '🧭', textKey: 'solutions.solution3' },
    { id: 4, icon: '🍽️', textKey: 'solutions.solution4' },
    { id: 5, icon: '🎬', textKey: 'solutions.solution5' },
    { id: 6, icon: '🎞️', textKey: 'solutions.solution6' },
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
