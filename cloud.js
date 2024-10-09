const express = require('express')
const { MongoClient } = require('mongodb')
const app = express()
let db 
const url = 'mongodb+srv://elwlals:dlwl583765@cluster0.aky7a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
new MongoClient(url).connect().then((client)=>{
    console.log('db연결성공')
    db = client.db('forum1')
})
app.set('view engine', 'ejs')
app.listen(8080,()=>{
    console.log('http://localhost:8080에서 서버실행')
    
})
app.use(express.static(__dirname + '/public'))
app.get('/news1',(req,res)=>{
    db.collection('post2').insertOne({title : '제목입니다.1'})
    .then(result => {
        res.send('데이터 삽입완료')
    })
    .catch(error=>{
        res.send('데이터 오류 발생')
    })
})
app.get('/list',async(req,res)=>{
    let result = await db.collection('post2').find().toArray()
    res.render('list.ejs',{문서목록 : result})
})
app.get('/news2',(req,res)=>{
    db.collection('post2').insertOne({title : '제목입니다.2'})
    .then(result => {
        res.send('데이터 삽입완료')
    })
    .catch(error=>{
        res.send('데이터 오류 발생')
    })
})
app.get('/',(req,res) =>{
    res.sendFile(__dirname+'/index1.html');
})
app.get('/about',(req,res) =>{
    res.send('about');
})
app.get('/news',(req,res) =>{
    res.send('raining');
})
