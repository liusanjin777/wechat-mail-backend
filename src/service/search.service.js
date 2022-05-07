const connection = require('../app/database');
class SearchService {
  async search(query) {
    console.log(query);
    const statment = `
    SELECT 
      g.goods_id, g.goods_name FROM goods g 
    WHERE g.goods_name LIKE '%${query}%' GROUP BY g.goods_id;
    `;
    const [res] = await connection.execute(statment);
    return res
  }

  async searchByCid(cid, offset, size) {
    try {
      const statment = `
      SELECT 
        g.goods_id, g.goods_name, g.goods_small_logo, g.goods_price FROM goods g 
      WHERE g.cat_id = ${cid} GROUP By g.goods_id LIMIT ${offset},${size}
      `;
      const [res] = await connection.execute(statment, [cid]);
      return res
    } catch (error) {
      console.log(error);
    }
  }
  async searchByQuery(query, offset, size) {
    const statment = `
      SELECT 
        g.goods_id, g.goods_name, g.goods_small_logo, g.goods_price  FROM goods g 
      WHERE g.goods_name LIKE '%${query}%' 
      GROUP BY g.goods_name LIMIT ${offset},${size};
    `;
    const [res] = await connection.execute(statment);
    return res
  }
  async countByCid(cid) {
    const statment = `
      SELECT COUNT(goods_id) total FROM goods WHERE goods.cat_id = ?;
    `;
    const [res] = await connection.execute(statment, [cid]);
    return res[0].total
  }
  async countByQuery(query) {
    const statment = `
      SELECT COUNT(goods_id) total FROM goods WHERE goods.goods_name LIKE '%${query}%';
    `;
    const [res] = await connection.execute(statment);
    return res[0].total
  }
}


module.exports = new SearchService();