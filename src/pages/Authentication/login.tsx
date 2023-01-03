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
            <div className="flex justify-start w-1/4">
                <Button onClick={() => navigate("/")} className="mb-4">Go Back</Button>
            </div>
            <div className="w-1/4 mx-auto overflow-hidden rounded-lg bg-white dark:bg-soft-black">
                <div className="px-12 py-4 border dark:border-0">
                    <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">TiReact</h2>
                    <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome</h3>
                    <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Email Address</label>
                            <input {...register("email", { required: true })} id="Email" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
                            {errors.email && <Typography variant="small" color="red">*This Email Address is required</Typography>}
                        </div>

                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Password</label>
                            <input {...register("password", { required: true })} id="Password" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" />
                            {errors.password && <Typography variant="small" color="red">*This Password is required</Typography>}
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <a href="#" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</a>
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