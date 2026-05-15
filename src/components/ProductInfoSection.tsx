import type { FC } from 'react';
import './ProductInfoSection.css';

interface ProductInfoProps {
  onCtaClick: () => void;
}

const ProductInfoSection: FC<ProductInfoProps> = ({ onCtaClick }) => {
  const summaryInfos = [
    { id: 1, label: '투어 일정', value: '15:00 ~ 21:00 (약 6시간)', isPrice: false },
    { id: 2, label: '방문 장소', value: '해운대 / 청사포 / 광안리', isPrice: false },
    { id: 3, label: '포함 사항', value: '전용차량 + 가이드 + 식사', isPrice: false },
    { id: 4, label: '가격', value: '1인 249,000₩', isPrice: true },
  ];

  const itinerary = [
    {
      time: '15:00 - 17:00',
      title: '클럽디 오션 스파 (LCT)',
      keyword: '하이엔드 웰니스',
      description: '"하이엔드 웰니스" 체험. 가이드는 로비에서 체크인을 도와주고, 외국인에게 생소한 한국식 찜질방/스파 이용 매너를 영어로 안내합니다. (손님은 자유시간)',
    },
    {
      time: '17:00 - 18:00',
      title: '청사포 다릿돌 & 건널목',
      keyword: '슬램덩크 감성 스냅',
      description: '"슬램덩크 감성 스냅". 해운대에서 청사포로 차량 이동(약 15분). 블루라인 열차가 지나가는 타이밍을 맞춰 가이드가 **인생 포스터 샷**을 찍어줍니다.',
    },
    {
      time: '18:00 - 19:30',
      title: '해운대 요트 투어',
      keyword: '프라이빗 럭셔리',
      description: '"프라이빗 럭셔리". 노을이 지는 골든타임(Golden Hour)에 맞춰 탑승. 가이드는 요트 위에서 광안대교를 배경으로 폴라로이드 사진이나 전문 스냅 촬영을 해줍니다.',
    },
    {
      time: '19:30 - 21:00',
      title: '광안리 횟집 (Dinner)',
      keyword: '리얼 로컬 미식',
      description: '"리얼 로컬 미식". 광안리로 이동하여 엄선된 횟집 안내. 가이드는 한국식 \'쌈 싸 먹는 문화\'와 해산물 종류를 설명하며 외국인이 주문하기 힘든 메뉴를 조율합니다.',
    },
    {
      time: '21:00 ~',
      title: '광안리 해변 산책',
      keyword: '피날레',
      description: '"피날레". 광안대교 야경을 보며 가벼운 산책 후, 고객님의 숙소로 드롭오프(Drop-off)하거나 안내하며 투어를 마무리합니다.',
    },
  ];

  return (
    <section className="product-info-section">
      <div className="container product-info-container">
        <div className="section-header">
          <span className="section-subtitle">THE PREMIUM EXPERIENCE</span>
          <h2 className="section-title">투어 상세 일정</h2>
        </div>

        {/* Quick Summary Bar */}
        <div className="product-summary-grid">
          {summaryInfos.map((info) => (
            <div key={info.id} className={`summary-card ${info.isPrice ? 'price-summary' : ''}`}>
              <span className="summary-label">{info.label}</span>
              <span className="summary-value">{info.value}</span>
            </div>
          ))}
        </div>

        {/* Detailed Timeline */}
        <div className="itinerary-timeline">
          {itinerary.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-time">
                <span>{item.time}</span>
              </div>
              <div className="timeline-dot-wrapper">
                <div className="timeline-dot"></div>
                {index !== itinerary.length - 1 && <div className="timeline-line"></div>}
              </div>
              <div className="timeline-content">
                <div className="content-header">
                  <span className="content-keyword">{item.keyword}</span>
                  <h3 className="content-title">{item.title}</h3>
                </div>
                <p className="content-description" dangerouslySetInnerHTML={{ __html: item.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></p>
              </div>
            </div>
          ))}
        </div>

        <div className="itinerary-cta">
          <button type="button" className="btn-luxury" onClick={onCtaClick}>
            지금 예약하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductInfoSection;
