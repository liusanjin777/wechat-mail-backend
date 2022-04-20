const connection = require('../app/database')
class MomentService {
  async create(userId, content) {
    const statement = `INSERT INTO moment (user_id, content) VALUES (?,?);`;
    const res = await connection.execute(statement, [userId, content]);
    return res
  };
  async getMomentByid() {
    
  }
}
module.exports = new MomentService()