const connection = require('../app/database');
class SearchService {
  async search(detail, offset, size) {
    const statment = `
      SELECT 
        g.goods_id, g.goods_name FROM goods g 
      WHERE g.goods_name LIKE '%到手价%' 
      GROUP BY g.goods_name LIMIT ${offset},${size};
    `;
    const [res] = await connection.execute(statment, [detail]);
    return res
  }
}

module.exports = new SearchService();