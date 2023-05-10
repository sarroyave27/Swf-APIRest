import {pool} from '../db.js'


export const getusers = async(req, res) => {
    try {
        const [rows] = await pool.query("CALL spMostrarUsuarios()")
        res.json(rows)
    } catch (error) {
        console.error("Ha ocurrido un error");
    }
};

export const createusers= async(req, res) => {
    //pool.query('INSERT INTO usuarios (NOMBRES, APELLIDO, CORREO, CELULAR, FECHA_NACIMIENTO, CONTRASEÑA) VALUES()')
    const NOMBRES = req.body.NOMBRES
       const APELLIDOS = req.body.APELLIDOS
        const CORREO = req.body.CORREO
        const CELULAR = req.body.CELULAR
        const FECHA_NACIMIENTO = req.body.FECHA_NACIMIENTO
        const CONTRASEÑA = req.body.CONTRASEÑA

    console.log(NOMBRES);
    try {
        const result = await pool.query(`CALL spCrearUsuario('${NOMBRES}','${APELLIDOS}','${CORREO}','${CELULAR}','${FECHA_NACIMIENTO}','${CONTRASEÑA}')`)

        res.json(result)

    } catch (error) {
        //console.error("Ha ocurrido un error" + error);
        console.log(error);
    }
}

export const updateusers = (req, res) => res.send("actualizando usuarios");

export const deleteusers = (req, res) => res.send("Eliminando usuarios");

