import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development"

const Header = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/project-1/signin");
    }

    return <div>
        <div className="col-8 container text-center">
            <div className="container">
                <div className="col-12 header d-flex justify-content-between align-items-center">
                    <div className="logo d-flex align-items-end mt-4">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="header__-gin">
                        <div className="btn py-1 px-4 rounded-pill bg-home text-white"
                         onClick={handleClick}
                        >Sign In</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Header;