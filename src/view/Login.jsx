import React from 'react';
import {Link} from 'react-router-dom';
const Login = () => (
    <div className="login_wrap">
        <form>
            <fieldset>
                <legend>LOGIN</legend>
                <div className="login">
                    <div className="login_img">
                        <img src="image/padlock.png" />
                    </div>
                    <ul>
                        <li>아이디<input type="text" placeholder="Enter username" /></li>
                        <li>비밀번호<input type="password" placeholder="Enter Password" /></li>
                    </ul>
                    <ul className="login_ck">
                        <li><Link to="register.html">회원가입</Link></li>
                        <li><Link to="password_find.html">비밀번호 찾기</Link></li>
                    </ul>
                    <ul className="login_bt">
                        <li><Link to="mypage.html">로그인</Link></li>
                    </ul>
                </div>
            </fieldset>
        </form>
    </div>
)

export default Login;