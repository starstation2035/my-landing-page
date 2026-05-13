import type { FC } from 'react';
import './ProductInfoSection.css';

const ProductInfoSection: FC = () => {
  const t = (key: string) => {
    const translations: Record<string, string> = {
      'productInfo.title': '투어 정보',
      'productInfo.label1': '투어 일정',
      'productInfo.duration': '15:00 ~ 21:00 (약 6시간)',
      'productInfo.label2': '방문 장소',
      'productInfo.places': '해운대 / 청사포 / 광안리 3곳',
      'productInfo.label3': '포함 사항',
      'productInfo.includes': '전용차량 + 전문 가이드 + 저녁 식사',
      'productInfo.label4': '가격',
      'productInfo.price': '1인 249,000₩',
    };
    return translations[key] || key;
  };

  const infos = [
    { id: 1, labelKey: 'productInfo.label1', valueKey: 'productInfo.duration', isPrice: false },
    { id: 2, labelKey: 'productInfo.label2', valueKey: 'productInfo.places', isPrice: false },
    { id: 3, labelKey: 'productInfo.label3', valueKey: 'productInfo.includes', isPrice: false },
    { id: 4, labelKey: 'productInfo.label4', valueKey: 'productInfo.price', isPrice: true },
  ];

  return (
    <section className="product-info-section">
      <div className="product-info-bg"></div>
      <div className="container product-info-container">
        <h2 className="section-title">{t('productInfo.title')}</h2>
        <div className="product-info-grid">
          {infos.map((info) => (
            <div key={info.id} className={`product-info-card ${info.isPrice ? 'price-card' : ''}`}>
              <span className="product-info-label">{t(info.labelKey)}</span>
              <strong className="product-info-value">{t(info.valueKey)}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductInfoSection;
