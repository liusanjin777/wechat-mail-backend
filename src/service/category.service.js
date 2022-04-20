const connection = require('../app/database');
class CategoriesService {
  async getListBylevel(cat_level = 0) {
    const statment = `SELECT * FROM category WHERE cat_level = ?;`;
    const [res] = await connection.execute(statment, [cat_level]);
    return res
  };
  async getListById(cat_level = 1, cat_pid) {
    const statment = `SELECT * FROM category WHERE cat_level = ? AND cat_pid = ?;`;
    const [res] = await connection.execute(statment, [cat_level, cat_pid]);
    return res
  }
}

module.exports = new CategoriesService();