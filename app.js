var express = require("express"),
	app = express(),
	mongodb = require('mongodb'),
	server  = new mongodb.Server('localhost', 27017, {}),
	db = new mongodb.Db('mydb', server, {}),
	usersCollection = db.collection("users"),
    conCollection = db.collection("commodity");
var fs = require("fs");
//静态文件托管
app.use(express.static("../HT"));
//默认是home页面
app.get("/",function(req,res){
	res.sendFile(__dirname+"/index.html");
});


db.open(function(err, db){
    if(!err){
        console.log('数据库连接成功！');
        //插入数据库
        global.insert = function(collName,data,callback){
            collName.insert(data,function(err){
                if(err){
                    console.log("Error:"+err);
                    return;
                }
                callback();
            });
        }
        //查询数据库
        global.search = function(collName,data){
            collName.findOne(data,function(err,doc){
                if(doc){
                    global.flag = true;
                }else{
                    global.flag = false;
                }
            });
        }
    }else{
        console.log(err);
    }
});

//注册
app.post('/register', function (req, res) {
    var allData = "";
    req.on("data",function(chunk){
        allData += chunk;
    });
    req.on("end",function(){
        res.end('success');
        var arr = allData.split(/[&=]/),
            arr1 = arr[0],
            arr2 = arr[1],
            arr3 = arr[2],
            arr4 = arr[3],
            dataObj = {};
        dataObj[arr1] = arr2;
        dataObj[arr3] = arr4;
        insert(usersCollection,dataObj,function(){
            //console.log("注册成功");
        });
    });
});
//登录
app.post('/login', function (req, res) {
    var allData = "";
    req.on("data",function(chunk){
        allData += chunk;
    });
    req.on("end",function(){
        var arr = allData.split(/[&=]/),
            arr1 = arr[0],
            arr2 = arr[1],
            arr3 = arr[2],
            arr4 = arr[3],
            dataObj = {};
        dataObj[arr1] = arr2;
        dataObj[arr3] = arr4;
        search(usersCollection,dataObj);
        setTimeout(function(){
            if(flag){
                res.send(200);
            }else{
                res.send(404);
            }
        },500);
    });
});

fs.readFile("./data/filter.json",function(err,data){
    if(err){
        console.log("读取文件错误");
    }
    var data = JSON.parse(data.toString());
    // insert(conCollection,data,function(){
    // });
});

app.listen(3000,function(){
	console.log("node服务器开启")
});