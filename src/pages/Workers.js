
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

export default function Workers() {
  return (
      <>   
   <Navbar/>
<div className="container mx-auto ">
    <div className="">
<h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-center'>Choose your Restaurant</h1>

    </div>
    <form class="flex flex-col text-center mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Select</h1>
    
      <select id="">
          select
          <option value="">Mcdonalds</option>
          <option value="">Indian</option>
          <option value="">Italian</option>
          <option value="">chinese</option>      
      </select>
  
  <button className="inline-flex items-center w-20 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><Link to={'/restau'}>Confirm</Link>
     
     </button>
    </form>
</div>
   </>
  )
}
