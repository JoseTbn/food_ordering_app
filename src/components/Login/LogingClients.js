import React from 'react'

export default function LogingClients() {
  return (
    <div className="grid min-h-screen place-items-center">
    <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
      <h1 className="text-xl font-semibold">Welcome back Dear, <span className="font-normal">sign in to continue</span></h1>
      <form className="mt-6">
        <label for="email" className="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
        <input id="email" type="email" name="email" placeholder="john.doe@company.com" autocomplete="email" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
        <label for="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
        <input id="password" type="password" name="password" placeholder="********" autocomplete="current-password" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
        <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
          Sign in
        </button>
        <p className="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">Forgot password?</p>
      </form>
    </div>
  </div>
  )
}
