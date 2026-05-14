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
      tourImageUrl: '/gallery_tour1.png',
      dramaImageUrl: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=900&auto=format&fit=crop',
      dramaTitle: '해운대와 광안대교',
      review: '로맨틱한 분위기와 감성적인 배경이 돋보이는 한국 대표 콘텐츠.\n\n1. 드라마 <더 글로리> (The Glory)\n극 중 주여정(이도현)과 문동은(송혜교)이 바둑을 두며 이야기를 나누던 장소가 바로 광안대교가 보이는 민락수변공원 인근입니다. \'동은이 복수를 꿈꾸던 차가운 바다\'와 대비되는 아름다운 야경지로 입소문이 났습니다.\n\n2. 영화 <해운대> (Haeundae)\n한국형 재난 영화의 배경이 된 곳이 해운대입니다. 부산 하면 가장 먼저 떠오르는 랜드마크입니다. 부산을 방문할 때 "영화에 나온 그 백사장"이라며 해운대를 찾는 경우가 많습니다.\n\n3. 드라마 <쌈, 마이웨이> (Fight for My Way)\n주인공 박서준과 김지원이 데이트를 하거나 속마음을 털어놓는 장면에서 광안리 해수욕장의 야경이 자주 등장했습니다. 광안대교 야경은 부산의 \'감성 포토존\'으로 소개되며 성지순례 코스가 되었습니다.',
    },
    {
      id: 2,
      tourImageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=900&auto=format&fit=crop',
      dramaImageUrl: 'https://images.unsplash.com/photo-1513415564515-763d4e01b37d?q=80&w=900&auto=format&fit=crop',
      dramaTitle: '청사포',
      review: '\'청사포\' 특유의 서정적인 분위기와 감성 해변 열차\n\n1. 드라마 <지금, 헤어지는 중입니다> (Now, We Are Breaking Up)\n드라마의 마지막 회 등 주요 장면에서 해운대 블루라인파크(스카이캡슐 및 해변 열차)가 등장합니다. 청사포역을 지나는 알록달록한 스카이캡슐의 모습이 이 드라마를 통해 비춰지면서 인기 명소가 되었습니다.\n\n2. 영화 <그날의 분위기> (Mood of the Day)\n영화 속에서 두 주인공이 부산 곳곳을 여행하며 가까워지는 과정을 담고 있는데, 청사포 등대(쌍둥이 등대)가 주요 배경으로 등장합니다. 붉은 등대와 하얀 등대가 마주 보고 있는 청사포 특유의 서정적인 풍경이 잘 담겨 있어, 영화를 본 여행객들이 \'인생샷\'을 찍기 위해 자주 찾는 장소가 되었습니다.\n\n3. 애니메이션 연상 효과 <슬램덩크> 오마주\n청사포역 근처의 해변 열차 건널목 풍경이 일본 가마쿠라를 배경으로 한 인기 만화 《슬램덩크》의 한 장면(가마쿠라코코마에역 건널목)과 매우 흡사하여, 대만 관광객들 사이에서 \'한국판 슬램덩크 촬영지\'로 불리며 성지가 되었습니다.',
    },
    {
      id: 3,
      tourImageUrl: 'https://images.unsplash.com/photo-1582260170068-d0df547b744d?q=80&w=900&auto=format&fit=crop',
      dramaImageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=900&auto=format&fit=crop',
      dramaTitle: '테마가 있는 스파 & 청수당',
      review: '테마가 있는 스파\n5가지 테마의 찜질방 (소금, 히노끼, 황토, 맥반석, 아이스) 에서 즐기는 몸과 마음의 힐링. 면역공방(웨이브테라피) 에서 일상의 피로도 풀어보세요.\n\n청수당\n해운대 바다뷰를 보며 해, 운, 목, 지, 금 5개 온천탕에서 휴식을 즐겨보세요. 찜질복(입수불가) 또는 수영복을 착용하고 스페셜 라운지도 이용할 수 있습니다.\n\n노천보행족탕\n발 지압으로 쌓였던 피로와 스트레스를 풀어보세요!',
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
