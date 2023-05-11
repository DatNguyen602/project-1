import Cards from "./Cards"

const Content = () => {

    return <div>
        <div className="col-8 container text-center">
            <div className="container">
                <div className="content position-relative text-start my-5 py-5">
                    <img src="./image1 1.png" alt="Anh" className="content--img col-8 position-absolute" />
                    <h1 className="fw-700 mb-5 fs-80 col-7 content--h1">Save your data storage here.</h1>
                    <p className="col-5 content--p fs-18">
                    Data Warehouse is a data storage area that has been tested for
                    security, so you can store your data here safely but not be afraid of
                    being stolen by others.
                    </p>
                    <div className="btn py-1 px-4 rounded-pill bg-home text-white mt-5">Learn More</div>
                </div>
                <div className="col-12 d-flex flex-column align-items-center text-center">
                    <h1 className="fs-2 fw-bold">Feature</h1>
                    <p className="col-6">Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.</p>
                    <div className="col12 row d-flex justify-content-evenly">
                        {Cards.map((value,index) => {
                            return <div key={value.id} className="home--card col-5 text-start position-relative ps-5 py-4">
                            <img className="position-absolute col-11 end-0" src={value.bg1} alt="" />
                            <img src={value.bg2} alt="" className="img-s position-absolute" />
                            <div className="col-12 ms-3 p-4 d-flex flex-column align-items-end">
                                <h1 className="col-7 fs-4 fw-bold">Search Data</h1>
                                <p className="col-7">Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.</p>
                                <a href="#" className="d-flex col-7 text-decoration-none">
                                    <p className="text-black me-2">Learn more</p>
                                    <i className="bi bi-arrow-right text-home"></i>
                                </a>
                            </div>
                        </div>
                        })}
                    </div>
                </div>

                <div className="col-12 mt-5">
                    <div className="col-11 bg-home rounded-5 pt-5 pb-2">
                        <h1 className="fs-3 mb-5 text-white text-start ms-5 ps-2">Testimonials</h1>
                        <div className="row">
                            <i className="bi bi-arrow-left col-1 text-white
                            d-flex align-items-center justify-content-center"></i>
                            <div className="col-10 rounded-3 bg-white">
                                <div className="row py-5">
                                    <span className="col-2 ms-5 me-4"><img src="./Avatar.png" alt="" className="" /></span>
                                    <span className="col-8 text-start">
                                        <h1 className="fs-4">John Fang</h1>
                                        <a className="text-home text-decoration-none" href="#">wordfaang.com</a>
                                        <p className="mt-5">Suspendisse ultrices at diam lectus nullam. 
                                        Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.</p>
                                    </span>
                                </div>
                            </div>
                            <i className="bi bi-arrow-right col-1 text-white
                            d-flex align-items-center justify-content-center"></i>
                        </div>
                        <div className="mt-4 text-white">
                            <i className="bi bi-dot"></i>
                            <i className="bi bi-dot"></i>
                            <i className="bi bi-dot"></i>
                            <i className="bi bi-dot"></i>
                            <i className="bi bi-dot"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="home-line"></div>
    </div>
}

export default Content;