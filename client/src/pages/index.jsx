import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import monitoresLogo from "../img/chalkboard-teacher-solid.svg";
import monitoriasLogo from "../img/user-solid.svg";
import "../css/styles.css";

function index() {
  return (
    <Fragment>
      <div className="container h-100 d-flex flex-column justify-content-center">
        <h1 className="white staatliches text-center mb-4">
          Panel Administrador
        </h1>
        <div className="row w-100 mx-0">
          <div className="col-12 col-sm-6 mb-4 mb-sm-0">
            <Link to="/administrarMonitores" className="text-decoration-none">
              <div className="contenedorIndex button d-flex flex-column align-items-center justify-content-center py-4 py-md-5 my-md-4 h-100">
                <img
                  src={monitoriasLogo}
                  alt="Monitores"
                  className="mw-112 mb-3"
                />
                <p className="font fz-20 mb-0">Monitores</p>
              </div>
            </Link>
          </div>
          <div className="col-12 col-sm-6 mb-4 mb-sm-0">
            <Link to="/administrarMonitorias" className="text-decoration-none">
              <div className="contenedorIndex button d-flex flex-column align-items-center justify-content-center py-4 py-md-5 my-md-4 h-100">
                <img
                  src={monitoresLogo}
                  alt="Monitorias"
                  className="mw-160 mb-3"
                />
                <p className="font fz-20 mb-0">Monitorias</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default index;
