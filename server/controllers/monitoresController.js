const mysql = require("mysql");
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});


//Query para listar monitores

exports.obtenerMonitor = (req, res) => {
  data = req.body;
  const { id } = data;
  sqlListar = "SELECT * FROM Monitores WHERE id = ?;";
  db.query(sqlListar, [id], (error, results, fields) => {
    if (results) {
      res.status(200).send(results);
    } else {
      res.send(error);
    }
  });
};

exports.listarMonitores = (req, res) => {
  sqlListar = "SELECT * FROM Monitores WHERE estado = 1;";
  db.query(sqlListar, (error, results, fields) => {
    if (results) {
      res.status(200).send(results);
    } else {
      res.send(error);
    }
  });
};

//Query para deshabilitar monitores

exports.eliminarMonitores = (req, res) => {
  data = req.body;
  const { id } = data;
  const sqlEliminar = "UPDATE Monitores SET estado = 0 WHERE id = ?;";
  if (id) {
    db.query(sqlEliminar, [id], (error, results, fields) => {
      if (results) {
        res.status(200).send(results);
      } else {
        res.status(400).send(error);
      }
    });
  } else {
    res.status(400).send({ description: "Campos Vacios" });
  }
};

//Query para crear monitores

exports.crearMonitores = (req, res) => {
  data = req.body;
  const { cedula, nombres, apellidos, programaAcademico, semestre, celular } =
    data;
  const sqlValidarIdentificacion = "SELECT * FROM Monitores WHERE cedula = ?";
  const sqlInsert =
    "INSERT INTO Monitores (cedula, nombres, apellidos, programaAcademico, semestre, celular, estado) VALUES (?,?,?,?,?,?,?);";
  if (
    cedula === "" ||
    nombres === "" ||
    apellidos === "" ||
    programaAcademico === "" ||
    semestre === "" ||
    celular === ""
  ) {
    res.status(400).send("Digite todos los datos por favor");
  } else if (cedula) {
    db.query(sqlValidarIdentificacion, cedula, (error, results, fields) => {
      if (results.length > 0) {
        res.status(400).send({ description: "Monitor existente" });
      } else {
        db.query(
          sqlInsert,
          [cedula, nombres, apellidos, programaAcademico, semestre, celular, 1],
          (error, results, fields) => {
            if (results) {
              sqlListar = "SELECT * FROM Monitores WHERE id = ?;";
              db.query(
                sqlListar,
                [results.insertId],
                (error, results, fields) => {
                  if (results) {
                    res.status(200).send(results);
                  } else {
                    res.status(400).send(error);
                  }
                }
              );
            } else {
              res.status(400).send({ description: "Campos Vacios" });
            }
          }
        );
      }
    });
  }
};

//Query para editar monitores
exports.editarMonitores = (req, res) => {
  data = req.body;
  const {
    id,
    cedula,
    nombres,
    apellidos,
    programaAcademico,
    semestre,
    celular,
  } = data;
  const sqlUpdate =
    "UPDATE Monitores SET cedula = ?, nombres = ?, apellidos = ?, programaAcademico = ?, semestre =?, celular =? WHERE id =?;";
  if (
    id &&
    cedula &&
    nombres &&
    apellidos &&
    programaAcademico &&
    semestre &&
    celular
  ) {
    db.query(
      sqlUpdate,
      [cedula, nombres, apellidos, programaAcademico, semestre, celular, id],
      (error, results, fields) => {
        if (results) {
          res.status(200).send(results.message);
        } else {
          res.status(400).send(error);
        }
      }
    );
  } else {
    res.status(400).send({ description: "Campos Vacios" });
  }
};
