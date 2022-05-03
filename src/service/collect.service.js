const connection = require('../app/database');

class CollectService {
  async addCollect(userId, goods_id) {
    const statement = `INSERT INTO collect  (user_id, goods_id) VALUES (?, ?);`
    const [res] = await connection.execute(statement, [userId, goods_id]);
    return res
  }
  async cancelCollect(userId, goods_id) {
    const statement = `DELETE FROM collect WHERE user_id = ? AND goods_id = ?;`
    const [res] = await connection.execute(statement, [userId, goods_id]);
    return res
  }
  async getCollectList(userId) {
    const statement = `SELECT * FROM collect c LEFT JOIN goods g ON g.goods_id = c.goods_id WHERE c.user_id = ? GROUP BY c.goods_id;`
    const [res] = await connection.execute(statement, [userId]);
    return res
  }
  async getCollectOne(userId, goods_id) {
    const statement = `SELECT * FROM collect WHERE user_id = ? AND goods_id = ?;`
    const [res] = await connection.execute(statement, [userId, goods_id]);
    return res
  }
}

module.exports = new CollectService();