import React from 'react';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          <img src="https://via.placeholder.com/800x400" alt="Cantautora" className="header-image" />
          <div className="header-overlay">
            <h1>LO ÚLTIMO</h1>
            <button className="play-button">Jugar</button>
          </div>
        </div>
      </header>

      <section className="music-section">
        <h2>Música</h2>
        <div className="music-grid">
          <div className="music-card">
            <img src="https://via.placeholder.com/150" alt="Album 1" />
            <p>Album 1</p>
          </div>
          <div className="music-card">
            <img src="https://via.placeholder.com/150" alt="Album 2" />
            <p>Album 2</p>
          </div>
        </div>
      </section>

      <section className="videos-section">
        <h2>Videos</h2>
        <div className="video-grid">
          <div className="video-card">
            <img src="https://via.placeholder.com/150" alt="Video 1" />
            <p>Video 1</p>
          </div>
          <div className="video-card">
            <img src="https://via.placeholder.com/150" alt="Video 2" />
            <p>Video 2</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <h2>Contacto</h2>
        <form className="contact-form">
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Correo electrónico" />
          <textarea placeholder="Mensaje"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </footer>
    </div>
  );
}

export default App;