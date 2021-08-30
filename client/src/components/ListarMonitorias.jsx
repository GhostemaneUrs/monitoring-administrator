import React, { Fragment, useState, useEffect } from "react";
import { obtenerMonitor } from "../utils/monitores";

const ListarMonitorias = ({
  monitoria,
  eliminarMonitoria,
  actualizar,
  setActualizar,
}) => {
  const [monitor, guardarMonitor] = useState({});

  useEffect(() => {
    obtenerMonitor(monitoria.monitores_id, guardarMonitor);
  }, [monitoria]);

  const fecha = new Date(monitoria.fecha);
  const fechaFormateada = `${fecha.getDate()}/${
    fecha.getMonth() + 1
  }/${fecha.getFullYear()}`;

  return (
    <Fragment>
      <div className="col-12 col-xl-6 mb-3">
        <div className="listar h-100">
          <div className="row">
            <div className="col-12">
              <p className="fz-20">
                Materia: <span>{monitoria.materia}</span>
              </p>
            </div>
            <div className="col-12">
              <p className="fz-20">
                Nombre Monitor:{" "}
                <span>{monitor.nombres + " " + monitor.apellidos}</span>
              </p>
            </div>
            <div className="col-12">
              <p className="fz-20">
                Fecha: <span>{fechaFormateada}</span>
              </p>
            </div>
            <div className="col-12">
              <p className="fz-20">
                Hora: <span>{monitoria.hora}</span>
              </p>
            </div>
            <div className="col-12">
              <p className="fz-20">
                Salon: <span>{monitoria.salon}</span>
              </p>
            </div>
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <button
                className="btn btn-danger w-100 fz-20"
                onClick={() => eliminarMonitoria(monitoria.id)}
              >
                Eliminar monitoria
              </button>
            </div>
            <div className="col-12 col-md-6">
              <button
                type="button"
                className="btn btn-primary w-100 fz-20"
                onClick={() => {
                  if (actualizar) {
                    setActualizar(false);
                  } else {
                    setActualizar(monitoria);
                  }
                }}
              >
                {actualizar
                  ? "Ir a agregar monitor"
                  : "Ir a actualizar monitor"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ListarMonitorias;