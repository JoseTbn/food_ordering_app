import React from 'react'
import Navbar from '../components/Navbar/Navbar'

export default function Workers() {
  return (
      <>   
   <Navbar/>
<div className="container mx-auto ">
    <div className="">
<h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-center'>Choose your Restaurant</h1>

    </div>
    <form class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Select</h1>
    
      <select id="">
          select
          <option value="">Mcdonalds</option>
          <option value="">Indian</option>
          <option value="">Italian</option>
          <option value="">chinese</option>      
      </select>
  
    
    </form>
</div>
   </>
  )
}
