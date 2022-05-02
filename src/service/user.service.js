const connection = require('../app/database')
class UserService {
  async create(openid) {
    try {
      const statement = `INSERT INTO user (openid) VALUES (?);`;
      const res = await connection.execute(statement, [openid]);
      return res
    } catch (error) {
      console.log(error);
    }
  };
  async getOpenidByDataBase(openid) {
    try {
      const statement = `SELECT * FROM user WHERE openid = ?;`;
      const res = await connection.execute(statement, [openid]);
      return res[0]
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new UserService()