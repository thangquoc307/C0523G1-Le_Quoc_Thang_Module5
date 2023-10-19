import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import Layout from "./layout/Layout";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>} index/>
                <Route path="/user" element={<Users/>}/>
                <Route path={"/user/add"} element={<UserDetails/>}/>
                <Route path={`/user/:userId`} element={<UserDetails/>}/>
            </Routes>
        </BrowserRouter>
    );
}