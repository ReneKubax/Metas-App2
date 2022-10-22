import React from "react";
import estilos from "./Pie.module.css";

function Pie() {
  return (
    <footer className={estilos.pie}>
      <small>
        Desarrollado y diseñado por Rene Fuentes. ©2022. Todos los
        derechos reservados.
      </small>
    </footer>
  );
}

export default Pie;
