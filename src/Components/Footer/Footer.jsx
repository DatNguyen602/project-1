

const Footer = () => {

    return <div>
        <div className="col-8 container text-start">
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <div className="d-flex align-items-end mb-5">
                            <div className="logo d-flex align-items-end mt-4">
                                <div></div>
                                <div></div>
                            </div>
                            <h3 className="m-0 ms-4">DataWarehouse</h3>
                        </div>
                        <a href="#" className="d-block text-black pt-4 text-decoration-none">
                            Warehouse Society, 234 <br/>
                            Bahagia Ave Street PRBW 29281 
                        </a>
                        <a href="#" className="d-block text-black pt-4 mb-4 text-decoration-none">
                            info@warehouse.project <br/>
                            1-232-3434 (Main)
                        </a>
                    </div>
                    <div className="col-2 mt-4 pt-2 d-flex flex-column">
                        <h3 className="mb-5">About</h3>
                        <a className="mb-4 text-decoration-none text-black" href="#">Profile</a>
                        <a className="mb-4 text-decoration-none text-black" href="#">Features</a>
                        <a className="mb-4 text-decoration-none text-black" href="#">Careers</a>
                        <a className="mb-4 text-decoration-none text-black" href="#">DW News</a>
                    </div>
                    <div className="col-2 mt-4 pt-2 d-flex flex-column">
                        <h3 className="mb-5">Help</h3>
                        <a className="mb-4 text-decoration-none text-black" href="#">Support</a>
                        <a className="mb-4 text-decoration-none text-black" href="#">Sign up</a>
                        <a className="mb-4 text-decoration-none text-black" href="#">Guide</a>
                        <a className="mb-4 text-decoration-none text-black" href="#">Reports</a>
                        <a className="mb-4 text-decoration-none text-black" href="#">Q&A</a>
                    </div>
                    <div className="col-3 mt-4 pt-2 d-flex flex-column">
                        <h3 className="mb-5">Social Media</h3>
                        <div className="d-flex justify-content-between">
                            <div className="circle"><a href="#"></a></div>
                            <div className="circle"><a href="#"></a></div>
                            <div className="circle"><a href="#"></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-8 container text-start">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <a className="mb-5 pb-5 mt-5 text-decoration-none text-black" href="#">
                        © Datawarehouse™, 2020. All rights reserved.<br/>
                        Company Registration Number: 21479524.
                    </a>
                    <a className="mb-5 pb-5 mt-5 text-decoration-none text-black" href="#">
                        <div className="circle">
                            <img src="./SenMe.png" alt="" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
}

export default Footer;