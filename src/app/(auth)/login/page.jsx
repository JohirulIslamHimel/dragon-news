"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleLoginFun = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      callbackURL: "/",
    });
    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("Signin successful");
    }
  };

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 p-4">
      <div className="p-6 rounded-xl bg-white w-full max-w-md">
        <h2 className="font-bold text-3xl text-center mb-6">
          Login your account
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFun)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email address</legend>
            <input
              type="email"
              className="input w-full pr-10"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-500">{errors.message}</p>}
          </fieldset>
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input
              type={isShowPassword ? "text" : "password"}
              className="input w-full pr-10"
              {...register("password", { required: true })}
            />
            <span
              className="absolute right-3 top-9 cursor-pointer text-gray-500"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEye></FaEye> : <FaEyeSlash />}
            </span>
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </fieldset>
          <button className="btn w-full bg-slate-800 text-white">Login</button>
        </form>
        <p className="mt-4">
          Don't have an account?{" "}
          <Link href={"/register"} className="text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};
export default LoginPage;
