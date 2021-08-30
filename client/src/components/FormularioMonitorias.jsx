import React, { Fragment, useState, useEffect } from "react";
import { agregarMonitoria } from "../utils/monitorias.js";
import { listarMonitor } from "../utils/monitores";

const FormularioMonitorias = ({ guardarMonitorias }) => {
  //Crear state para monitorias
  const [monitoria, actualizarMonitoria] = useState({});
  const [monitores, guardarMonitores] = useState([]);
  //Crear state para error
  const [error, actualizarError] = useState(false);

  useEffect(() => {
    listarMonitor(guardarMonitores);
  }, []);

  //Funcion que se ejecuta cada que el administrador escribe en el input
  const actualizarState = (e) => {
    actualizarMonitoria({
      ...monitoria,
      [e.target.name]: e.target.value,
    });
  };

  //Extraer valores
  const { materia, monitor_id, fecha, hora, salon } = monitoria;

  //Validar tipo monitoria
  const onHandleChange = (e) => {
    const res = /^[a-zA-Z\b ]+$/;
    if (e.target.value === "" || res.test(e.target.value)) {
      actualizarMonitoria({
        ...monitoria,
        [e.target.name]: e.target.value,
      });
    }
  };


  //Enviar formulario
  const submitMonitoria = (e) => {
    e.preventDefault();

    //Validar
    if (
      materia !== "" &&
      monitor_id !== "" &&
      fecha !== "" &&
      hora !== "" &&
      salon !== ""
    ) {
      //Eliminar el mensaje previo
      actualizarError(false);
      //Crear monitoria
      agregarMonitoria(monitoria, guardarMonitorias);
    } else {
      //Actualizar el mensaje previo
      actualizarError(false);
      return;
    }

    //Reiniciar formulario
    actualizarMonitoria({
      materia: "",
      monitor_id: "",
      fecha: "",
      hora: "",
      salon: "",
    });
  };

  return (
    <Fragment>
      <h2 className="white staatliches">Agregar monitorias</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={submitMonitoria}>
        <div className="row">
          <div className="col-12 col-md-6 col-xxl-4">
            <div className="form-floating mb-3">
              <input
                type="text"
                name="materia"
                className="form-control"
                placeholder="Materia"
                value={materia}
                required
                maxLength="50"
                onChange={onHandleChange}
              />
              <label for="floatingInput">Materia</label>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xxl-4">
            <div className="form-floating mb-3">
              <select
                className="form-select"
                id="floatingSelect"
                name="monitor_id"
                value={monitor_id}
                required
                onChange={actualizarState}
              >
                <option defaultValue="selected">Seleccione un monitor</option>
                {monitores.map((monitor) => (
                  <option value={monitor.id} key={monitor.id}>
                    {monitor.nombres + " " + monitor.apellidos}
                  </option>
                ))}
              </select>
              <label for="floatingSelect">Monitor Asignado</label>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xxl-4">
            <div className="form-floating mb-3">
              <input
                type="text"
                name="salon"
                className="form-control"
                placeholder="Salon"
                value={salon}
                required
                maxLength="50"
                onChange={actualizarState}
              />
              <label for="floatingInput">Salon Asignado</label>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xxl-4">
            <div className="form-floating mb-3">
              <input
                type="date"
                name="fecha"
                className="form-control"
                value={fecha}
                required
                onChange={actualizarState}
              />
              <label for="floatingInput">Fecha</label>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xxl-4">
            <div className="form-floating mb-3">
              <input
                type="time"
                name="hora"
                placeholder="Semestre Academico"
                className="form-control"
                value={hora}
                required
                onChange={actualizarState}
              />
              <label for="floatingInput">Hora</label>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary py-3 mb-4 staatliches fz-20 w-100"
          >
            Agregar monitoria
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default FormularioMonitorias;
