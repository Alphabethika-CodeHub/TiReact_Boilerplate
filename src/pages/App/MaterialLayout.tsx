import { Typography } from "@material-tailwind/react";
import { observer } from "mobx-react-lite";
import { Outlet } from "react-router-dom";
import CustomNavbar from '../Components/Layout/CustomNavbar';
import CustomFooter from './../Components/Layout/CustomFooter';

export const MaterialLayout = observer(() => {
    function RemoveComponent(): boolean {

        const url_2 = window.location.href;
        const url = window.location.href.split("/");
        const lastSegment = url.pop() || url.pop()
        console.log("SEGMENT: ", lastSegment, url_2);

        switch (lastSegment) {
            case "login":
                return true;

            default:
                return false;
        }
    }

    return (
        <>
            <div className="bg-black text-center py-2">
                <Typography className="text-white" variant="small">
                    • Built Different From <mark> Artisan</mark>
                </Typography>
            </div>

            {RemoveComponent() ? "" : <CustomNavbar />}
            <div id="main_layout" className="p-8">
                <Outlet />
            </div>

            {RemoveComponent() ? "" : <CustomFooter />}
        </>
    )
})