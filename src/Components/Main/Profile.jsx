import React, { useState } from "react";
import data from "../../asset/data/profile.json";

const Profile = () => {
    const editProfile = () => {
        console.log(1);
    }

    const handleChange = (e) => {
        console.log(e);
    }

    const delProfile = () => {
        console.log(1);
    }

    return <div id="profile" className="col-10 text-center d-flex justify-content-center vh-100">
        <div className="col-10 mx-5 pt-5 mt-5 justify-content-center">
            <div className=" col-12 profile-button d-flex justify-content-between mb-4">
                <div className="btn py-2 px-5 rounded-pill bg-home text-white">
                    Add New
                </div>
                <span className="d-flex">
                    <div>
                        <input 
                        name="title"
                        onChange={handleChange}
                        className="px-4 py-1 rounded border-1 me-4" 
                        type="text" placeholder="Title"/>
                    </div>
                    <div className="sub-icon">
                        <input 
                        name="tags"
                        onChange={handleChange}
                        className="px-4 py-1 rounded border-1" 
                        type="text" placeholder="Tags"/>
                        <div><i class="bi bi-arrow-down"></i></div>
                    </div>
                </span>
            </div>

            <div className="col-12 row m-0 mb-4">
                <div className="col-2 py-2 bg-secondary bg-opacity-25 border-end-black">
                    ID
                </div>
                <div className="col-3 py-2 bg-secondary bg-opacity-25 border-end-black">
                    Title
                </div>
                <div className="col-2 py-2 bg-secondary bg-opacity-25 border-end-black">
                    Description
                </div>
                <div className="col-3 py-2 bg-secondary bg-opacity-25 border-end-black">
                    Tags
                </div>
                <div className="col-2 py-2 bg-secondary bg-opacity-25 border-end-black">
                    Action
                </div>
            </div>

            {
                data.map((value)=>{
                    return <div key={value.id} className="col-12 row m-0">
                        <div className="col-2 py-2 bg-secondary bg-opacity-25 border-black">
                            {value.id}
                        </div>
                        <div className="col-3 py-2 bg-secondary bg-opacity-25 border-black">
                            {value.title}
                        </div>
                        <div className="col-2 py-2 bg-secondary bg-opacity-25 border-black">
                            {value.description}
                        </div>
                        <div className="col-3 py-2 bg-secondary bg-opacity-25 border-black">
                            {value.tags}
                        </div>
                        <div className="col-2 bg-secondary bg-opacity-25 border-black">
                            <button 
                            type="button" className="border-0 btn p-2 me-4"
                            onClick={editProfile}
                            >
                                <i class="bi bi-pen"></i>
                            </button>
                            <button 
                            type="button" className="border-0 btn p-2"
                            onClick={delProfile}>
                                <i class="bi bi-trash3"></i>
                            </button>
                        </div>
                    </div>
                })
            }

            <div className="col-12 row m-0 mt-4 justify-content-end">
                <div className="col-10 d-flex justify-content-end p-0">
                    <div className="col-3 p-2 bg-secondary bg-opacity-25">
                        Phần phân trang
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Profile;