import Header from '../components/Header'
import Navigation from '../components/Navigation'

export default function Services({ onNavigate, onBack }) {
  const services = [
    { id: 1, name: 'Удостоверение личности', icon: '📋', color: 'green' },
    { id: 2, name: 'Паспорт гражданина РК', icon: '🪪', color: 'blue' },
    { id: 3, name: 'Студенческий билет', icon: '🎓', color: 'teal' },
  ]

  const listServices = [
    { icon: '📄', title: 'Справки', desc: 'Социальные, по недвижимости и медицинские' },
    { icon: '🏠', title: 'Прописка и снятие с прописки', desc: 'по месту жительства' },
    { icon: '💰', title: 'Пособия и выплаты', desc: 'На ребенка, для многодетных, при потере работы' },
    { icon: '🚗', title: 'Переоформление автомобиля', desc: 'Смена владельца' },
  ]

  return (
    <div className="services-container">
      <div className="header-back" onClick={onBack}>
        <span>←</span>
        <span>Госуслуги</span>
      </div>

      <div className="tabs">
        <button className="tab active">Все услуги</button>
        <button className="tab">Мои заявки</button>
      </div>

      <input type="text" className="search-services" placeholder="🔍 Поиск по Госуслугам" />

      <div className="service-grid">
        {services.map(service => (
          <div
            key={service.id}
            className={`service-card ${service.color}`}
            onClick={() => onNavigate('service-detail', service)}
          >
            <div className="service-icon">{service.icon}</div>
            <div className="service-name">{service.name}</div>
          </div>
        ))}
      </div>

      <h3 style={{ padding: '16px', fontWeight: '600' }}>Все документы →</h3>

      <div className="service-list">
        {listServices.map((service, i) => (
          <div key={i} className="service-list-item" onClick={() => alert(service.title)}>
            <div className="service-list-icon">{service.icon}</div>
            <div className="service-list-content">
              <div className="service-list-title">{service.title}</div>
              <div className="service-list-desc">{service.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <Navigation onNavigate={() => onNavigate('home')} currentPage="services" />
    </div>
  )
}