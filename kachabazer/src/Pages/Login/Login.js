import React from "react";
import useAuth from "../Hooks/useAuth";
import useFirebase from "../Hooks/useFirebase";

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
    users
  } = useFirebase();

  return (
    <>
      <div class="min-h-screen flex items-center justify-center bg-blue-400">
        {/*  login form  */}
        <div class="bg-white p-16 rounded shadow-2xl w-2/3">
          <h2 class="text-3xl font-bold mb-10 text-gray-800">
          Please {isLogin ? "Login" : "Register" }
          </h2>
          <h3 className="text-red-900"> {error} </h3>

          <form class="space-y-5">
            <div>
            { !isLogin &&	<div className="input-group">
						
            <label class="block mb-1 font-bold text-gray-500">Name</label>
              <input
              placeholder="User Name" required
                onBlur ={handleNameChange}
                type="text"
                class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              />
						
					</div> }
             
            </div>

            <div>
              <label class="block mb-1 font-bold text-gray-500">Email</label>
              <input
                onBlur ={handleEmailChange}
                 placeholder="email address" required
                type="email"
                class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label class="block mb-1 font-bold text-gray-500">Password</label>
              <input
                 onBlur = {handlePasswordChange}
                placeholder="Password" required
                type="password"
                class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              />
            </div>

            <div class="flex items-center">
              <input onChange = {toggleLogin} type="checkbox" id="agree" />
              <label for="agree" class="ml-2 text-gray-700 text-sm">
              Already Registered?
              </label>
            </div>

            <button onClick = {handleRegistration} class="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300">
            {isLogin ? "Login" : "Register"}
            </button>

            <button onClick ={singInWithGoogle} class="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300">
            <i class="fab fa-google mr-2"></i> 
              Google Sing In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
