import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../img/new_logo.svg";
import { Sidebar } from "primereact/sidebar";
import s from "../css/navbar.module.css";

export default function NavBard() {
  const [visibleRight, setVisibleRight] = useState(false);

  const handleLinkClick = () => {
    setVisibleRight(false);
  };

  useEffect(() => {
    // Oculta la barra lateral si está abierta al cambiar el tamaño de la pantalla
    const handleResize = () => {
      if (window.innerWidth > 1179 && visibleRight) {
        setVisibleRight(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [visibleRight]);

  return (
    <>
      <nav
        className={`flex justify-content-around align-items-center pt-3 pb-4 ${s.containerNavbar}`}
      >
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <div className={s.navigationLinks}>
          <Link to="/">Inicio</Link>
          <Link to="/lista_examenes">Lista de Exámenes</Link>
          <Link to="/acercadenosotros">Acerca De Nosotros</Link>
          <Link to="/sede">Sedes</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
        <div className={s.btns}>
          <Link to="/resultados" className={s.resultadoBtn}>
            Resultados
          </Link>
        </div>
        <button onClick={() => setVisibleRight(true)} className={`${s.btnRes}`}>
          <i className="pi pi-arrow-left"></i>
        </button>
        <Sidebar
          visible={visibleRight}
          position="right"
          onHide={() => setVisibleRight(false)}
        >
          <div className={s.navigationLinksResp}>
            <Link to="/" onClick={handleLinkClick}><span>Inicio</span></Link>
            <Link to="/lista_examenes" onClick={handleLinkClick}><span>Lista de Exámenes</span></Link>
            <Link to="/acercadenosotros" onClick={handleLinkClick}><span>Acerca De Nosotros</span></Link>
            <Link to="/sede" onClick={handleLinkClick}><span>Sedes</span></Link>
            <Link to="/contacto" onClick={handleLinkClick}><span>Contacto</span></Link>
          </div>
          <div className={s.btnsResp}>
            {/* <Link to="/" onClick={handleLinkClick}><span>Reserva tu cita</span></Link> */}
            <Link to="/resultados" className={s.resultadoBtn} onClick={handleLinkClick}>
              <span>Resultados</span>
            </Link>
          </div>
        </Sidebar>
      </nav>
    </>
  );
}
