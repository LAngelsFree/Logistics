var sqlMap = {

  user: {
    add: 'insert into user(username ,password) values(?, ?)',
    select: 'select * from user where username=? and password=?'
  },
  order: {
    select: 'select * from order where orderId=?'
  }
}
module.exports = sqlMap;
