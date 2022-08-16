const express = require("express"); //express 모델 불러오기 
const app = express();   //app 에 담기
app.set("view engine", "ejs"); //html 파일 불러오기
// app.use( express.static('publuic'));  //public/img.panda.jpeg
app.use( '/static', express.static(__dirname+'/static')); // 접근하기 위해서  /static/img/panda.jpeg 

const port = 8080; //8000번 포트로 연결
//ip:8000/
app.get("/",(req,res)=>{//다음 주소를 정해주는 문자열 req(request약자)클라이언트가 사버에게    res(restuns)서버가 클라이언트한테 보내는 응답
    res.render("main"); 

}) 

//로그인 폼으로 이동
app.get("/loginForm",(req,res)=>{
    res.render("loginForm.ejs");
})

//회원가입 폼으로 이동
app.get("/joinForm",(req,res)=>{
    res.render("joinForm.ejs");
})

//자유게시판으로 이동
app.get("/ddd",(req,res)=>{
    res.render("ddd.ejs");
})

//main으로 이동
app.get("/main",(req,res)=>{
    res.render("main");
})


app.listen(port,()=>{
    console.log("server open:",port);
})    //서버를 만드는 코드들
