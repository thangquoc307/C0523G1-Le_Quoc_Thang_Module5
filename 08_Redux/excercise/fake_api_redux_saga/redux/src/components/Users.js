import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll, remove } from "../reduxs/middlewares/UserMiddleware";

export default function Users() {
    const users = useSelector((store) => store.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAll());
    }, []);

    const handleDelete =  (id) => {
        dispatch (remove(id));
    }
    if (!users) {
        return null;
    }

    return (
        <div>
            <section className="bg-image">
                <div className="mask d-flex align-items-center gradient-custom-3">
                    <div className="container ">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ borderRadius: 15 }}>
                                    <div className="card-body p-5">
                                        <div
                                            style={{ textAlign: "center" }}
                                            className="form-outline mb-4"
                                        >
                                            {" "}
                                            <h2>To Do List</h2>{" "}
                                        </div>
                                        <ul>
                                            {users.map((user) => {
                                                return (
                                                    <li key={user.id}>
                                                        {user.name}
                                                        <button onClick={()=>{handleDelete(user.id)}} >Delete</button>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}