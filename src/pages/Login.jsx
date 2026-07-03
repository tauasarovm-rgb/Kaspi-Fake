import { useState } from 'react'
import NumPad from '../components/NumPad'

export default function Login({ onLogin }) {
  const [pin, setPin] = useState('')
  const correctPin = '1234'

  const handleDigit = (digit) => {
    if (pin.length < 4) {
      setPin(pin + digit)
    }
  }

  const handleBackspace = () => {
    setPin(pin.slice(0, -1))
  }

  const handleEnter = () => {
    if (pin === correctPin) {
      onLogin()
    } else {
      alert('Неправильный PIN-код')
      setPin('')
    }
  }

  return (
    <div className="login-container">
      <div className="login-header">
        <span className="login-header-close">×</span>
        <span className="login-header-enter" onClick={handleEnter}>⊞→</span>
      </div>

      <div className="user-avatar">👤</div>

      <h2 className="login-title">Код быстрого доступа</h2>

      <div className="pin-dots">
        {[...Array(4)].map((_, i) => (
          <div key={i} className={`pin-dot ${i < pin.length ? 'active' : ''}`}></div>
        ))}
      </div>

      <NumPad
        onDigit={handleDigit}
        onBackspace={handleBackspace}
        onBiometric={() => alert('Биометрия')}
      />

      <p style={{ marginTop: '40px', textAlign: 'center', color: '#999', fontSize: '12px' }}>
        PIN: 1234
      </p>
    </div>
  )
}