const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

//Query para listar monitores

exports.listarMonitorias = (req, res) => {
  sqlListar = "SELECT * FROM Monitorias WHERE estado = 1;";
  db.query(sqlListar, (error, results, fields) => {
    if (results) {
      res.status(200).send(results);
    } else {
      res.send(error);
    }
  });
};

//Query para deshabilitar monitorias

exports.eliminarMonitorias = (req, res) => {
  data = req.body;
  const { id } = data;
  const sqlEliminar = "UPDATE Monitorias SET estado = 0 WHERE id = ?;";
  if (id) {
    db.query(sqlEliminar, [id], (error, results, fields) => {
      if (results) {
        res.send({ code: 200, description: "OK" });
      } else {
        res.send(error);
      }
    });
  } else {
    res.status(400).send({ description: "Campos Vacios" });
  }
};

//Query para crear monitores
exports.crearMonitorias = (req, res) => {
  data = req.body;
  const { materia, monitor_id, fecha, hora, salon } = data;
  const sqlInsert =
    "INSERT INTO Monitorias (materia, fecha, hora, salon, estado, monitores_id) VALUES (?,?,?,?,?,?);";
  if (
    materia === "" ||
    (monitor_id === "") | (fecha === "") ||
    hora === "" ||
    salon === ""
  ) {
    res.send("Digite todos los datos por favor");
  } else {
    db.query(
      sqlInsert,
      [materia, fecha, hora, salon, 1, monitor_id],
      (error, results, fields) => {
        if (results) {
          sqlListar = "SELECT * FROM Monitorias WHERE id = ?;";
          db.query(sqlListar, (error, results, fields) => {
            if (results) {
              res.status(200).send(results);
            } else {
              res.send(error);
            }
          });
        } else {
          res.status(400).send({ description: "Campos Vacios" });
        }
      }
    );
  }
};

exports.editarMonitorias = (req, res) => {
  data = req.body;
  const { materia, fecha, hora, salon, monitores_id, id } = data;
  const sqlUpdate =
    "UPDATE Monitorias SET materia = ?, fecha = ?, hora = ?, salon = ?, monitores_id = ? WHERE id =?;";
  if (materia && fecha && hora && salon) {
    db.query(sqlUpdate, [materia, fecha, hora, salon, monitores_id, id]);
    res.send({ code: 200, description: "OK" });
  } else {
    res.status(400).send({ description: "Campos Vacios" });
  }
};
