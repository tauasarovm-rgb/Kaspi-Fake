import React, { useState, useEffect } from 'react';
 React, { useState } from 'react';

export default function ServiceDetail({ service, onBack }) {
  // Состояние активной вкладки: 'doc' - Документ, 'req' - Реквизиты
  const [activeTab, setActiveTab] = useState('doc');
  
  // Состояние загруженного фото
  const [photo, setPhoto] = useState(null);

  // Состояние реквизитов
  const [formData, setFormData] = useState({
    fio: 'ТАУАСАРОВ МЕДЕТ НҰРЛАНҰЛЫ',
    iin: '030612550663',
    birthDate: '12.06.2003',
    docNumber: '055631246'
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
      {/* Кнопка "Назад" и заголовок */}
      <div className="header-back" onClick={onBack}>
        <span>←</span>
        <span>{service?.name || 'Удостоверение личности'}</span>
      </div>

      {/* Переключатель вкладок */}
      <div className="detail-tabs">
        <button 
          className={`detail-tab ${activeTab === 'doc' ? 'active' : ''}`}
          onClick={() => setActiveTab('doc')}
        >
          Документ
        </button>
        <button 
          className={`detail-tab ${activeTab === 'req' ? 'active' : ''}`}
          onClick={() => setActiveTab('req')}
        >
          Реквизиты
        </button>
      </div>

      {/* --- ВКЛАДКА "ДОКУМЕНТ" --- */}
      {activeTab === 'doc' && (
        <>
          {/* Покажет фото, если загружено */}
          {photo ? (
            <div style={{ textAlign: 'center', margin: '15px 0' }}>
              <img 
                src={photo} 
                alt="Удостоверение" 
                style={{ width: '100%', maxWidth: '320px', borderRadius: '12px', border: '1px solid #ddd' }} 
              />
            </div>
          ) : (
            /* Кнопка исчезает сразу после загрузки фото */
            <div style={{ textAlign: 'center', margin: '20px 0' }}>
              <label className="btn-primary" style={{ display: 'block', cursor: 'pointer', lineHeight: '45px' }}>
                Загрузить фото
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handlePhotoUpload} 
                  style={{ display: 'none' }} 
                />
              </label>
            </div>
          )}

          <button className="btn-primary" style={{ width: '100%', marginTop: '10px' }}>
            📋 Предъявить документ
          </button>
        </>
      )}

      {/* --- ВКЛАДКА "РЕКВИЗИТЫ" --- */}
      {activeTab === 'req' && (
        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <p style={{ fontWeight: 'bold', margin: '0 0 5px 0', fontSize: '16px' }}>Реквизиты документа:</p>
          
          <div>
            <label style={{ fontSize: '12px', color: '#666', display: 'block', marginBottom: '4px' }}>ФИО</label>
            <input 
              type="text" 
              name="fio" 
              value={formData.fio} 
              onChange={handleChange} 
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ fontSize: '12px', color: '#666', display: 'block', marginBottom: '4px' }}>ИИН</label>
            <input 
              type="text" 
              name="iin" 
              value={formData.iin} 
              onChange={handleChange} 
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ fontSize: '12px', color: '#666', display: 'block', marginBottom: '4px' }}>Дата рождения</label>
            <input 
              type="text" 
              name="birthDate" 
              value={formData.birthDate} 
              onChange={handleChange} 
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ fontSize: '12px', color: '#666', display: 'block', marginBottom: '4px' }}>Номер документа</label>
            <input 
              type="text" 
              name="docNumber" 
              value={formData.docNumber} 
              onChange
