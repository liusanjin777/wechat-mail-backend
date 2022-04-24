const connection = require('../app/database');

class InsertService {
  async insert(goods) {
    const statment = `INSERT INTO goods VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);`;
    const res = connection.execute(statment, [
      goods.goods_id,
      goods.cat_id,
      goods.goods_name,
      goods.goods_price,
      goods.goods_number,
      goods.goods_weight,
      goods.goods_introduce,
      goods.goods_big_logo,
      goods.goods_small_logo,
      goods.goods_state,
      goods.is_del,
      goods.add_time,
      goods.upd_time,
      goods.delete_time,
      goods.hot_mumber,
      goods.is_promote,
      goods.cat_one_id,
      goods.cat_two_id,
      goods.cat_three_id,
      goods.goods_cat,
    ])
    return res
  }
  async insertPics(p){
    const statment = `INSERT INTO pics VALUES (?,?,?,?,?,?,?,?);`
      const res = await connection.execute(statment, [
        p.goods_id,
        p.pics_id,
        p.pics_big ,
        p.pics_mid ,
        p.pics_sma ,
        p.pics_big_url ,
        p.pics_mid_url ,
        p.pics_sma_url ,
      ])
  }
  async insertAttr(a){
    const statment = `INSERT INTO attr VALUES (?,?,?,?,?,?,?,?)`
    const res = await connection.execute(statment, [
      a.goods_id ,
      a.attr_id ,
      a.attr_value ,
      a.add_price ,
      a.attr_name ,
      a.attr_sel ,
      a.attr_write ,
      a.attr_vals ,
    ])
  }
}
 

module.exports = new InsertService();