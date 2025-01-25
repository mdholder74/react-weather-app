import React from 'react'

export default function Header() {
  return (
    <header>
      <div className="logo-header">
        <div className="logo">M</div>
        <div className="logo-text">Weather App</div>
      </div>
      <nav>
        <ul className="nav-bar">
          <li className="nav-item">Hurricanes</li>
          <li className="nav-item">Tornados</li>
          <li className="nav-item">Pollen</li>

        </ul>
      </nav>
    </header>
  )
}
