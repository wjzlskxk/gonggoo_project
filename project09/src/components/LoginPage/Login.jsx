import { useEffect, useState } from "react";
import "./Login.css";
import MainLogo from "../logo.svg";

const User = {
  email: "test@example.com",
  pw: "test2323@@@@",
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const [emailValid, setEMailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(email)) {
      setEMailValid(true);
    } else {
      setEMailValid(false);
    }
  };

  const handlePassword = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const onClickConfirmButton = () => {
    if (email == User.email && pw === User.pw) {
      alert("로그인 성공");
    } else {
      alert("등록되지 않은 회원입니다.");
    }
  };

  return (
    <div className="page">
      <div className="titleWrap">
        <img src={MainLogo} alt="09's MainLogo" />
      </div>
      <div className="contentWrap">
        <div className="inputTitle">이메일주소</div>
        <div className="inputWrap">
          <input
            className="input"
            placeholder="test@example.com"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="errorMessageWrap">
          {!emailValid && email.length > 0 && (
            <div>올바른 이메일을 입력하세요</div>
          )}
        </div>

        <div className="inputTitle" style={{ marginTop: "26px" }}>
          비밀번호
        </div>
        <div className="inputWrap">
          <input
            className="input"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            value={pw}
            onChange={handlePassword}
            type="password"
          />
        </div>
        <div className="errorMessageWrap">
          {!pwValid && pw.length > 0 && (
            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요</div>
          )}
        </div>
      </div>

      <div>
        <button
          onClick={onClickConfirmButton}
          disabled={notAllow}
          className="bottomButton"
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default Login;