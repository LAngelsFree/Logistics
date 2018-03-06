var sqlMap = {

  user: {
    add: 'insert into user(username ,password) values(?, ?)',
    select: 'select * from user where username=? and password=?'
  }
}
module.exports = sqlMap;
