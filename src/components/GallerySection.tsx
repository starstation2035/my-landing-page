import type { FC } from 'react';
import './GallerySection.css';

interface GalleryItem {
  id: number;
  tourImageUrl: string;
  dramaImageUrl: string;
  dramaTitle: string;
  review: string;
}

const GallerySection: FC = () => {
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      tourImageUrl: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=900&auto=format&fit=crop',
      dramaImageUrl: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=900&auto=format&fit=crop',
      dramaTitle: '태양의 후예',
      review: '드라마 속 장면 그대로 재현해주셨어요! 이런 사진 처음이에요 😭',
    },
    {
      id: 2,
      tourImageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=900&auto=format&fit=crop',
      dramaImageUrl: 'https://images.unsplash.com/photo-1513415564515-763d4e01b37d?q=80&w=900&auto=format&fit=crop',
      dramaTitle: '청춘기록',
      review: '가이드님의 사진 실력이 프로급입니다. 인생샷 건졌어요!',
    },
    {
      id: 3,
      tourImageUrl: 'https://images.unsplash.com/photo-1582260170068-d0df547b744d?q=80&w=900&auto=format&fit=crop',
      dramaImageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=900&auto=format&fit=crop',
      dramaTitle: '이태원 클래스',
      review: '내가 드라마 주인공이 된 기분이었어요. 대만 친구들한테 자랑했어요!',
    },
    {
      id: 4,
      tourImageUrl: 'https://images.unsplash.com/photo-1622321453270-20510651846b?q=80&w=900&auto=format&fit=crop',
      dramaImageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=900&auto=format&fit=crop',
      dramaTitle: '남과 여',
      review: '영화 포스터 같은 사진 감사합니다! 부산 최고의 여행이었어요.',
    },
  ];

  // 금색 별점 아이콘 렌더링
  const StarRating = () => (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className="star-icon">⭐</span>
      ))}
    </div>
  );

  return (
    <section className="gallery-section">
      <div className="container">
        <div className="gallery-header">
          <h2 className="section-title">참가자 인생샷</h2>
          <div className="section-divider"></div>
          <p className="gallery-subtitle">실제 투어 사진 ↔ 드라마 원본 장면 비교</p>
        </div>

        <div className="gallery-comparison-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="comparison-card">
              <div className="comparison-images">
                <div className="comparison-side">
                  <img src={item.tourImageUrl} alt="Tour Shot" className="comp-img" />
                  <div className="comp-label">TOUR SHOT</div>
                </div>
                <div className="comparison-side">
                  <img src={item.dramaImageUrl} alt="Drama Scene" className="comp-img" />
                  <div className="comp-label">DRAMA SCENE</div>
                </div>
              </div>
              <div className="comparison-info">
                <StarRating />
                <h4 className="drama-name">{item.dramaTitle} 촬영지</h4>
                <p className="review-text">"{item.review}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
