import { Route, Routes, BrowserRouter } from "react-router-dom";
import { NotFound } from "../pages/Void/NotFound";
import { Unauthorized } from "../pages/Void/Unauthorized";
import RequireAuth from "../common/utils/RequireAuth";
import { LandingPage } from "../pages/LandingPage";
import { Register } from "../pages/Authentication/register";
import { Login } from "../pages/Authentication/login";
import GuestAuth from "../common/utils/GuestAuth";

export const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<RequireAuth allowedRole={"ADMIN"} />}>
                    <Route path="/home" exact element={<Login />} />
                </Route>

                <Route element={<RequireAuth allowedRole={"MEMBER"} />}>
                    <Route path="/home" exact element={<Login />} />
                </Route>

                <Route element={<RequireAuth allowedRole={"MAINTAINER"} />}>
                    <Route path="/home" exact element={<Login />} />
                </Route>

                <Route element={<GuestAuth />}>
                    <Route path="/login" exact element={<Login />} />
                    <Route path="/register" exact element={<Register />} />
                </Route>

                <Route element={<RequireAuth allowedRole={null} />}>

                    <Route path="/" exact element={<LandingPage />} />

                    <Route path="/unauthorized" exact element={<Unauthorized />} />
                    <Route path="/404" exact element={<NotFound />} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}