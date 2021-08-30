import React, { Fragment, useEffect, useState } from "react";
import FormularioMonitorias from "../components/FormularioMonitorias";
import FormEditarMonitoria from "../components/FormEditarMonitoria";
import ListarMonitorias from "../components/ListarMonitorias";
import { listarMonitoria, eliminarMonitoria } from "../utils/monitorias";
import { listarMonitor } from "../utils/monitores";
import logoAtras from "../img/caret-left-solid.svg";
import "../css/styles.css";

function Monitorias() {
  //Arreglo monitorias
  const [monitores, guardarMonitores] = useState([]);
  const [monitorias, guardarMonitorias] = useState([]);
  const [actualizar, setActualizar] = useState(false);

  //Uffect para realizar ciertas operaciones
  useEffect(() => {
    listarMonitoria(guardarMonitorias);
    listarMonitor(guardarMonitores);
  }, []);

  //Funcion eliminar monitoria
  const eliminar = (id) => {
    const monitoriasNuevas = monitorias.filter(
      (monitoria) => monitoria.id !== id
    );
    guardarMonitorias(monitoriasNuevas);
    eliminarMonitoria(id);
  };

  const back = () => {
    window.history.go(-1);
  };

  //Mensaje condicional
  const titulo =
    monitorias.length === 0 ? "No hay monitorias" : "Administra tus monitorias";

  return (
    <Fragment>
      <div className="container">
        <h1 className="white staatliches text-center pt-3 mb-5 fw-bold">
          Administrar Monitorias
        </h1>
        <img
          src={logoAtras}
          alt="retrocer"
          className="tm-flecha"
          onClick={back}
        />
        <div className="row">
          {actualizar ? (
            <FormEditarMonitoria
              actualizar={actualizar}
              monitores={monitores}
              setActualizar={setActualizar}
              guardarMonitorias={guardarMonitorias}
            />
          ) : (
            <FormularioMonitorias
              guardarMonitorias={guardarMonitorias}
              actualizar={actualizar}
            />
          )}
          <h2 className="white staatliches">{titulo}</h2>
          <div className="row">
            {monitorias.map((monitoria) => (
              <ListarMonitorias
                key={monitoria.id}
                monitoria={monitoria}
                actualizar={actualizar}
                eliminarMonitoria={eliminar}
                setActualizar={setActualizar}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Monitorias;
