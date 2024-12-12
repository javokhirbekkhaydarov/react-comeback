import { useState } from "react";

import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import React from "react";
import {Link} from "react-router-dom";
export function Login() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

    return (
        <section className="grid text-center h-screen items-center p-8">
            <div>
                <Typography variant="h3" color="gray" className="mb-2">
                    Sign Up
                </Typography>
                <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
                    Enter your email and password to sign in
                </Typography>
                <form action="#" className="mx-auto max-w-[24rem] text-left">
                    <div className="mb-6">
                        <label htmlFor="name">
                            <Typography
                                variant="small"
                                className="mb-2 block font-medium text-gray-900"
                            >
                                Your Name
                            </Typography>
                        </label>
                        <Input
                            id="name"
                            color="gray"
                            size="lg"
                            type="email"
                            name="email"

                            placeholder="Javo"
                            className="w-full p-2 rounded-lg placeholder:opacity-100 outline-none focus:border-t-primary border-t-blue-gray-200"
                            labelProps={{
                                className: "hidden",
                            }}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="surname">
                            <Typography
                                variant="small"
                                className="mb-2 block font-medium text-gray-900"
                            >
                                Your Surname
                            </Typography>
                        </label>
                        <Input
                            id="surname"
                            color="gray"
                            size="lg"
                            type="email"
                            name="email"

                            placeholder="Khaydarov"
                            className="w-full p-2 rounded-lg placeholder:opacity-100 outline-none focus:border-t-primary border-t-blue-gray-200"
                            labelProps={{
                                className: "hidden",
                            }}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email">
                            <Typography
                                variant="small"
                                className="mb-2 block font-medium text-gray-900"
                            >
                                Your Email
                            </Typography>
                        </label>
                        <Input
                            id="email"
                            color="gray"
                            size="lg"
                            type="email"
                            name="email"

                            placeholder="name@mail.com"
                            className="w-full p-2 rounded-lg placeholder:opacity-100 outline-none focus:border-t-primary border-t-blue-gray-200"
                            labelProps={{
                                className: "hidden",
                            }}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password">
                            <Typography
                                variant="small"
                                className="mb-2 block font-medium text-gray-900"
                            >
                                Password
                            </Typography>
                        </label>
                        <Input
                            size="lg"
                            placeholder="********"
                            labelProps={{
                                className: "hidden",
                            }}
                            className="w-full p-2 pl-8 flex items-center rounded-lg justify-center placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                            type={passwordShown ? "text" : "password"}
                            icon={
                                <div className="mt-2 ml-2" onClick={togglePasswordVisiblity}>
                                    {passwordShown ? (
                                        <EyeIcon className="h-5 w-5 " />
                                    ) : (
                                        <EyeSlashIcon className="h-5 w-5 " />
                                    )}
                                </div>
                            }
                        />
                    </div>
                    <Button color="gray" size="lg" className="mt-6" fullWidth>
                        sign up
                    </Button>
                    <div className="!mt-4 flex justify-end">
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            variant="small"
                            className="font-medium"
                        >
                            Forgot password
                        </Typography>
                    </div>
                    <Button
                        variant="outlined"
                        size="lg"
                        className="mt-6 flex h-12 items-center justify-center gap-2"
                        fullWidth
                    >
                        <img
                            src={`https://www.material-tailwind.com/logos/logo-google.png`}
                            alt="google"
                            className="h-6 w-6"
                        />{" "}
                        sign in with google
                    </Button>
                    <Typography
                        variant="small"
                        color="gray"
                        className="!mt-4 text-center font-normal"
                    >
                       Already registered?{" "}
                        <Link to={"/auth/login"} className="font-medium text-gray-900">
                            Sign in
                        </Link>
                    </Typography>
                </form>
            </div>
        </section>
    );
}

export default Login;