import axios from "axios";
import Swal from "sweetalert2";
const ruta = "http://localhost:9000/administrarMonitores/";

export const agregarMonitor = async (
  value,
  guardarMonitores,
  actualizarMonitor
) => {
  await axios
    .post(ruta + "crear", value)
    .then((res) => {
      return axios
        .get(ruta + "listar")
        .then((res) => {
          //Reiniciar formulario
          actualizarMonitor({
            cedula: "",
            nombres: "",
            apellidos: "",
            programaAcademico: "",
            semestre: "",
            celular: "",
          });
          guardarMonitores(res.data);
          Swal.fire({
            icon: "success",
            text: "Guardado Exitoso",
            confirmButtonText: "Aceptar",
          });
        })
        .catch((e) => {});
    })
    .catch((e) => {
      if (e.response.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: e.response.data.description,
          confirmButtonText: "Aceptar",
        });
      }
    });
};

export const obtenerMonitor = async (id, guardarMonitor) => {
  return await axios
    .post(ruta + "obtener", { id: id })
    .then((res) => guardarMonitor(res.data[0]))
    .catch((e) => {
      console.log(e);
    });
};

export const listarMonitor = async (guardarMonitores) => {
  await axios
    .get(ruta + "listar")
    .then((res) => {
      guardarMonitores(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const eliminarMonitor = async (idMonitor) => {
  return await axios.post(ruta + "eliminar", { id: idMonitor }).then((res) => {
    console.log(res.data);
  });
};

export const editarMonitor = async (value, guardarMonitores) => {
  await axios.post(ruta + "editar", value).then((res) => {
    return axios
      .get(ruta + "listar")
      .then((res) => {
        guardarMonitores(res.data);
        Swal.fire({
          icon: "success",
          text: "Guardado Exitoso",
          confirmButtonText: "Aceptar",
        });
      })
      .catch((e) => {
        if (e.response.status === 400) {
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: e.response.data.description,
            confirmButtonText: "Aceptar",
          });
        }
      });
  });
};
