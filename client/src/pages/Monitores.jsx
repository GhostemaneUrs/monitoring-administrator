import React, { Fragment, useState, useEffect } from "react";
import FormularioMonitores from "../components/FormularioMonitores";
import FormEditarMonitor from "../components/FormEditarMonitor";
import ListarMonitores from "../components/ListarMonitores";
import { listarMonitor, eliminarMonitor } from "../utils/monitores.js";
import logoAtras from  "../img/caret-left-solid.svg"
import "../css/styles.css";

function Monitores() {
  //Arreglo monitores
  const [monitores, guardarMonitores] = useState([]);
  const [actualizar, setActualizar] = useState(false);

  //Uffect para realizar ciertas operaciones
  useEffect(() => {
    listarMonitor(guardarMonitores);
  }, []);

  //Funcionar eliminar monitor
  const eliminar = (id) => {
    const monitoresNuevos = monitores.filter((monitor) => monitor.id !== id);
    guardarMonitores(monitoresNuevos);
    eliminarMonitor(id);
  };

  const back = () => {
    window.history.go(-1);
  }

  // Mensaje condicional
  const titulo =
    monitores.length === 0 ? "No hay monitores" : "Administra tus monitores";

  return (
    <Fragment>
      <div className="container">
        <h1 className="white staatliches text-center pt-3 mb-5 fw-bold">Administrar Monitores</h1>
          <img src={logoAtras} alt="retrocer" className="tm-flecha" onClick={back}/>
        <div className="row">
            {actualizar ? (
              <FormEditarMonitor
                actualizar={actualizar}
                setActualizar={setActualizar}
                guardarMonitores={guardarMonitores}
              />
            ) : (
              <FormularioMonitores guardarMonitores={guardarMonitores} />
            )}
            <h2 className="white staatliches">{titulo}</h2>
            <div className="row">
            {monitores.map((monitor) => (
              <ListarMonitores
                monitor={monitor}
                actualizar={actualizar}
                key={monitor.id}
                eliminarMonitor={eliminar}
                setActualizar={setActualizar}
              />
            ))}
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default Monitores;
