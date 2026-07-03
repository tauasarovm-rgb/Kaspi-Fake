export default function Header({ onLogout }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px',
      borderBottom: '1px solid #e0e0e0'
    }}>
      <h1 style={{ fontSize: '18px', fontWeight: 'bold' }}>Kaspi.kz</h1>
      <button onClick={onLogout} style={{
        background: 'none',
        border: 'none',
        fontSize: '20px',
        cursor: 'pointer'
      }}>
        🛒
      </button>
    </div>
  )
}