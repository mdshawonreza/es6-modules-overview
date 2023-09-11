

import { useEffect, useState } from 'react'
import './App.css'
import Watch from './Components/Watch/Watch'

function App() {
  const [watches,setWatches]=useState([]);

  useEffect(()=>{
      fetch('Watches.json')
      .then(res=>res.json())
      .then(data=>setWatches(data));
  },[])


  // const watches=[
  //   {id:1,name:'iphone',price:82000},
  //   {id:1,name:'samsung',price:72000},
  //   {id:1,name:'nokia',price:62000},
    
  // ]
  // const watches = [
  //   {
  //     id: 1,
  //     name: "Rolex Submariner",
  //     price: 10000
  //   },
  //   {
  //     id: 2,
  //     name: "Omega Seamaster",
  //     price: 8000
  //   },
  //   {
  //     id: 3,
  //     name: "Tag Heuer Carrera",
  //     price: 6000
  //   },
  //   {
  //     id: 4,
  //     name: "Patek Philippe Calatrava",
  //     price: 20000
  //   },
  //   {
  //     id: 5,
  //     name: "Audemars Piguet Royal Oak",
  //     price: 15000
  //   }
  // ];
  

  return (
    <>
      <h1>Vite + React</h1>
      {
        watches.map(watch=><Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
