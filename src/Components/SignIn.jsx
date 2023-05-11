import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
import store from "../app/store.js"

const SignIn = () => {
    const [username,setUsername] = useState({});
    const [checkMail,setCMail] = useState("");
    const navigate = useNavigate();
    
    const onChange = (e) => {
        setUsername({
            [e.target.name] : e.target.value,
        })
    }
    
    const checkEmail = (e) => {
        // const regEmail = /\@.+?\.[a-zA-Z0-9]/ ;
        if(e.target.value === ""){
            setCMail("Username is Emty!");
            return;
        }

        // if(e.target.value.search(regEmail) === -1){
        //     setCMail("Email is invalid!");
        //     return;
        // }
        // else{
        //     setCMail("");
        // }
        console.log(username);
    }
    
    const clickLogin = (e) => {
        e.preventDefault();
        if(checkMail === ""){
            axios.post("https://test-react.agiletech.vn/auth/login",username)
            .then((res) => {
                // alert(res.status);
                console.log(res);
                if (!res.data.code) {
                    navigate("/project-1/homesignin");
                    store = {...res.data.acessToken,
                    ...res.data.refreshToken
                };
                }
                else alert("Login fail!");
            })
            .catch(res => {
                console.log(res);

            })
        }
        else{
            alert("Please check your User name!");
        }
    }    

    return <form action="clickLogin">
        <div className="container col-12 px-5">
            <div id="Nav" className="position-fixed">
                <div className="logo d-flex align-items-end mt-4">
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="signIn d-flex col-12 flex-column justify-content-center align-items-center">
                <h1 className="col-lg-2col-12 text-center fw-bold mb-5">Sign In</h1>
                <label className="col-lg-3 col-12 fs-6 mb-2" htmlFor="email">Username</label>
                <input id="email" name="username" className="col-lg-3 col-12 py-1 rounded border-1 px-2" type="text" onBlur={checkEmail} onChange={onChange} placeholder=""/>
                <p className="col-lg-3 col-12 fs-6 text-danger text-start mt-2">{checkMail}</p>
                <button className="btn-signin col-lg-3 col-12 mt-4 rounded-pill p-2 border-0" onClick={clickLogin}>Sign In</button>
            </div>
        </div>
    </form>
}

export default SignIn;