"use client";
import { isValidEmail } from "@/utils/helpers";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const [registerStatus, setRegisterStatus] = useState(false);
  const handleRegister = async (e: any) => {
    setError("");
    e.preventDefault();
    setRegisterStatus(true);
    const email = e.target[0].value;
    const password = e.target[1].value;

    console.log(email, password);

    if (!isValidEmail(email)) {
      setError("Provide valid email");
      return;
    }
    if (!password || password.length < 6) {
      setError("Password is invalid");
      return;
    }
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.status == 400) {
        setError("Email Already Exist");
      }
      if (res.status == 500) {
        setError("Internal Server Error");
      }
      if (res.status == 201) {
        setError("");
        console.log(res);
        setRegisterStatus(false);

        router.push("/login");
      }
    } catch (err: any) {
      console.log("change register status");
      setError(err);
    } finally {
      setRegisterStatus(false);
    }
  };

  return (
    <>
      <title>Register</title>
      <div className="flex items-center min-h-screen justify-center">
        <div className="w-96 rounded-md mb-16 h-max flex items-center  flex-col  p-4 bg-gray-800">
          <h1 className="text-3xl  mb-5 ">Register</h1>
          <form
            onSubmit={handleRegister}
            className="flex flex-col gap-5 text-black text-lg"
          >
            <input
              className="px-2 py-1 outline-none  rounded-md"
              name="email"
              type="email"
              required
              placeholder="Email"
            />
            <input
              className="px-2 py-1 outline-none  rounded-md"
              name="password"
              type="password"
              required
              minLength={6}
              placeholder="Password"
              autoComplete="off"
            />
            <button
              disabled={registerStatus}
              className={`${
                registerStatus
                  ? "cursor-wait opacity-60"
                  : "cursor-pointer opacity-100"
              } text-white bg-blue-700 hover:bg-blue-800   font-medium text-lg rounded-lg px-5 py-2.5 me-2 mb-2 focus:outline-none `}
            >
              {registerStatus ? "Registering..." : "Register"}
            </button>
            <p className="text-red-600 -my-2 text-[16px] mb-4">
              {error && error}
            </p>
          </form>
          <h1 className="leading-8">---OR---</h1>
          <Link className="text-blue-600 hover:underline" href="/login">
            Login with existing account
          </Link>
        </div>
      </div>
    </>
  );
};
export default Register;
