import React, { useState } from 'react';

export default function ServiceDetail({ service, onBack }) {
  const [photo, setPhoto] = useState(null);
  const [formData, setFormData] = useState({
    fio: '',
    iin: '',
    birthDate: '',
    docNumber: ''
  });

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="detail-container">
      <div className="header-back" onClick={onBack}>
        <span>←</span>
        <span>{service?.name || 'Удостоверение личности'}</span>
      </div>

      <div className="detail-tabs">
        <button className="detail-tab active">Документ</button>
        <button className="detail-tab">Реквизиты</button>
      </div>

      {photo && (
        <div style={{ textAlign: 'center', margin: '15px 0' }}>
          <img 
            src={photo} 
            alt="Удостоверение" 
            style={{ width: '100%', maxWidth: '280px', borderRadius: '12px', border: '1px solid #ddd' }} 
          />
        </div>
      )}

      <div style={{ textAlign: 'center', margin: '15px 0' }}>
        <label className="btn-primary" style={{ display: 'block', cursor: 'pointer', lineHeight: '40px' }}>
          Загрузить фото
          <input 
            type="file" 
            accept="image/*" 
            onChange={handlePhotoUpload} 
            style={{ display: 'none' }} 
          />
        </label>
      </div>

      <button className="btn-primary" style={{ width: '100%', marginBottom: '10px' }}>
        📋 Предъявить документ
      </button>

      <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Реквизиты документа:</p>
        <input 
          type="text" 
          name="fio" 
          placeholder="📋 ФИО" 
          value={formData.fio} 
          onChange={handleChange} 
          style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box' }}
        />
        <input 
          type="text" 
          name="iin" 
          placeholder="📋 ИИН" 
          value={formData.iin} 
          onChange={handleChange} 
          style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box' }}
        />
        <input 
          type="text" 
          name="birthDate" 
          placeholder="📋 Дата рождения" 
          value={formData.birthDate} 
          onChange={handleChange} 
          style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box' }}
        />
        <input 
          type="text" 
          name="docNumber" 
          placeholder="📋 Номер документа" 
          value={formData.docNumber} 
          onChange={handleChange} 
          style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box' }}
        />
      </div>
    </div>
  );
}
