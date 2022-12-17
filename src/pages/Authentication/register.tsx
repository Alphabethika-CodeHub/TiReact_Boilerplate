import { Button, Typography } from "@material-tailwind/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import { useStore } from "../../common/utils/useStore";

type Inputs = {
    username: string,
    name: string,
    email: string,
    password: string
}

export const Register = () => {
    const store: any = useStore();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            return await store.authentication.register(data).then(() => navigate("/login"))
        } catch (error) {
            console.log("Register Error: ", error)
            throw new Error("Register: Something Went Wrong!");
        }
    };

    return (
        <>
            <Button onClick={() => navigate(-1)} className="mb-4">Go Back</Button>
            <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl border">
                <div className="hidden bg-cover lg:block lg:w-1/2" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')` }}></div>

                <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">
                        TiReact
                    </h2>

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

                        <span className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 ">
                            Register Form
                        </span>

                        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Username</label>
                            <input {...register("username", { required: true })} id="Username" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="text" />
                            {errors.username && <Typography variant="small" color="red">*This Username is required</Typography>}
                        </div>

                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Full Name</label>
                            <input {...register("name", { required: true })} id="name" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="text" />
                            {errors.name && <Typography variant="small" color="red">*This Fullname is required</Typography>}
                        </div>

                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Email Address</label>
                            <input {...register("email", { required: true })} id="EmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
                            {errors.email && <Typography variant="small" color="red">*This Email Address is required</Typography>}
                        </div>

                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Password</label>
                                {/* <a href="#" className="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forgot Password?</a> */}
                            </div>

                            <input {...register("password", { required: true })} id="Password" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" />
                            {errors.password && <Typography variant="small" color="red">*This Password is required</Typography>}
                        </div>
                        <div className="mt-8">
                            <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                                Register Now
                            </button>
                        </div>
                    </form>


                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                        <Button variant="text" onClick={() => navigate("/login")} className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or Sign in</Button>

                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </>
    )
}