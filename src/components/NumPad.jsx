export default function NumPad({ onDigit, onBackspace, onBiometric }) {
  return (
    <div className="numpad">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
        <button
          key={num}
          className="numpad-btn"
          onClick={() => onDigit(num.toString())}
        >
          {num}
        </button>
      ))}
      <button className="numpad-btn special" onClick={onBiometric}>👆</button>
      <button className="numpad-btn" onClick={() => onDigit('0')}>0</button>
      <button className="numpad-btn special" onClick={onBackspace}>⌫</button>
    </div>
  )
}