import React from 'react'
import {Link} from 'react-router-dom'



export default function MealsDay() {
  
    const products = [
        {
          id: 1,
          name: 'Three Pepper Pizza',
          href: '#',
          price: '$18',
          imageSrc: 'https://images.unsplash.com/photo-1569698170031-21b776b6468e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1628&q=80',
          imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
          id: 2,
          name: 'Mindels Burger and Fries ',
          href: '/Cartpage',
          price: '$15',
          imageSrc: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
          imageAlt: 'ya ba mindels',
        },
        {
          id: 3,
          name: 'Chiccken pepper tacos',
          href: '#',
          price: '$29',
          imageSrc: 'https://images.unsplash.com/photo-1562059390-a761a084768e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1419&q=80',
          imageAlt: 'served  for  4.',
        },
        {
          id: 4,
          name: 'spaghetti',
          href: '#',
          price: '$18',
          imageSrc: 'https://images.unsplash.com/photo-1484325881845-65073528922e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
          imageAlt: 'spaghetti arabiatta.',
        },
        // More products...
      ]
      
  
    return (
   
 <div className="bg-white">
<div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
  <h2 className="sr-only">Products</h2>

  <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    {products.map((product) => (
      <Link key={product.id} to={product.href} className="group">
        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="w-full h-full object-center object-cover group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-xl font-bold text-gray-700">{product.name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
      </Link>
    ))}
  </div>
</div>
</div>


  )
}
