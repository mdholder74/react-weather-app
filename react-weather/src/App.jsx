import { useState } from 'react'
import './App.css'
function App() {
 

  return (
    <>
    <main>
      <nav>
        <div>Weather App</div>
        <div>M</div>
      </nav>
      <section>
        <input type="text" />
        <button>Search</button>
      </section>
      <section>
        <div>
          <h2>Weather Data</h2>
        </div>
        <div>
          <h2>Map</h2>
        </div>
      </section>
      <section>
        <div>Temp</div>
        <div>Humidity</div>
        <div>Wind</div>
      </section>
      <footer>
        <div>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </footer>
    </main>
       
    </>
  )
}

export default App
