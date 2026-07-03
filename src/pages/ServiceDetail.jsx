export default function ServiceDetail({ service, onBack }) {
  return (
    <div className="detail-container">
      <div className="header-back" onClick={onBack}>
        <span>←</span>
        <span>{service.name}</span>
      </div>

      <div className="detail-tabs">
        <button className="detail-tab active">Документ</button>
        <button className="detail-tab">Реквизиты</button>
      </div>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <button className="btn-primary">Загрузить</button>
      </div>

      <button className="btn-primary" style={{ marginTop: '60px' }}>
        📋 Предъявить документ
      </button>

      <button className="btn-secondary">
        ⬆️ Отправить документ
      </button>

      <h3 style={{ marginTop: '40px', marginBottom: '16px', fontSize: '14px' }}>Реквизиты документа:</h3>

      <div className="form-group">
        <div className="form-field">
          <div className="form-field-icon">📋</div>
          <div className="form-field-text">ФИО</div>
        </div>
        <div className="form-field">
          <div className="form-field-icon">📋</div>
          <div className="form-field-text">ИИН</div>
        </div>
        <div className="form-field">
          <div className="form-field-icon">📋</div>
          <div className="form-field-text">Дата рождения</div>
        </div>
        <div className="form-field">
          <div className="form-field-icon">📋</div>
          <div className="form-field-text">Номер документа</div>
        </div>
        <div className="form-field">
          <div className="form-field-icon">📋</div>
          <div className="form-field-text">Дата выдачи</div>
        </div>
        <div className="form-field">
          <div className="form-field-icon">📋</div>
          <div className="form-field-text">Срок действия</div>
        </div>
      </div>
    </div>
  )
}