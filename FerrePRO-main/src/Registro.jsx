import React from 'react';

export const Registro = () => {
  return (
    <div className="container" style={{ marginTop: "120px", marginBottom: "80px" }}>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          {/* Tarjeta Principal */}
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-header bg-warning text-dark text-center py-4 rounded-top-4">
              <h3 className="fw-bold mb-0">🛠️ Únete a FerrePRO</h3>
              <p className="mb-0">Crea tu cuenta para gestionar tus compras</p>
            </div>
            
            <div className="card-body p-5 bg-white">
              <form>
                {/* Sección: Datos Personales */}
                <h6 className="text-muted text-uppercase fw-bold mb-3" style={{ fontSize: '0.8rem' }}>Información Personal</h6>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">Nombres</label>
                    <input type="text" className="form-control form-control-lg fs-6" placeholder="Ej: Juan" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">Apellidos</label>
                    <input type="text" className="form-control form-control-lg fs-6" placeholder="Ej: Pérez" required />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Número de Teléfono</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light">+57</span>
                    <input type="tel" className="form-control form-control-lg fs-6" placeholder="300 123 4567" />
                  </div>
                </div>

                {/* Sección: Seguridad */}
                <h6 className="text-muted text-uppercase fw-bold mt-4 mb-3" style={{ fontSize: '0.8rem' }}>Acceso a la Cuenta</h6>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Correo Electrónico</label>
                  <input type="email" className="form-control form-control-lg fs-6" placeholder="nombre@correo.com" required />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">Contraseña</label>
                    <input type="password" className="form-control form-control-lg fs-6" placeholder="••••••••" required />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label fw-semibold">Confirmar</label>
                    <input type="password" className="form-control form-control-lg fs-6" placeholder="••••••••" required />
                  </div>
                </div>

                {/* Términos y Botón */}
                <div className="mb-4 form-check">
                  <input type="checkbox" className="form-check-input" id="terms" />
                  <label className="form-check-label small text-muted" htmlFor="terms">
                    Acepto los términos de servicio y la política de tratamiento de datos.
                  </label>
                </div>

                <button type="submit" className="btn btn-warning btn-lg w-100 fw-bold shadow-sm rounded-3 py-3">
                  CREAR MI CUENTA
                </button>
              </form>
            </div>

            <div className="card-footer bg-light text-center py-3 rounded-bottom-4">
              <span className="text-muted small">¿Ya tienes cuenta? </span>
              <a href="/login" className="text-decoration-none fw-bold text-warning">Inicia sesión</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};