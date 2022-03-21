import React from 'react'
import {Link,Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";


export default function RestaurantsCard() {
 
    let params = useParams();
    let resId = 0
 
    const callouts = [
        {
          name: 'Restaurant 1',
          description: 'Indian',
          imageSrc: 'https://images.unsplash.com/photo-1548940740-204726a19be3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80',
          imageAlt: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  ',
          href: '#',
          id: resId++
        },
        {
          name: 'Restaurant 2',
          description: 'Pizza',
          imageSrc: 'https://images.unsplash.com/photo-1600628421066-f6bda6a7b976?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          imageAlt: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          href: '#',
          id:resId++
        },
        {
          name: 'Restaurant 3',
          description: 'Shusi',
          imageSrc: 'https://images.unsplash.com/photo-1545879429-677464262714?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
          imageAlt: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          href: '#',
          id:resId++
        },
        {
          name: 'Restaurant 4',
          description: 'Chinese',
          imageSrc: 'https://images.unsplash.com/photo-1555126634-323283e090fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
          imageAlt: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          href: '#',
          id:resId++
        },
      ,]


 
    return (
    <div className="bg-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
        <h2 className="text-2xl font-extrabold text-gray-900">Restaurants</h2>
        <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
          {callouts.map((callout) => (
            <div key={callout.name} className="group relative">
              <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img
                  src={callout.imageSrc}
                  alt={callout.imageAlt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <Link to={`/Restaurants/${callouts.id}`}
                   key={callouts.id}
                >
                  <span className="absolute inset-0" />
                  {callout.name}
                </Link>
              </h3>
              
              <p className="text-base font-semibold text-gray-900">{callout.description}</p>
            </div>
          ))}
        </div>
        <Outlet/>
      </div>
    </div>
  </div>

  )
}
