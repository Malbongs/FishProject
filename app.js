const express = require("express"); //express 모델 불러오기
const app = express(); //app 에 담기
const shopRouter = require("./routers/shop.js"); // 쇼핑몰 라우터 분리
app.set("view engine", "ejs"); //html 파일 불러오기
// app.use( express.static('publuic'));  //public/img.panda.jpeg

app.use("/static", express.static(__dirname + "/static")); // 접근하기 위해서  /static/img/panda.jpeg

const port = 8083; //8080번 포트로 연결
//ip:8000/
app.get("/", (req, res) => {//다음 주소를 정해주는 문자열 req(request약자)클라이언트가 사버에게    res(restuns)서버가 클라이언트한테 보내는 응답
    res.render("main");
})

app.get("/loginForm", (req, res) => {
  res.render("loginForm");
});

//회원가입 폼으로 이동
app.get("/joinForm", (req, res) => {
  res.render("joinForm");
});

//자유게시판으로 이동
app.get("/board", (req, res) => {
  res.render("board");
});

app.get("/boardLure", (req, res) => {
  res.render("boardLure");
});

app.get("/boardInner", (req, res) => {
  res.render("boardInner");
});

app.get("/boardWrite", (req, res) => {
  res.render("boardWrite");
});

//main으로 이동
app.get("/main", (req, res) => {
  res.render("main");
});

//월별 낚시페이지로 이동
app.get("/fishinfo", (req, res) => {
  res.render("fishinfo");
});

//미디어로 이동
app.get("/media", (req, res) => {
  res.render("media");
});

app.use("/shop",shopRouter); //쇼핑몰 라우터로 이동

app.listen(port, () => {
  console.log("server open:", port);
}); //서버를 만드는 코드들
