import axios from "axios";
import Swal from "sweetalert2";
const ruta = "http://localhost:9000/administrarMonitorias/";

export const agregarMonitoria = async (
  value,
  guardarMonitorias,
) => {
  await axios.post(ruta + "crear", value).then((res) => {
    return axios
      .get(ruta + "listar")
      .then((res) => {
        guardarMonitorias(res.data);
        Swal.fire({
          icon: "success",
          text: "Guardado Exitoso",
          confirmButtonText: "Aceptar",
        });
      })
      .catch((e) => {
        console.log(e);
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

export const listarMonitoria = async (guardarMonitorias) => {
  await axios
    .get(ruta + "listar")
    .then((res) => {
      guardarMonitorias(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const eliminarMonitoria = async (idMonitoria) => {
  return await axios
    .post(ruta + "eliminar", { id: idMonitoria })
    .then((res) => {
      console.log(res.data);
    });
};

export const editarMonitoria = async (value, guardar) => {
  console.log(value);
  await axios.post(ruta + "editar", value).then((res) => {
    return axios
      .get(ruta + "listar")
      .then((res) => {
        guardar(res.data);
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
