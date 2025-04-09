import express from 'express';
import sql from 'mssql';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

const config = {
    user: 'roberto',
    password: 'holamundo123',
    server: 'localhost',
    database: 'estudIAR',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

app.use(bodyParser.json());
app.use(cors());

app.post('/insertData', async (req, res) => {
    const { nombre, correo_electronico, contraseña } = req.body;

    try {
        let pool = await sql.connect(config);
        await pool.request().query(
            `INSERT INTO USUARIO (contraseña, nombre, correo_electronico) 
            VALUES ('${contraseña}', '${nombre}', '${correo_electronico}')`
        );
        res.status(200).send('Datos insertados con éxito');
    } catch (err) {
        console.error('Error ejecutando la consulta', err);
        res.status(500).send('Error insertando datos');
    }
});

app.post('/verificarData', async (req, res) => {
     const { correo_electronico, contraseña } = req.body;
      try {
         let pool = await sql.connect(config);
          let correoResult = await pool.request().query(
             `SELECT COUNT(*) as count FROM USUARIO WHERE correo_electronico = '${correo_electronico}'` );
              let contrasenaResult = await pool.request().query( `SELECT COUNT(*) as count FROM USUARIO WHERE contraseña = '${contraseña}'` );
               const correoExiste = correoResult.recordset[0].count > 0;
                const contrasenaExiste = contrasenaResult.recordset[0].count > 0;
                 res.status(200).json({ correoExiste, contrasenaExiste });
                 } catch (err) {
                     console.error('Error ejecutando la consulta', err);
                      res.status(500).send('Error verificando datos');
                     }
                    });



app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});












