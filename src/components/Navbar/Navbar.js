import React from 'react'
 import {Link, useNavigate} from 'react-router-dom'
 import logo from '../../assets/img/main.svg'

export default function Navbar() {
  
    let navigate = useNavigate();
  
    return (
    <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap py-10  flex-col md:flex-row justify-between items-center">
      <div className=" flex">
        <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src={logo} alt="" />
          <span className="ml-3 text-xl"></span>
        </Link>
            <form class=" w-96">
              <label for="name" class="leading-7 text-sm text-gray-600"></label>
              <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Restaurants,Groceries,Dishes...'/>
            </form>
      </div>
     
     

      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-between ">
        <a href='#' onClick={() => {
            navigate('/MealsDay')
        }} className="mr-5 hover:text-gray-900">Menus of the day</a>
        <Link to={'/Restaurants'} className="mr-5 hover:text-gray-900">Restaurants</Link>
        <Link to={'/'} className="mr-5 hover:text-gray-900">Deals</Link>
        <Link to={'/'} className="mr-5 hover:text-gray-900">My orders</Link>
      </nav>

   <div className=" space-x-4 flex">
     
     <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
       <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
         <path d="M5 12h14M12 5l7 7-7 7"></path>
       </svg>
     </button>
     <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
     </button>
   </div>
    </div>
  </header>
  )
}
