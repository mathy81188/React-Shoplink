import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Lado 1: Branding */}
        <div className="footer-brand">
          <h2 className="logo-text">Superlink</h2>
          <p>Calidad de campo, directo a tu mesa en Palermo.</p>
        </div>

        {/* Lado 2: Navegación rápida */}
        <div className="footer-links">
          <h4>Explorar</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/category/almacen">Almacén</a></li>
            <li><a href="/category/frutas">Frutas y Verduras</a></li>
          </ul>
        </div>

        {/* Lado 3: Contacto Real */}
        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>📍 Palermo, CABA</p>
          <p>📩 hola@superlink</p>
        </div>
      </div>

      <div className="footer-copy">
        <p>&copy; {new Date().getFullYear()} Superlink - Hecho con ❤️ para el barrio.</p>
      </div>
    </footer>
  );
};

export default Footer;