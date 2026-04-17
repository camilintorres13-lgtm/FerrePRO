import { useNavigate, Link } from 'react-router-dom';

export function Navbar({ onCategoryFilter }) {
  const navigate = useNavigate();

  return (
    <nav className='navbar bg-dark navbar-dark fixed-top'>
      <div className='container-fluid'>

        {/* LOGO */}
        <a
          className='navbar-brand d-flex align-items-center'
          href='./'
        >
          <img
            src='/imagenes pagina ferreteria/Imagen de fondo inicio y logo/Logo.jpeg'
            alt='Logo FerrePro'
            className='me-2 rounded'
            style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
          />
          FerrePro
        </a>

        {/* ICONO CARRITO */}
        <div className='d-flex align-items-center'>
          <Link to="/carrito" className='btn btn-outline-light me-2'>
            🛒
          </Link>
        </div>

        {/* BOTÓN MENU */}
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='offcanvas'
          data-bs-target='#offcanvasNavbar'
          aria-controls='offcanvasNavbar'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        {/* OFFCANVAS */}
        <div
          className='offcanvas offcanvas-end text-bg-dark'
          tabIndex='-1'
          id='offcanvasNavbar'
        >
          <div className='offcanvas-header'>
            <h5 className='offcanvas-title'>Menú</h5>
            <button
              type='button'
              className='btn-close btn-close-white'
              data-bs-dismiss='offcanvas'
            />
          </div>

          <div className='offcanvas-body d-flex flex-column'>

            <ul className='navbar-nav pe-3'>

              {/* EJEMPLO CORRECTO */}
              <li className='nav-item'>
                <a
                  className='nav-link'
                  href='#'
                  onClick={(e) => {
                    e.preventDefault();
                    onCategoryFilter('herramientas', 'electrica');
                  }}
                >
                  Herramientas eléctricas
                </a>
              </li>

              {/* OTROS LINKS (igual que antes, están bien) */}
              <li className='nav-item'>
                <a className='nav-link' href='#' onClick={(e) => {
                  e.preventDefault();
                  onCategoryFilter('herramientas', 'manuales');
                }}>
                  Herramientas manuales
                </a>
              </li>

              {/* ... resto igual ... */}

              <li className='nav-item'>
                <a className='nav-link' href='contacto.html'>
                  Contacto
                </a>
              </li>

            </ul>

            {/* LOGIN */}
            <button
              className='nav-link btn btn-link w-100 text-start mt-auto'
              onClick={() => navigate('/login')}
              style={{
                background: 'linear-gradient(to right, #ef6c00, #fb8c00)',
                color: '#fff',
                fontWeight: 'bold',
                borderRadius: '6px',
                padding: '10px 15px',
                marginTop: '10px'
              }}
            >
              Iniciar Sesión
            </button>

          </div>
        </div>

      </div>
    </nav>
  );
}