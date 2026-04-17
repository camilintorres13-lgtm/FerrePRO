import { useState } from 'react';
import { Carrusel } from '../Carrusel.jsx';
import { Formulario } from '../Formulario.jsx';
import { Paginación } from '../Paginacion.jsx';
import { ContainerProductos } from '../ContenedorProductos.jsx';
import { Carrito } from '../Carrito.jsx';
import productos from '../../productos.json';

const RESULT_PER_PAGE = 3;

export function Home({ categoryFilters, setCategoryFilters, agregarAlCarrito }) {
    const [textFilter, setTextFilter] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    
    const productosFiltradosPorTexto = textFilter.trim() === ""
        ? null
        : productos.filter(producto =>
            producto.nombre.toLowerCase().includes(textFilter.toLowerCase())
        );

    const categoriaActiva = Object.values(categoryFilters).find(v => v && v !== "") || "";

    const productosPorCategoria = productosFiltradosPorTexto
        ? productosFiltradosPorTexto
        : (categoriaActiva
            ? productos.filter(p => p.categoria === categoriaActiva)
            : productos
        );

    const categorias = Array.from(new Set(productosPorCategoria.map(p => p.categoria)));

    const totalPages = Math.max(1, Math.ceil(categorias.length / RESULT_PER_PAGE));

    const pagedCategories = categorias.slice(
        (currentPage - 1) * RESULT_PER_PAGE,
        currentPage * RESULT_PER_PAGE
    );

    const pagedResults = productosPorCategoria.filter(p => 
        pagedCategories.includes(p.categoria)
    );

    const handlePageChange = (Page) => {
        setCurrentPage(Page);
    };

    const handleTextFilter = (newText) => {
        setTextFilter(newText);
        setCurrentPage(1);

        if (newText.trim() === "") {
            setCategoryFilters({
                herramientas: "",
                insumos: "",
                construccion: ""
            });
        }
    };

    const handleCategoryFilter = (filterName, categoryValue) => {
        const nuevos = {
            herramientas: "",
            insumos: "",
            construccion: ""
        };
        nuevos[filterName] = categoryValue;
        setCategoryFilters(nuevos);
        setTextFilter("");
        setCurrentPage(1);
    };

    return (
        <main style={{ paddingTop: "80px", minHeight: "60vh" }}>
            <Carrusel />

            <Formulario 
                onTextFilter={handleTextFilter} 
                onCategoryFilter={handleCategoryFilter} 
            />

            <ContainerProductos 
                productosData={pagedResults}
                onAgregarCarrito={agregarAlCarrito}
            />

            <Paginación 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={handlePageChange} 
            />
          
        </main>
    );
}