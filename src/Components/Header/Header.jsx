import { Outlet, useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
import React from "react"

const Header = () => {
    const navigate = useNavigate();
    const token = sessionStorage;

    const handleClickSignIn = () => {
        navigate("/project-1/signin");
    }

    const handleClickLogout = () => {
        token.clear();
        navigate("/project-1/");
    }

    return <React.Fragment>
        <div className="col-8 container text-center">
            <div className="container">
                <div className="col-12 py-4 header d-flex justify-content-between align-items-center">
                    <div className="logo d-flex align-items-end">
                        <div></div>
                        <div></div>
                    </div>
                    {
                        token.accessToken?
                        (<div className="header__-gin">
                            <div className="btn py-1 px-4 rounded-pill bg-home text-white me-4">
                                Profile
                            </div>
                            <div className="btn py-1 px-4 rounded-pill bg-home text-white"
                            onClick={handleClickLogout}>
                                Logout
                            </div>
                        </div>):
                        (<div className="header__-gin">
                            <div className="btn py-1 px-4 rounded-pill bg-home text-white"
                            onClick={handleClickSignIn}>
                                Sign In
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>

        <Outlet/>
    </React.Fragment>
}

export default Header;