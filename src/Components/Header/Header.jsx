import { Outlet, useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
import store from "../../app/store";
import { useContext, useEffect } from "react";

const Header = () => {
    const navigate = useNavigate();
    const {token,handleSetPage} = useContext(store.State);

    const handleClickSignIn = () => {
        handleSetPage("signin");
        navigate("/project-1/signin");
    }

    const handleClickLogout = () => {
        handleSetPage("home");
        token.setItem("accessToken","");
        token.setItem("refreshToken","");
        navigate("/project-1/");
    }

    console.log(token.isPage);

    useEffect(() => {
        token.acessToken === "" && handleSetPage("home");
    },[token.acessToken])

    return <div>
        <div className="col-8 container text-center">
            <div className="container">
                <div className="col-12 py-4 header d-flex justify-content-between align-items-center">
                    <div className="logo d-flex align-items-end">
                        <div></div>
                        <div></div>
                    </div>
                    {(token.isPage === "home") &&
                    <div className="header__-gin">
                        <div className="btn py-1 px-4 rounded-pill bg-home text-white"
                         onClick={handleClickSignIn}
                        >Sign In</div>
                    </div>
                    }

                    {token.isPage === "homelog" && token.accessToken !== "" &&
                    <div className="header__-gin">
                        <div className="btn py-1 px-4 rounded-pill bg-home text-white me-4">Profile</div>
                        <div className="btn py-1 px-4 rounded-pill bg-home text-white"
                        onClick={handleClickLogout}>Logout</div>
                    </div>}
                </div>
            </div>
        </div>

        <Outlet/>
    </div>
}

export default Header;