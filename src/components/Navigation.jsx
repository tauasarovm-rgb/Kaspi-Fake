export default function Navigation({ onNavigate, currentPage }) {
  return (
    <div className="navigation">
      <div className={`nav-item ${currentPage === 'home' ? 'active' : ''}`} onClick={() => onNavigate('home')}>
        <div className="nav-icon">🏠</div>
        <div>Главная</div>
      </div>
      <div className="nav-item">
        <div className="nav-icon">⊞</div>
        <div>Kaspi QR</div>
      </div>
      <div className="nav-item">
        <div className="nav-icon">💬</div>
        <div>Сообщения</div>
      </div>
      <div className="nav-item">
        <div className="nav-icon">⋮</div>
        <div>Сервисы</div>
      </div>
    </div>
  )
}