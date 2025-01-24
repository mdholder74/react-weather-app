import React from 'react'
import { useRef } from 'react';


export default function SearchBar({search}) {

  const inputRef = useRef(null) 
  
  return (
    <section className="search">
        <input ref={inputRef} className="search-input" type="text" placeholder="Search city..." />
        <button className="search-button" onClick={()=>search(inputRef.current.value)}>Search</button>
  </section>
  )
}
