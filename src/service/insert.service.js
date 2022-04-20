const connection = require('../app/database');

class InsertService {
  async insert(a,b,c,d,e,f) {
    const statment = `INSERT INTO catgory_b (cat_icon,cat_id ,cat_level ,cat_name,cat_pid,catgory_a_id) VALUES (?,?,?,?,?,?);`;
    const res = connection.execute(statment, [a,b,c,d,e,f])
    return res
  }
  async insertb(a,b,c,d,e) {
    const statment = `INSERT INTO catgory (cat_icon,cat_id ,cat_level ,cat_name,cat_pid) VALUES (?,?,?,?,?);`;
    const res = connection.execute(statment, [a,b,c,d,e])
    return res
  }
}


module.exports = new InsertService();