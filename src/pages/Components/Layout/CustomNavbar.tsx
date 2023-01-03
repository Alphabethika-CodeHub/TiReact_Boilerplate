import { useEffect, useState } from "react";
import * as Icon from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";
import {
    Switch,
    Button,
} from "@material-tailwind/react";

export default function CustomNavbar() {
    const navigate = useNavigate()

    // Check Default System Theme
    const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const [toggleDark, setToggleDark] = useState(isSystemDark);

    function setDarkClassToDom() {
        const parentDom = document.getElementById("parent-html")
        toggleDark ? parentDom?.classList.add("dark") : parentDom?.classList.remove("dark")
    }
    setDarkClassToDom()

    return (
        <div style={{ borderBottomWidth: 1 }} className="w-full p-3 sticky top-0 z-30 backdrop-blur-lg dark:bg-elegant-black dark:text-white">
            <div className="flex justify-between">
                <div>
                    <Button size="sm" className="text-black dark:text-white text-md" onClick={() => navigate("/")} variant="text">TiReact</Button>
                </div>
                <div className="flex align-middle h-full gap-3">
                    <Button size="sm" className="text-black dark:text-white text-md" onClick={() => navigate("/explore")} variant="text">Explore</Button>
                    <Button size="sm" className="text-black dark:text-white text-md" onClick={() => navigate("/contact-us")} variant="text">Contact Us</Button>
                    <Button size="sm" className="text-black dark:text-white text-md" onClick={() => navigate("/about")} variant="text">About</Button>
                    <Switch className="dark:text-white" checked={toggleDark} onChange={() => { toggleDark ? setToggleDark(false) : setToggleDark(true) }} label={toggleDark ? "Light Mode" : "Dark Mode"} />
                </div>
                <div>
                    <Button size="sm" className="text-black dark:text-white text-md" onClick={() => navigate("/login")} variant="outlined">
                        <span className="flex items-center gap-3">Login <Icon.BoxArrowInRight /></span>
                    </Button>
                </div>
            </div>
        </div>
    );
}