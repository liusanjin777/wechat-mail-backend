const connection = require('../app/database');

class OrderService {
  async create(params) {
    console.log(params);
    const statment = `INSERT INTO order (goods_id, ord)`;
    connection.execute(statment, []);
     
  }
}

module.exports = new OrderService()