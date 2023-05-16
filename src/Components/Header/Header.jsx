import { Outlet, useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
import React from "react";

const Header = () => {
    const navigate = useNavigate();
    const storage = localStorage;

    const handleClickSignIn = () => {
        navigate("/project-1/signin");
    }

    const toPosts = () => {
        navigate("/project-1/");
    }

    const toProfile = () => {
        navigate("/project-1/profile");
    }

    const handleClickLogout = () => {
        storage.removeItem("accessToken");
        storage.removeItem("refreshToken");
        navigate("/project-1/");
    }

    return <div className="row m-0">
        {
        (window.location.href).search("profile") === -1 ?
        <div className="col-8 container text-center">
            <div className="container">
                <div className="col-12 py-4 header d-flex justify-content-between align-items-center">
                    <div className="logo d-flex align-items-end">
                        <div></div>
                        <div></div>
                    </div>
                    {
                        (window.location.href).search("signin") === -1 && (
                            storage.accessToken?
                            (<div className="header__-gin">
                                <button type="button" 
                                className="btn py-1 px-4 rounded-pill bg-home text-white me-4"
                                onClick={toProfile}
                                >
                                    Profile
                                </button>
                                <button type="button" 
                                className="btn py-1 px-4 rounded-pill bg-home text-white"
                                onClick={handleClickLogout}
                                >
                                    Logout
                                </button>
                            </div>):
                            (<div className="header__-gin">
                                <button type="button" 
                                className="btn py-1 px-4 rounded-pill bg-home text-white"
                                onClick={handleClickSignIn}
                                >
                                    Sign In
                                </button>
                            </div>)
                        )
                    }
                </div>
            </div>
        </div>
        :
        <div className="col-2 bg-secondary bg-opacity-25">
            <div className="h-100">
                <div className="col-12 py-4 header">
                    <div 
                    className="logo d-flex align-items-end px-4 mx-5 mb-5">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="header__-gin">
                        <button type="button" 
                        className="btn py-1 px-4"
                        onClick={toPosts}
                        >
                            Posts
                        </button>
                        <br/>
                        <button type="button" 
                        className="btn py-1 px-4"
                        onClick={handleClickLogout}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
        }

        <Outlet/>
    </div>
}

export default Header;