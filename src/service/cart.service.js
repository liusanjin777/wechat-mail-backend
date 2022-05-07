const connection = require('../app/database');

class CartService {
  async getCartList(userId = 1) {
    const statment = `
      SELECT * FROM goods g 
      RIGHT JOIN cart c 
      ON g.goods_id = c.goods_id 
      WHERE c.user_id = ?;
    `;
    const [res] = await connection.execute(statment, [userId])
    return res
  }
  async update(num, userId, goods_id) {
    const statment = `UPDATE cart SET num = ? WHERE user_id = ? AND goods_id = ?`;
    const [res] = await connection.execute(statment, [num ,userId, goods_id]);
    return res
  }
  async delete(userId, goods_id) {
    const statment = `DELETE FROM cart WHERE user_id = ? AND goods_id = ?`;
    const [res] = await connection.execute(statment, [userId, goods_id]);
    return res
  }
  async getNum(userId, goods_id)  {
    const statment = `SELECT num FROM cart WHERE user_id = ? AND goods_id = ?`;
    const [res] = await connection.execute(statment, [userId, goods_id]);
    return res
  }
  async add(userId, goods_id) {
    const statment = `INSERT INTO cart (user_id, goods_id, num) VALUES (?, ? , 1)`;
    const [res] = await connection.execute(statment, [userId, goods_id]);
    return res
  }
}

module.exports = new CartService();