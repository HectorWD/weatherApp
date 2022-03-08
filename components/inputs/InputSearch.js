import React, { useState,useEffect } from 'react'
import Link from 'next/link';
import Router from 'next/router';
import cities from '../../lib/city.list.json'

const InputSearch = ({anotherSearch=true}) => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([])
  
  
  useEffect(() => {
    const clearSearch= ()=> setSearch('');

    Router.events.on("routeChangeComplete",clearSearch)
  
    return () => {
    Router.events.off("routeChangeComplete",clearSearch)
    }
  }, [])
  
  const handleChange=(e)=>{
    const {value}= e.target;
    setSearch(value);

    //Para manejar las ciudades que tienen las letras que escribes
    let matchCities=[];

    //Que comience a buscar depues de haber escrito 3 palabras
    if(value.length >3){
      //Limitar los resulados maximos a 5
      for(let city of cities){
        if(matchCities.length >=5){
          break;
        }
        //Le damos formato
        const match= city.name.toLowerCase().startsWith(value.toLowerCase());
        //Si hace match lo insertamos al arreglo
        if(match){
          matchCities.push(city)
        }
      }
      setResults(matchCities)
    }
  }
  return (
    <>
    {anotherSearch
    ?
    <input
    className='
    w-11/12 h-14 text-2xl p-4
    border-2 border-indigo-800 rounded-xl
    drop-shadow-xl'
    placeholder='Search for a city..'
    value={search}
    onChange={handleChange}
    />
     :
     <div className='mt-4'>
     <Link href={'/'}>
                <a className='text-lg text-indigo-500
                 hover:cursor-pointer hover:text-indigo-700'>
                    &larr;Home
                </a>
            </Link>
     <input
    className='
    w-full h-14 text-2xl p-4  
    border-2 border-indigo-800 rounded-xl
    drop-shadow-xl'
    placeholder='Search an other location'
    value={search}
    onChange={handleChange}
    />
    </div>
  }
  {search.length >3 && (
      <ul 
      className='
      w-11/12 text-xl p-4 mt-2 
    bg-white
      border-2 border-indigo-800 rounded-xl
      drop-shadow-xl'
      >
          {results.length > 0 ?
          (results.map((city)=>(
            <li key={city.id}>
              <Link href={`/location/${city.id}`}>
                <a
                className=' 
                border-b-2 
                ease-in duration-150 
                hover:border-indigo-600 min-w-min'
                >
                  {city.name}
                  {city.state ? `, ${city.state}`:''}
                  <span> ({city.country}) </span>
                </a>
              </Link>
            </li>
          ))):
          <li>No results found</li>  
        }
      </ul>
    )}
    </>
  )
}

export default InputSearch
