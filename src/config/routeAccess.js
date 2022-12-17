import { useLocation } from "react-router-dom"

export const RouteAccess = () => {
    const location = useLocation();
    const pathNameId = location.pathname.substring(
        location.pathname.lastIndexOf("/") + 1
    );

    return {
        ADMIN: [
            "/admin"
        ],
        MEMBER: [
            "/member"
        ],
        MAINTAINER: [
            "/maintainer"
        ]
    }
}