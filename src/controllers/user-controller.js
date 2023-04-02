import { pool } from "../db.js";

export const getUsers = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM usuario");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "algo salio mal" });
  }
};

/*
export const getUser = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM usuario");
      res.json(rows);
    } catch (error) {
      return res.status(500).json({ message: "algo salio mal" });
    }
  };
  */
  export const createUser = async (req, res) => {
    try {
      
      const { idusuario, nombre, ap_paterno, ap_materno, sexo, mail, celular, contraseña } = req.body;

      const [rows] = await pool.query(
        "INSERT INTO usuario (idusuario, nombre,	ap_paterno, ap_materno,	sexo,	email,	celular,	contraseña) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [idusuario, nombre, ap_paterno, ap_materno, sexo, mail, celular, contraseña]
      );
      res.status(201).json({ id: rows.insertId, idusuario, nombre, ap_paterno, ap_materno, sexo, mail, celular, contraseña });
    } catch (error) {
      return res.status(500).json({ message: "Algo salio mal al insertar datos" });
    }
  };