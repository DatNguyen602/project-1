import axios from "axios";
import {useState } from "react";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";

const SignIn = () => {
    const [username,setUsername] = useState({});
    const navigate = useNavigate();
    const storage = localStorage;
    
    const onChange = (e) => {
        setUsername({
            [e.target.name] : e.target.value,
        })
    }
    
    const clickLogin = (e) => {
        e.preventDefault();
        axios.post("https://test-react.agiletech.vn/auth/login",username)
        .then((res) => {
            if (!res.data.code) {
                storage.setItem("accessToken",res.data.accessToken);
                storage.setItem("refreshToken",res.data.refreshToken);
                navigate("/project-1/");
            }
            else alert("Login fail!");
        })
        .catch(res => {
            console.log(res);
        });
    }

    return <form action="clickLogin">
        <div className="container col-12 p-5 my-5">
            <div className="signIn d-flex col-12 flex-column justify-content-center align-items-center">
                <h1 className="col-lg-2col-12 text-center fw-bold mb-5">Sign In</h1>
                <label className="col-lg-3 col-12 fs-6 mb-2" htmlFor="email">Username</label>
                <input id="email" name="username" className="col-lg-3 col-12 py-1 rounded border-1 px-2" type="text" onChange={onChange} placeholder=""/>
                <button 
                type="button"
                className="btn-signin col-lg-3 col-12 mt-4 rounded-pill p-2 border-0" 
                onClick={clickLogin}>
                    Sign In
                </button>
            </div>
        </div>
    </form>
}

export default SignIn;