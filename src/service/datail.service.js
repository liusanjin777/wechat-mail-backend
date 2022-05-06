const connection = require('../app/database');

class DetailService {
  async getGoodsDetail(goods_id) {
    const statement = `
    SELECT g.goods_id, g.goods_name, g.goods_price,  g.goods_introduce,
    JSON_ARRAYAGG(JSON_OBJECT('goods_id',p.goods_id,'pics_id',p.pics_id,'pics_mid',p.pics_mid)) AS pics
    FROM goods g LEFT JOIN pics p ON g.goods_id = p.goods_id WHERE g.goods_id = ? GROUP BY g.goods_id ;
    
    `
    const [res] = await connection.execute(statement, [goods_id]);
    return res[0]
  }
}


module.exports = new DetailService();