const connection = require('../app/database');

class CartService {
  async getCartList(userId = 1) {
    const statment = `SELECT * FROM cart WHERE user_id = ?`;
    const [res] = await connection.execute(statment, [userId])
    return res
  }
  async getGoodsNum(userId = 1) {
    const statment = `SELECT num FROM cart WHERE user_id = ? AND goods_id = ?`;
    const [res] = await connection.execute(statment, [userId, 1]);
    return res[0]
  }
  async update(num) {
    const statment = `UPDATE cart SET num = ? WHERE user_id = ? AND goods_id = ?`;
    const [res] = await connection.execute(statment, [num ,1, 1]);
    console.log(res);
    return res
  }
}

module.exports = new CartService();