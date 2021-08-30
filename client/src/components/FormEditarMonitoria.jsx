import React, { Fragment, useState } from "react";
import { editarMonitoria } from "../utils/monitorias";

const FormEditarMonitoria = ({
  actualizar,
  setActualizar,
  guardarMonitorias,
  monitores,
}) => {
  const [error, actualizarError] = useState(false);

  //Extraer valores
  const { materia, monitores_id, fecha, hora, salon } = actualizar;

  //Funcion que se ejecuta cada que el administrador escribe en el input
  const actualizarState = (e) => {
    setActualizar({
      ...actualizar,
      [e.target.name]: e.target.value,
    });
  };

  //Validacion input materia

  const onHandleChange = (e) => {
    const res = /^[a-zA-Z\b ]+$/;
    if (e.target.value === "" || res.test(e.target.value)) {
      setActualizar({
        ...actualizar,
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
      monitores_id !== "" &&
      fecha !== "" &&
      hora !== "" &&
      salon !== ""
    ) {
      //Eliminar el mensaje previo
      actualizarError(false);
      //editar monitoria
      editarMonitoria(actualizar, guardarMonitorias);
      //volver al agregar
      setActualizar(false);
      return;
    } else {
      actualizarError(true);
    }
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
                name="monitores_id"
                value={monitores_id}
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
                onChange={onHandleChange}
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
            Actualizar monitoria
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default FormEditarMonitoria;
