import React from "react";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-700">
      <div className="flex items-center justify-center bg-slate-800 rounded-lg shadow-lg p-8 w-[30%] ">
        {" "}
        <form className="w-full">
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-orange-600 dark:text-white">
              Your email
            </label>
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-orange-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@halwot.com"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-orange-600 dark:text-white">
              Your password
            </label>
            <input
              type="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-orange-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="remember"
              class="ml-2 text-sm font-medium text-orange-600 dark:text-gray-300">
              Remember me
            </label>
          </div>
          <div className="w-full px-[40%]">
            {" "}
            <Link to="/admin-dashboard">
              {" "}
              <button
                type="submit"
                class="text-white  bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-oramge-700 dark:focus:ring-orange-800">
                Log in
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
