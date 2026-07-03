import Header from '../components/Header'
import Navigation from '../components/Navigation'

export default function Home({ onNavigate, onLogout }) {
  return (
    <div className="home-container">
      <Header onLogout={onLogout} />

      <input type="text" className="search-bar" placeholder="Поиск по Kaspi.kz" />

      <div className="carousel">
        <div className="carousel-card">
          <div className="carousel-card-title">Мебель</div>
          <div style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 8px', borderRadius: '4px', width: 'fit-content' }}>0·0·12</div>
          <div className="carousel-card-date">15.12 – 31.12</div>
        </div>
        <div className="carousel-card blue">
          <div className="carousel-card-title">ТВ, аудио, видео</div>
          <div style={{ background: '#FFD700', color: '#000', padding: '4px 8px', borderRadius: '4px', width: 'fit-content' }}>5% Бонусов</div>
          <div className="carousel-card-date">15.12 –</div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px', marginBottom: '8px' }}>
        <h3>Быстрые действия</h3>
        <span style={{ fontSize: '20px', color: '#FF3333' }}>🛒 9</span>
      </div>

      <div className="menu-grid">
        <div className="menu-item" onClick={() => alert('Магазин')}>
          <div className="menu-icon">🛒</div>
          <div className="menu-text">Магазин</div>
        </div>
        <div className="menu-item" onClick={() => alert('Мой Банк')}>
          <div className="menu-icon">📱</div>
          <div className="menu-text">Мой Банк</div>
        </div>
        <div className="menu-item" onClick={() => alert('Платежи')}>
          <div className="menu-icon">📋</div>
          <div className="menu-text">Платежи</div>
        </div>
        <div className="menu-item" onClick={() => alert('Переводы')}>
          <div className="menu-icon">⬌</div>
          <div className="menu-text">Переводы</div>
        </div>
        <div className="menu-item magnum" onClick={() => alert('Magnum')}>
          <div className="menu-icon">m</div>
          <div className="menu-text">Magnum</div>
        </div>
        <div className="menu-item" onClick={() => alert('Travel')}>
          <div className="menu-icon">🎒</div>
          <div className="menu-text">Travel</div>
        </div>
        <div className="menu-item" onClick={() => onNavigate('services')}>
          <div className="menu-icon">🏪</div>
          <div className="menu-text">Госуслуги</div>
        </div>
        <div className="menu-item" onClick={() => alert('Объявления')}>
          <div className="menu-icon">📢</div>
          <div className="menu-text">Объявления</div>
        </div>
      </div>

      <div className="products-section">
        <div className="product-card red">
          <div className="product-title">Рассрочка</div>
          <div className="product-desc">0-0-12 Kaspi Red+</div>
        </div>
        <div className="product-card green">
          <div className="product-title">Кредит</div>
          <div className="product-desc">до 2 млн ₸</div>
        </div>
        <div className="product-card yellow">
          <div className="product-title">Накопитель</div>
          <div className="product-desc">Депозит 20%</div>
        </div>
        <div className="product-card" style={{ background: 'linear-gradient(135deg, #9C27B0 0%, #BA68C8 100%)', color: 'white' }}>
          <div className="product-title">Другое</div>
          <div className="product-desc">Другие услуги</div>
        </div>
      </div>

      <Navigation onNavigate={onNavigate} currentPage="home" />
    </div>
  )
}
