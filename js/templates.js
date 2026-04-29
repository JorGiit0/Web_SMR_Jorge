const NAV_ITEMS = [
  { href: 'index.html', label: 'Inicio', id: 'inicio' },
  { href: 'pages/ubicacion.html', label: 'Ubicación', id: 'ubicacion' },
  { href: 'pages/especies.html', label: 'Especies', id: 'especies' },
  { href: 'pages/equipo.html', label: 'Equipo', id: 'equipo' },
];

function renderHeader(activePage = '') {
  const headerTarget = document.getElementById('site-header');
  if (!headerTarget) return;
  const basePath = document.body.dataset.base || '';

  const links = NAV_ITEMS.map((item) => {
    const activeClass = item.id === activePage ? ' class="activa"' : '';
    return `<a href="${basePath}${item.href}"${activeClass}>${item.label}</a>`;
  }).join('');

  headerTarget.innerHTML = `
    <header>
      <a href="${basePath}index.html">
        <img src="${basePath}assets/images/Aquatracker.png" alt="Logo Aqua Tracker" class="logo">
      </a>

      <div class="time-container">
        <div class="time-item">
          <a href="https://www.timeanddate.com/worldclock/spain/madrid" id="hora-espanola" target="_blank" rel="noreferrer">
            <span id="hora-espanola-text"></span>
            <img src="${basePath}assets/images/Flag_of_Spain.png" alt="Bandera de España">
          </a>
        </div>
        <div class="time-item">
          <a href="https://www.timeanddate.com/worldclock/spain/santa-cruz" id="hora-canaria" target="_blank" rel="noreferrer">
            <span id="hora-canaria-text"></span>
            <img src="${basePath}assets/images/canarias.png" alt="Bandera de Canarias">
          </a>
        </div>
      </div>
    </header>

    <nav>
      <div class="nav-links">
        ${links}
        <div class="desplegable">
          <a href="#" class="menu-principal">Más Opciones
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="icono-desplegable" width="18" height="18" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </a>
          <ul class="submenu">
            <li><a href="${basePath}pages/actualizaciones.html">Notas de Actualización</a></li>
            <li><a href="${basePath}pages/contacto.html">Contacto</a></li>
          </ul>
        </div>
      </div>

      <form class="search-form" action="#" role="search">
        <input type="text" class="search-input" placeholder="Buscar..." aria-label="Buscar">
        <button class="search-button" type="submit" aria-label="Buscar">🔍</button>
      </form>
    </nav>
  `;
}

function renderFooter() {
  const footerTarget = document.getElementById('site-footer');
  if (!footerTarget) return;

  footerTarget.innerHTML = `
    <div class="footer">
      <div class="footerizq">
        <div class="footerizq-contacto">
          <h2>Contacto</h2>
          <p>Aqua Tracker International Headquarters
            <br>Calle de San Juan de la Cruz
            <br>Tenerife, Islas Canarias 38009 España</p>
        </div>
        <div class="footerizq-telefono">
          <h2>Teléfono Incidencias</h2>
          <p>+34 922 123 456</p>
        </div>
      </div>

      <div class="footercenter">
        <div class="footercenter-rs">
          <h2>Redes Sociales</h2>
          <a href="instagram">Instagram</a>
          <a href="facebook">Facebook</a>
          <a href="discord">Discord</a>
          <a href="youtube">YouTube</a>
        </div>

        <div class="email-content">
          <h2>Navega con nosotros</h2>
          <form class="email-box-content js-email-form">
            <input type="email" class="correo-input" name="email" placeholder="Introduce tu correo.">
            <button type="submit" class="correo-boton">Unirse</button>
          </form>
        </div>
      </div>

      <div class="footerdonaciones">
        <div class="donaciones">
          <h2>AYÚDANOS A CUMPLIR <br>NUESTRO OBJETIVO</h2>
          <p>Nosotros ya hemos cubierto la mayor parte de la isla de Tenerife. <br>
          Con tu ayuda, podremos expandirnos a otras ubicaciones, nacionales como internacionales.</p>
          <div class="donaciones-content">
            <form class="donaciones-form js-donation-form">
              <input type="number" class="donaciones-input" name="cantidad" placeholder="Cantidad en EUR" min="1" step="0.01" required>
              <button type="submit" class="donaciones-boton">Donar</button>
            </form>
          </div>
        </div>
      </div>

      <div class="footerder">
        <div class="copyright">
          <h2>Hecho por:</h2>
          <ul>
            <li>Jorge Ruiz</li>
            <li>Iman Stitou</li>
            <li>Marcos Pérez</li>
            <li>Álvaro Pérez</li>
          </ul>
        </div>
        <div class="version">
          <h3>Versión 1.2</h3>
        </div>
      </div>
    </div>
  `;
}
