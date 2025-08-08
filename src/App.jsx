import React, {useState} from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#4A90E2");
  
  function handleColorChange(event){
    setColor(event.target.value);
  }

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1 className="title">🎨 Color Picker</h1>
          <p className="subtitle">Choose your perfect color</p>
        </header>
        
        <main className="main">
          <div className="color-display">
            <div 
              className="color-preview" 
              style={{backgroundColor: color}}
            >
              <span className="color-hex">{color}</span>
            </div>
          </div>
          
          <div className="color-controls">
            <label htmlFor="color-picker" className="color-label">
              Select Color
            </label>
            <input 
              id="color-picker"
              type="color" 
              value={color} 
              onChange={handleColorChange}
              className="color-input"
            />
          </div>
          
          <div className="color-info">
            <div className="info-card">
              <h3>Color Information</h3>
              <p><strong>HEX:</strong> {color}</p>
              <p><strong>RGB:</strong> {hexToRgb(color)}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

// Helper function to convert hex to RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);
    return `${r}, ${g}, ${b}`;
  }
  return '0, 0, 0';
}

export default App
