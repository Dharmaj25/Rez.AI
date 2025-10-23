const Login = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center px-8 md:px-16 bg-white">
        <h1 className="font-bold text-4xl md:text-5xl text-gray-900 text-center">
          Welcome Back!
        </h1>
        <p className="mt-4 text-center text-gray-600">
          Simplify your workflow and boost your productivity with Tugo's App.
        </p>
        <p className="text-center text-gray-600">Get started today for free.</p>

        <form className="w-full flex flex-col items-center mt-10">
          <div className="w-full md:w-3/5 mb-4">
            <input
              name="username"
              type="text"
              placeholder="Username"
              className="w-full py-3 px-5 rounded-full border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-400 outline-none transition"
            />
          </div>
          <div className="w-full md:w-3/5 mb-2">
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full py-3 px-5 rounded-full border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-400 outline-none transition"
            />
          </div>
          <div className="w-full md:w-3/5 text-right mb-6">
            <p className="text-blue-600 hover:underline cursor-pointer text-sm">
              Forgot Password?
            </p>
          </div>
          <button
            className="w-full md:w-3/5 bg-blue-500 text-white font-medium py-3 px-5 rounded-full hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
        <div className="my-12 flex items-center w-3/5">
          <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          <span className="px-3 text-gray-600 text-sm">or continue with</span>
          <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        </div>

      </div>


      {/* Right Section */}
      <div className="hidden lg:flex justify-center items-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
        <div className="text-center p-10">
          <h2 className="text-3xl font-semibold mb-4">Welcome to Tugo!</h2>
          <p className="text-lg text-gray-100">
            Manage your workflow smarter and faster.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
