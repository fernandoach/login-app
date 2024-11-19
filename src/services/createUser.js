import { getConnection } from '../db/context.js'
import mssql from 'mssql'

const createUser = async (nombre, edad, usuario, passwd) => {
  try {
    const connection = await getConnection()
    const query = await connection
      .request()
      .input('nombre', mssql.VarChar, nombre)
      .input('edad', mssql.Int, edad)
      .input('usuario', mssql.VarChar, usuario)
      .input('passwd', mssql.VarChar, passwd)
      .query(
        `
          INSERT INTO(nombre, edad, usuario, passwd)
          VALUES(@nombre, @edad, @usuario, @passwd);
        `
      )
    return query
  } catch (error) {
    return new Error(error)
  }
}

export { createUser }
