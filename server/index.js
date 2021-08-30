const express = require("express");
const app = express();
const mysql = require("mysql");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({ path: "./.env" });

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Funcion para conectar

db.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("Tu conexion es exitosa!");
  }
});

// rutas
app.use("/administrarMonitores", require("./routes/monitores"));
app.use("/administrarMonitorias", require("./routes/monitorias"));


//Port de la app
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto ${PORT}`);
});
