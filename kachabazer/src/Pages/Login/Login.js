import React from "react";
import useAuth from "../Hooks/useAuth";


const Login = () => {
  const {
    singInWithGoogle,
    handleRegistration,
    handleEmailChange,
    handlePasswordChange,
    error,
    toggleLogin,
    isLogin,
    handleNameChange,
  } = useAuth();

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-blue-400">
        {/*  login form  */}
        <div className="bg-white p-16 rounded shadow-2xl w-2/3">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">
            Please {isLogin ? "Login" : "Register"}
          </h2>
          <h3 className="text-red-900"> {error} </h3>
          <form className="space-y-5">
            <div>
              {!isLogin && (
                <div className="input-group">
                  <label className="block mb-1 font-bold text-gray-500">Name</label>
                  <input
                    placeholder="User Name"
                    required
                    onBlur={handleNameChange}
                    type="text"
                    className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                  />
                </div>
              )}
            </div>

            <div>
              <label className="block mb-1 font-bold text-gray-500">Email</label>
              <input
                onBlur={handleEmailChange}
                placeholder="email address"
                required
                type="email"
                className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-bold text-gray-500">Password</label>
              <input
                onBlur={handlePasswordChange}
                placeholder="Password"
                required
                type="password"
                className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              />
            </div>

            <div className="flex items-center">
              <input onChange={toggleLogin} type="checkbox" id="agree" />
              <label for="agree" className="ml-2 text-gray-700 text-sm">
                Already Registered?
              </label>
            </div>

            <button
              onClick={handleRegistration}
              className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300"
            >
              {isLogin ? "Login" : "Register"}
            </button>

            <button
              onClick={singInWithGoogle}
              className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300"
            >
              <i className="fab fa-google mr-2"></i>
              Google Sing In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
