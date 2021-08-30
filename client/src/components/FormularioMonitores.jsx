import React, { Fragment, useState } from "react";
import { agregarMonitor } from "../utils/monitores.js";

const FormularioMonitores = ({ guardarMonitores }) => {
  //Crear State para monitores

  const [monitor, actualizarMonitor] = useState({
    cedula: "",
    nombres: "",
    apellidos: "",
    programaAcademico: "",
    semestre: "",
    celular: "",
  });

  //Crear State para error
  const [error, actualizarError] = useState(false);


  //Extraer valores
  const { cedula, nombres, apellidos, programaAcademico, semestre, celular } =
    monitor;

  /* Validar tipo letra */
  const onHandleChangeLetra = (e) => {
    const res = /^[a-zA-Z\b ]+$/;
    if (e.target.value === "" || res.test(e.target.value)) {
      actualizarMonitor({
        ...monitor,
        [e.target.name]: e.target.value,
      });
      return
    }
  };

  /* Hasta aca terminar validar tipo letra */

  /* Validar tipo numero */
  const onHandleChangeNumerico = (e) => {
    const res = /^[0-9\b]+$/;
    if (e.target.value === "" || res.test(e.target.value)) {
      actualizarMonitor({
        ...monitor,
        [e.target.name]: e.target.value,
      });
      return
    }
  };

  /* Hasta aca terminar validar tipo numero */


  //Enviar formulario
  const submitMonitor = (e) => {
    e.preventDefault();
    //Validar
    if (
      cedula !== "" &&
      nombres !== "" &&
      apellidos !== "" &&
      programaAcademico !== "" &&
      semestre !== "" &&
      celular !== ""
    ) {
      //Eliminar el mensaje previo
      actualizarError(false);
      //enviar datos
      agregarMonitor(monitor, guardarMonitores, actualizarMonitor);
    } else {
      //Actualizar el mensaje previo
      actualizarError(true);
      return;
    }
  };

  return (
    <Fragment>
      <h2 className="white staatliches">Agregar monitor</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={submitMonitor} id="formularioMonitor">
        <div className="row">
          <div className="col-12 col-md-6 col-xxl-4">
            <div className="form-floating mb-3">
              <input
                type="text"
                name="cedula"
                className="form-control"
                placeholder="Identificación"
                value={cedula}
                required
                maxLength="10"
                onChange={onHandleChangeNumerico}
              />
              <label for="floatingInput">Cedula</label>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xxl-4">
            <div className="form-floating mb-3">
              <input
                type="text"
                name="nombres"
                className="form-control"
                placeholder="Nombre Monitor"
                value={nombres}
                required
                maxLength="50"
                onChange={onHandleChangeLetra}
              />
              <label for="floatingInput">Nombres</label>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xxl-4">
            <div className="form-floating mb-3">
              <input
                type="text"
                name="apellidos"
                className="form-control"
                placeholder="Apellido Monitor"
                value={apellidos}
                required
                maxLength="50"
                onChange={onHandleChangeLetra}
              />
              <label for="floatingInput">Apellidos</label>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xxl-4">
            <div className="form-floating mb-3">
              <input
                type="text"
                name="programaAcademico"
                placeholder="Programa Academico"
                className="form-control"
                value={programaAcademico}
                required
                maxLength="50"
                onChange={onHandleChangeLetra}
              />
              <label for="floatingInput">Programa Academico</label>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xxl-4">
            <div className="form-floating mb-3">
              <input
                type="text"
                name="semestre"
                placeholder="Semestre Academico"
                className="form-control"
                value={semestre}
                required
                maxLength="50"
                onChange={onHandleChangeLetra}
              />
              <label for="floatingInput">Semestre Academico</label>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xxl-4">
            <div className="form-floating mb-3">
              <input
                type="text"
                name="celular"
                className="form-control"
                placeholder="Numero Celular"
                value={celular}
                required
                maxLength="10"
                onChange={onHandleChangeNumerico}
              />
              <label for="floatingInput">Numero Celular</label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary py-3 mb-4 staatliches fz-20 w-100"
        >
          Agregar monitor
        </button>
      </form>
    </Fragment>
  );
};

export default FormularioMonitores;
