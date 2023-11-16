import Link from "next/link";

const Login = () => {
  return (
    <>
      <title> Login </title>

      <div className="flex items-center min-h-screen justify-center">
        <div className="w-96 rounded-md mb-16 h-max flex items-center  flex-col  p-4 bg-gray-800">
          <h1 className="text-3xl  mb-5 ">Login</h1>
          <form className="flex flex-col gap-5 text-black text-lg">
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
              placeholder="Password"
              autoComplete="off"
            />
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800   font-medium text-lg rounded-lg px-5 py-2.5 me-2 mb-2 focus:outline-none "
            >
              Login
            </button>
          </form>
          <h1 className="leading-8">---OR---</h1>
          <Link className="text-blue-600 hover:underline" href="/register">
            Register new user
          </Link>
        </div>
      </div>
    </>
  );
};
export default Login;
