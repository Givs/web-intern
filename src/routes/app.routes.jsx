import { Routes, Route } from 'react-router-dom';

import { HomePage } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { AddUserPage } from "../pages/AddUser";

export function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/add-user" element={<AddUserPage />} />
        </Routes>
    )
}