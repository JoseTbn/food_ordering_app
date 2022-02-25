import React from 'react'
import { Link } from 'react-router-dom'



export default function MealsDay() {

  const products = [
    {
      id: 1,
      name: 'Three Pepper Pizza',
      href: '#',
      price: '$18',
      type: 'fast-food',
      desc: 'Lorem ipsum dolor, sit amet cons ectetur adipis icingelit.',
      imageSrc: 'https://images.unsplash.com/photo-1569698170031-21b776b6468e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1628&q=80',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Mindels Burger and Fries ',
      href: '/Cartpage',
      price: '$15',
      type: 'fast-food',
      desc: 'Lorem ipsum dolor, sit amet cons ectetur adipis icingelit.',
      imageSrc: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
      imageAlt: 'ya ba mindels',
    },
    {
      id: 3,
      name: 'Chiccken pepper tacos',
      href: '#',
      price: '$29',
      type: 'indian',
      desc: 'Lorem ipsum dolor, sit amet cons ectetur adipis icingelit.',
      imageSrc: 'https://images.unsplash.com/photo-1562059390-a761a084768e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1419&q=80',
      imageAlt: 'served  for  4.',
    },
    {
      id: 4,
      name: 'spaghetti',
      href: '#',
      price: '$18',
      type: 'italian',
      desc: 'Lorem ipsum dolor, sit amet cons ectetur adipis icingelit.',
      imageSrc: 'https://images.unsplash.com/photo-1484325881845-65073528922e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
      imageAlt: 'spaghetti arabiatta.',
    },
    // More products...
  ]


  return (

    <>

      <section class="mt-8 pb-20 bg-white">
       
        <div class="container w-full px-5 py-6 mx-auto">
        <div class="py-4 ml-4 text-left">
          <h2 class="text-xl font-bold  text-transparent bg-clip-text bg-black">
            TODAY'S SPECIALITIES:</h2>
        </div>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-y-6">
           
            {products.map((product) => (
              <div class="max-w-xs mx-4 mb-0 rounded-lg  shadow-lg">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full rounded-t-lg h-48 object-center object-cover group-hover:opacity-75"
                />
                <div class="px-6 py-4">
                  <div class="flex mb-2">
                    <span class="px-4 py-0.5 text-sm bg-red-500 rounded-full text-red-50">{product.type}</span>
                  </div>
                  <h4 class="mb-3 text-xl font-semibold tracking-tight text-green-600 uppercase">{product.name}</h4>
                  <p class="leading-normal text-gray-700"> {product.desc} </p>
                </div>
                <div class="flex items-center justify-between p-4">
                  <Link key={product.id} to={product.href} className="group" >
                    <button class="px-4 py-2 rounded-full bg-green-600 text-green-50">Order Now</button>
                  </Link>
                  <span class="text-xl text-green-600">{product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
