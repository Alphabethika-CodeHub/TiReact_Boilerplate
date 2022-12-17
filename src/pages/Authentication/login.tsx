import { Button, Input, Typography } from "@material-tailwind/react";
import { observer } from "mobx-react-lite";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { RedirectByRole } from "../../common/utils/RedirectByRole";
import { useStore } from "../../common/utils/useStore";

type Inputs = {
    email: string,
    password: string
}

export const Login = observer(() => {
    const navigate = useNavigate();
    const store: any = useStore();
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            await store.authentication.login(data).then((res: any) => {
                navigate(RedirectByRole(localStorage.getItem("userData")))
            })
        } catch (error) {
            console.log("Login Error: ", error)
            throw new Error("Login: Something Went Wrong!");
        }
    };


    return (
        <>
            <div className="w-1/4 mx-auto overflow-hidden bg-white dark:bg-black rounded-lg">
                <Button onClick={() => navigate("/")} className="mb-4">Go Back</Button>
                <div className="px-12 py-4 border">
                    <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">TiReact</h2>
                    <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome</h3>
                    <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="w-full mt-4">
                            <Input {...register("email", { required: true })} className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 " type="email" label="Email Address" />
                            {errors.email && <Typography variant="small" color="red">*This Email Address is required</Typography>}
                        </div>

                        <div className="w-full mt-4">
                            <Input {...register("password", { required: true })} className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 " type="password" label="Password" />
                            {errors.password && <Typography variant="small" color="red">*This Password is required</Typography>}
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            {/* <a href="#" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</a> */}
                            <button type="submit" className="px-4 py-2 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none">Login</button>
                        </div>
                    </form>
                </div>

                <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>
                    <button onClick={() => navigate("/register")} className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Register</button>
                </div>
            </div>
        </>
    )
})