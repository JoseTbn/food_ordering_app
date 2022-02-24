import React from 'react'
import MealsDay from '../components/Feature/MealsDay'
import Hero from '../components/Hero/Hero'
import Map from '../components/Map/Map'
import Navbar from '../components/Navbar/Navbar'

export default function Home() {
  return (
    <div>
<Navbar/>
<Hero/>
<Map/>
<MealsDay/>
    </div>
  )
}
