import { Route, Routes } from "react-router-dom";
// HomePage
// import Contenido from "./page/Inicio/contenido";
import Segundo from "./page/SegundoInicio/PageInicio";
// Sobre nosotros
import Contenido_nosotros from "./page/Nosotros/contenido_nosotros";
// Resultados
import Resultados from "./page/Resultados/Resultados";
// Includes navbar y footer
import NavBard from "./Components/NavBard";
import Footer from "./Components/Footer";
// Nuestros planes
import Prime from "./page/NuestrosPlanes/Prime";
import Futuro from "./page/NuestrosPlanes/Futuro";
// Tabla resultados
import Table from "./page/Resultados/Table";
import Sede from "./page/Sede/contenido_nuestras_sedes";
// Lista de examenes
import Lista from "./page/Lista_examenes/Lista_examenes_page";
// Blog
import Blog from "./page/Blog/BlogPage";
// Admin Page
import Administrador from "./page/Administrador/VistaAdmin";
import { PrivateRoute } from "./routes/PrivateRoute";
// Contacto
import Contenido_contacto from "./page/Contacto/contenido_contacto";

function App() {
  return (
    <>
      <NavBard />
      <Routes>
        {/* <Route path="/" element={Contenido()} /> */}
        <Route path="/" element={Segundo()} />
        <Route path="/nuestrosplanes" element={Prime()} />
        <Route path="/acercadenosotros" element={Contenido_nosotros()} />
        <Route path="/resultados" element={Resultados()} />
        <Route path="/blog" element={Blog()} />
        <Route
          path="/table"
          element={
            <PrivateRoute>
              <Table />
            </PrivateRoute>
          }
        />
        <Route path="/sede" element={Sede()} />
        <Route path="/lista_examenes" element={Lista()} />
        <Route path="/resultados-table" element={Table()} />
        <Route path="/administrador" element={Administrador()} />
        <Route path="/futuro_planes" element={Futuro()} />
        <Route path="/contacto" element={Contenido_contacto()} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
