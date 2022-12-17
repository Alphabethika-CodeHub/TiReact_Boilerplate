export const RedirectByRole = (user) => {
    const parsedData = JSON.parse(user);
    switch (parsedData.role) {
        case "ADMIN":
            return "/admin/dashboard";

        case "MEMBER":
            return "/member/dashboard";

        default:
            return "/login";
    }
}