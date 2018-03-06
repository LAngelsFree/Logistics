var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
// 连接数据库
var conn = mysql.createConnection(models.mysql);
conn.connect();
var jsonWrite = function(res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};
// 用户登录接口
router.post('/userLogin', (req, res) => {
  var sql = $sql.user.select;
  var params = req.body;
  // console.log(params);
  conn.query(sql, [params.username, params.password], function(err, result) {
    if (err) {
      console.log(err);
      res.json({
        status:"1",
        msg:err.message
      });
    }
    else{
      if(result.length > 0){
        res.json({
          status:'0',
          msg: '',
          result:{
            username:result.username
          }
        })
      } else {
        res.json({
          status: '1',
          msg: '用户名或密码错误'
        })
      }
    }
  })
});
module.exports = router;
