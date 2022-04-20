const connection = require('../app/database');

class FrontPageService {
  async getSwiperList() {
    const statment = `SELECT * FROM swiper GROUP BY goods_id`;
    const [res] = await connection.execute(statment);
    return res
  };
  async getCatitems() {
    const statment = `SELECT * FROM catitem GROUP BY name`;
    const [res] = await connection.execute(statment);
    return res
  }
  async getfloorData() {
    const statment = `
    SELECT 
      JSON_OBJECT('image_src', f.image_src, 'name', f.name) floor_title ,
      JSON_ARRAYAGG(
        JSON_OBJECT(
          'image_src', p.image_src,'name',p.name, 'navigator_url',p.navigator_url, 'open_type',p.open_type, 'image_width',p.image_width))
      product_list
    FROM floor f 
    LEFT JOIN product p ON f.id = p.floor_id 
    GROUP BY f.id;
    `;
    const [res] = await connection.execute(statment);
    return res
  }
}

module.exports = new FrontPageService()