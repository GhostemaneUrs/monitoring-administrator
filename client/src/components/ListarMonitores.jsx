import React, { Fragment } from "react";

const ListarMonitores = ({
  monitor,
  eliminarMonitor,
  actualizar,
  setActualizar,
}) => {
  return (
    <Fragment>
      <div className="col-12 col-xl-6 mb-3">
        <div className="listar h-100">
          <div className="row">
            <div className="col-12">
              <p className="fz-20">
                Cedula: <span>{monitor.cedula}</span>
              </p>
            </div>
            <div className="col-12">
              <p className="fz-20">
                Nombres: <span>{monitor.nombres}</span>
              </p>
            </div>
            <div className="col-12">
              <p className="fz-20">
                Apellidos: <span>{monitor.apellidos}</span>
              </p>
            </div>
            <div className="col-12">
              <p className="fz-20">
                Programa Academico: <span>{monitor.programaAcademico}</span>
              </p>
            </div>
            <div className="col-12">
              <p className="fz-20">
                Semestre Academico: <span>{monitor.semestre}</span>
              </p>
            </div>
            <div className="col-12">
              <p className="fz-20">
                Numero Celular: <span>{monitor.celular}</span>
              </p>
            </div>
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <button
                className="btn btn-danger w-100 fz-20"
                onClick={() => eliminarMonitor(monitor.id)}
              >
                Eliminar monitor
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
                    setActualizar(monitor);
                  }
                }}
              >
                {actualizar
                  ? "Ir a agregar monitor"
                  : "Actualizar monitor"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ListarMonitores;
