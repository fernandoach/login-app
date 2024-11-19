import { getConnection } from '../db/context.js'

const getAllUSers = async () => {
  try {
    const connetion = await getConnection()
    const query = await connetion
      .request()
      .query(
        `
          SELECT usuario 
          FROM Usuario;
        `
      )
    return query.recordset
  } catch (error) {
    return new Error(error)
  }
}

export { getAllUSers }