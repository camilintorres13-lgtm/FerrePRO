import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar.jsx';
import { Home } from './components/home/Home.jsx';
import { Footer } from './components/Footer.jsx';
import { Login } from './components/layouts/login/login.jsx';
import Administracion from './components/layouts/Admin/Administracion.jsx';

// ESTOS SON LOS QUE MOVISTE A SRC:
import { Registro } from './Registro.jsx'; 
import { Carrito } from './Carrito.jsx';


function App() {
    const [categoryFilters, setCategoryFilters] = useState({
        herramientas: "",
        insumos: "",
        construccion: ""
    });

    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        console.log("AGREGANDO AL CARRITO:", producto);

        setCarrito(prev => {
            const existe = prev.find(item => item.id === producto.id);

            if (existe) {
                return prev.map(item =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                );
            }

            return [...prev, { ...producto, cantidad: 1 }];
        });
    };

    const eliminarDelCarrito = (id) => {
        setCarrito(prev => prev.filter(item => item.id !== id));
    };

    const handleCategoryFilter = (filterName, categoryValue) => {
        const nuevos = {
            herramientas: "",
            insumos: "",
            construccion: ""
        };
        nuevos[filterName] = categoryValue;
        setCategoryFilters(nuevos);
    };

    return (
        <BrowserRouter>
            <Navbar onCategoryFilter={handleCategoryFilter} />

            <Routes>
                <Route 
                    path="/" 
                    element={
                        <Home 
                            categoryFilters={categoryFilters}
                            setCategoryFilters={setCategoryFilters}
                            agregarAlCarrito={agregarAlCarrito}
                        />
                    } 
                />

                <Route 
                    path="/carrito" 
                    element={
                        <Carrito 
                            items={carrito} 
                            onRemove={eliminarDelCarrito} 
                        />
                    } 
                />
            
                <Route path="/login" element={<Login />} />
                
                {/* AGREGAMOS LA RUTA PARA EL REGISTRO */}
                <Route path="/registro" element={<Registro />} />
                
                <Route path="/admin/*" element={<Administracion />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;