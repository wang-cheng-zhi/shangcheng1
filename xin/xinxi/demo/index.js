/**
 * 云通信基础能力业务短信发送、查询详情以及消费消息示例，供参考。
 * Created on 2017-07-31
 */

const SMSClient = require('./../index')
const express = require("express");
const app = express();


var bodyParser = require("body-parser");
const mongodb = require("mongodb").MongoClient;
const db_str="mongodb://localhost:27017/zz-1809"



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
const accessKeyId = 'yourAccessKeyId'
const secretAccessKey = 'yourAccessKeySecret'

//在云通信页面开通相应业务消息后，就能在页面上获得对应的queueName,不用填最后面一段
const queueName = 'Alicom-Queue-1092397003988387-'

//初始化sms_client
let smsClient = new SMSClient({accessKeyId, secretAccessKey})

//短信回执报告
smsClient.receiveMsg(0, queueName).then(function (res) {
    //消息体需要base64解码
    let {code, body}=res
    if (code === 200) {
        //处理消息体,messagebody
        //console.log(body)
    }
}, function (err) {
    // console.log(err)
})

//短信上行报告
smsClient.receiveMsg(1, queueName).then(function (res) {
    //消息体需要base64解码
    let {code, body}=res
    if (code === 200) {
        //处理消息体,messagebody
        //console.log(body)
    }
}, function (err) {
    // console.log(err)
})


//查询短信发送详情
smsClient.queryDetail({
    PhoneNumber: '1500000000',
    SendDate: '20170731',
    PageSize: '10',
    CurrentPage: "1"
}).then(function (res) {
    let {Code, SmsSendDetailDTOs}=res
    if (Code === 'OK') {
        //处理发送详情内容
        //console.log(SmsSendDetailDTOs)
    }
}, function (err) {
    //处理错误
    //console.log(err)
})

//发送短信
function send(phonenum,yzm){
    smsClient.sendSMS({
        PhoneNumbers: phonenum,
        SignName: '麦付的程序',
        TemplateCode: 'SMS_158905134',
        TemplateParam: '{"code":${yzm}}'
    }).then(function (res) {
        let {Code}=res
        if (Code === 'OK') {
            //处理返回参数
            //console.log(res)
        }
    }, function (err) {
        // console.log(err)
    })    
}
//随机生成验证码
var code = null;
function suiji(){
    code = Math.floor(Math.random()*10000)
    return code;
}

// app.get("/test",(req,res)=>{
//     res.send("测试接口")
// })

//zhuche
app.post("/regist",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    console.log(req.body)
    var id = req.body.id;
    var phonenum = req.body.phonenum;
    
    if(id==1){
        suiji()
        console.log(code)
        send(phonenum,code)
        
        res.send("发送成功")
    }else{
        var yzm = req.body.yzm;
        if(yzm == code){
            mongodb.connect(db_str,(err,database)=>{
                database.collection("mydb",(err,coll)=>{
                    coll.find({phonenum:phonenum}).toArray((err,data)=>{
                       if(data.length>0){
                         res.send("该手机已经注册")
                       }else{
                           coll.insert({phonenum:phonenum,password:req.body.password},()=>{
                               res.send("注册成功")
                           })
                       }
                       database.close()
                    })
                })
            })
        }else{
            res.send("验证码错误")
        }
    }
    
})
//denglu
app.post("/login",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    var phonenum = req.body.phonenum;
    var password = req.body.password;
    var id = req.body.id;
    if(id == 1){
        mongodb.connect(db_str,(err,database)=>{
            database.collection("mydb",(err,coll)=>{
                coll.find({phonenum:phonenum,password:password}).toArray((err,data)=>{
                    if(data.length>0){
                        res.send("登陆成功")
                    }else{
                        res.send("登陆账号或密码错误,请更改")
                    }
                    database.close()
                })
            })
        })
    }else{
       
    }
 })

 //xiugaimima
app.post("/xiugai",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    var phonenum = req.body.phonenum;
    var passwordjiu = req.body.passwordjiu;
    var passwordxin = req.body.passwordxin;
   
        mongodb.connect(db_str,(err,database)=>{
            database.collection("mydb",(err,coll)=>{
                coll.find({phonenum:phonenum,password:passwordjiu}).toArray((err,data)=>{
                    if(data.length>0){
                        coll.update({phonenum:phonenum},{$set:{password:passwordxin}},false,true)
                        res.send("1")
                        
                    }else{
                        res.send("0")
                    }
                    database.close()
                })
            })
        })
    
})

//商品接口：
app.post("/index",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    //console.log(req.body)
    mongodb.connect(db_str,(err,database)=>{
        database.collection("fruit",(err,coll)=>{
            if(req.body.class){
                var cla = Number(req.body.class)
               
                coll.find({class:cla}).toArray((err,data)=>{
                    res.send(JSON.stringify(data))
                    database.close()
                })
            }else{
                coll.find({}).toArray((err,data)=>{
                    res.send(JSON.stringify(data))
                    database.close()
                })
            }
        })
    }) 
   
})  

//加入购物车
               
app.post("/gouwu",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    var phonenumber = req.body.phonenum
    console.log(req.body)
    mongodb.connect(db_str,(err,database)=>{
        database.collection(phonenumber+"",(err,coll)=>{
           
          coll.insert(req.body,(err)=>{
              if(!err){
                res.send("1")
            }else{
                res.send("0")
            }
        })         
        database.close()            
                    
        })
    })
})            
            
        

//detail 加入购物车
// app.post("/gouwu1",(req,res)=>{
//     res.header("Access-Control-Allow-Origin","*")
//     var phonenumber = req.body.phonenum
//      console.log(req.body)
//     mongodb.connect(db_str,(err,database)=>{
//         database.collection(phonenumber+"",(err,coll)=>{
           
//           coll.insert(req.body,(err)=>{
//             if(!err){
//                 res.send("1")
//             }else{
//                 res.send("0")
//                 }
//         })           
                  
//         database.close()      
//         })
//     })
// }) 

//gouwuche  shoppingzanshi

app.post("/shopping",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    //console.log(req.body)
      // var phonenumber = req.body.phonenum
    // if(phonenumber>0){
    //     mongodb.connect(db_str,(err,database)=>{
    //         database.collection(phonenumber+"",(err,coll)=>{
    //             coll.find({}).toArray((err,data)=>{
    //                 if(data.length>0){
    //                     if(req.body.id){
    //                         res.send(data)
    //                     }
    //                 }else{
    //                     res.send("0")
    //                 }
    //             })
    //         })
    //     })
    //  }
     res.send("1")
    
})    
    
    

            
        

            


app.listen(3000)