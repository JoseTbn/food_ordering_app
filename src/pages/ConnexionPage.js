/* eslint-disable no-unused-vars */
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'


export default function ConnexionPage() {
  
  const logCollections = [

{
  name:'Clients',
  href:'/Clients',
 imageSrc: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
  id: 1
},

{
  name:'Workers',
  href:'/Workers',
 imageSrc: 'https://images.unsplash.com/photo-1613683977134-24555e0d7d74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  id: 2
},
{
  name:'Gestionnaires',
  href:'/Gest',
 imageSrc: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cXVhbGl0eSUyMGNvbnRyb2x8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  id: 3
}



  ]
  
  
  let navigate = useNavigate();
  function handleClick() {
    navigate(logCollections.href);
  
  }
  
  return (
   <> 
<Navbar/>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Log yourself</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Choose your logging option</p>
    </div>
    <div class="flex flex-wrap -m-4 text-center">
     {logCollections.map((logCollections)=> (
      <div class="p-4 md:w-1/3  cursor-pointer sm:w-1/2 w-full"  >
        <Link to={logCollections.href}>
          <div class="border-2 border-gray-200  hover:scale-110 transition-all rounded-lg">
                 <img src={logCollections.imageSrc} alt="" />
            <p class="leading-relaxed font-bold">{logCollections.name}</p>
          </div>
        </Link>
      </div>
       ))}
    </div>
  </div>
</section>
    </>
  )
}
