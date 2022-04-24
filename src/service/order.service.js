const connection = require('../app/database');

class OrderService {
  async create(params) {
    const statment = ``;
    connection.execute(statment, []);
     
  }
}

module.exports = new OrderService()