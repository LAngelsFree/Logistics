var mysql = require('mysql')

// module.exports = {
//   host     : '9.110.194.160',
//   user     : 'root',
//   password : 'root',
//   database : 'logistics',
//   port     : '3306'
// }

module.exports = {
  mysql: {
    host: '9.110.194.160',
    user: 'root',
    password: 'root',
    database: 'logistics',
    port: '3306'
  }
}


// var connection = mysql.createConnection({
//   host     : '9.110.194.160',
//   user     : 'root',
//   password : 'root',
//   database : 'mysql'
// });
// connection.connect();/*建立连接*/
//
// var sql = 'select * from test';/*建立查询语句*/
//
// connection.query(sql,function (err,result) {
//   if(err){
//     console.log('[SELECT ERROR] - ',err.message);
//     return;
//   }
//
//   for(var i = 0;i < result.length;i++){
//     console.log('\n')
//     console.log(result)
//   }
// })
