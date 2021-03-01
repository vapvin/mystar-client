import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser} from '../utils/Auth/auth';

function Join(){

    const [regist, setRegist] = useState({
        username: "",
        email: "",
        password1: "",
        password2: ""
    });

    const [error, setError] = useState("");

    const dispatch = useDispatch()

    const userData = useSelector(state => state);
    console.log(userData);

    const getInputData = e => {
        const {value, name} = e.target;
        setRegist({
            ...regist, 
            [name]: value
        })
        console.log(regist);
    }

    const joinReq = e => {
        e.preventDefault();
        if(regist.password1 !== regist.password2){
            setError("비밀번호가 틀립니다.")
        } else {
            dispatch(registerUser(regist));
        }
    }
    
    return(
        <>
        <div className="register_wrap">
        <form onSubmit={joinReq}>
            <fieldset>
                <legend>Register</legend>
                <div className="register">
                    <div className="register_img">
                        <img src="image/padlock.png"/>
                    </div>
                    <ul>
                        <li>아이디<input name="username" onChange={getInputData} type="text" placeholder="Enter username"/></li>
                        <li>Email<input name="email" onChange={getInputData} type="text" placeholder="Enter Email"/></li>
                        <li>비밀번호<input name="password1" onChange={getInputData} type="password" placeholder="Enter Password"/></li>
                        <li>비밀번호 확인<input name="password2" onChange={getInputData} type="password" placeholder="Enter Confirm Password"/></li>
                    </ul>
                    {error ? error : null}
                    <ul className="register_bt">
                        <li><button>가입하기</button></li>
                    </ul>
                </div>
            </fieldset>
        </form>
    </div>
    </>
    )
}

export default Join;