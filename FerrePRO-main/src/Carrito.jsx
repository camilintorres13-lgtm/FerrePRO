export function Carrito({ items, onRemove }) {
  const total = items.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  console.log("ITEMS EN CARRO:", items);

  return (
    <div className="container mt-4">
      <h2>Carrito de Compras</h2>

      {items.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <ul className="list-group">

          {items.map(item => (
            <li
              key={item.id}
              className="list-group-item d-flex align-items-center justify-content-between"
            >

              {/* IMAGEN */}
              <div className="d-flex align-items-center gap-3">

                <img
                  src={item.imagen}
                  alt={item.nombre}
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "8px"
                  }}
                />

                <div>
                  <strong>{item.nombre}</strong>
                  <div>
                    {item.cantidad} x ${item.precio}
                  </div>
                </div>

              </div>

              {/* BOTÓN ELIMINAR */}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onRemove(item.id)}
              >
                Eliminar
              </button>

            </li>
          ))}

        </ul>
      )}

      <h4 className="mt-3">
        Total: ${total.toLocaleString("es-CO")}
      </h4>
    </div>
  );
}