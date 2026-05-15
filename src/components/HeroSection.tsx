import type { FC } from 'react';
import { useState, useEffect, useRef } from 'react';
import './HeroSection.css';

interface HeroSlide {
  id: number;
  bgUrl: string;
  tag: string;
  position?: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    bgUrl: '/hero_yacht.png',
    tag: '해운대 광안리 요트 위 샴페인',
    position: 'center 40%',
  },
  {
    id: 2,
    bgUrl: '/hero_train_final.png',
    tag: '청사포 다릿돌 전망대',
  },
  {
    id: 3,
    bgUrl: '/hero_tram_v6_red.jpg',
    tag: '청사포 · 바다 열차 감성',
    position: 'center 70%',
  },
];

// 우측 포스터 샷 카드 이미지들
const posterCards = [
  {
    id: 1,
    url: '/poster_card1.png',
    label: '#해운대 인생샷',
  },
  {
    id: 2,
    url: '/hero_train_final.png',
    label: '#청사포 다릿돌 전망대',
  },
  {
    id: 3,
    url: '/hero_tram_v6_red.jpg',
    label: '#청사포의 추억',
  },
];

interface HeroSectionProps {
  onCtaClick: () => void;
}

const HeroSection: FC<HeroSectionProps> = ({ onCtaClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToSlide = (index: number) => {
    setTextVisible(false);
    setTimeout(() => {
      setCurrentSlide(index);
      setTextVisible(true);
    }, 400);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => advanceSlide(), 6000);
  };

  const advanceSlide = () => {
    setTextVisible(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTextVisible(true);
    }, 400);
  };

  useEffect(() => {
    timerRef.current = setInterval(advanceSlide, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section className="hero-section">
      {/* ── Background Slider ── */}
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ 
              backgroundImage: `url(${slide.bgUrl})`,
              backgroundPosition: (slide as any).position || 'center 20%'
            }}
          >
          </div>
        ))}
      </div>

      {/* ── Main Content ── */}
      <div className="hero-body">
        {/* Location tag */}
        <div className="hero-tag-row">
          <span className="hero-location-tag">
            <span className="tag-dot" />
            {slides[currentSlide].tag}
          </span>
        </div>

        {/* Left: Copy */}
        <div className="hero-layout">
          <div className={`hero-text-col ${textVisible ? 'fade-in' : 'fade-out'}`}>
            {/* Eyebrow */}
            <p className="hero-eyebrow">
              <span className="eyebrow-line" /> BUSAN K-DRAMA TOUR <span className="eyebrow-line" />
            </p>

            {/* Headline */}
            <h1 className="hero-headline">
              부산을 그냥<br />
              지나치지 마세요.
            </h1>

            {/* Sub-headline */}
            <p className="hero-sub-headline">
              당신이 꿈꾸던 한국 드라마 속<br />
              <em>주인공이 되는 단 하루의 기록.</em>
            </p>

            {/* Body copy */}
            <p className="hero-body-copy">
              낯선 길 위의 방황은 끝내고,<br />
              오직 당신의 가장 빛나는 순간에만 집중하세요.
            </p>

            {/* CTA row */}
            <div className="hero-cta-row">
              <button className="hero-cta-btn" onClick={onCtaClick}>
                <span className="btn-icon">✦</span>
                지금 예약하기
              </button>
              <div className="hero-badge">
                <div className="badge-star">⭐⭐⭐⭐⭐</div>
                <span className="badge-text">함께한 고객들의 97%가 추천함</span>
              </div>
            </div>
          </div>

          {/* Right: Overlapping Poster Cards */}
          <div className={`hero-cards-col ${textVisible ? 'fade-in' : 'fade-out'}`}>
            <div className="poster-stack">
              {posterCards.map((card, i) => (
                <div key={card.id} className={`poster-card poster-card--${i}`}>
                  <img src={card.url} alt={card.label} className="poster-card-img" />
                  <div className="poster-card-label">{card.label}</div>
                </div>
              ))}
              {/* Floating badge */}
              <div className="stack-badge">
                <span className="stack-badge-num">98+</span>
                <span className="stack-badge-text">인생샷<br />보유 중</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Slider Dots ── */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`슬라이드 ${index + 1}`}
          />
        ))}
      </div>

      {/* ── Scroll hint ── */}
      <div className="scroll-hint">
        <span className="scroll-hint-line" />
        <span className="scroll-hint-text">SCROLL</span>
        <span className="scroll-hint-line" />
      </div>
    </section>
  );
};

export default HeroSection;
