//이메일 중복확인
function emailCheck() {
  let email = $(".idInput").val();
  let regExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (email.match(regExp) != null) {
    alert("사용 가능한 아이디(이메일) 입니다");
  } else {
    alert("아이디(이메일)형식을 확인해주세요");
  }
}

//비밀번호 일치확인
function is_password(asValue) {
  let regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,20}$/;

  console.log("aaaaa");
  return regExp.test(asValue);
}

function signUp() {
  let password = $(".pwInput").val();
  let password2 = $(".pwCheck").val();
  let name = $(".nameInput").val();

  if (!is_password(password)) {
    alert(
      "비밀번호의 형식을 확인해주세요. 영문과 숫자 필수 포함, 특수문자(!@#$%^&*) 사용가능 8-20자"
    );
    return false;
  } else if (password2 != password) {
    alert("비밀번호가 일치하지 않습니다.");
    return false;
    console.log("sdflkajl");
  } else {
    alert(`${name}님 낚당! 가입을 축하합니다`);
    window.location.replace("/loginForm");
  }
}

$(".loginBtn").click(function () {
  let id = $(".loginId").val();
  let pw = $(".loginPw").val();
  if (id == "" || pw == "") {
    alert("아이디 / 비밀번호를 입력해주세요");
  } else {
    alert("낚당! 에 오신 것을 환영합니다");
    window.location.replace("/");
  }
});

$(".joinBtn").click(function () {
  window.location.replace("/joinForm");
});
