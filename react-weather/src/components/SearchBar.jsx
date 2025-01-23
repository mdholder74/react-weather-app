import React from 'react'

export default function SearchBar() {
  return (
    <section className="search">
        <input className="search-input" type="text" placeholder="Search location..." />
        <button className="search-button">Search</button>
  </section>
  )
}
