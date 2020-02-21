import React from 'react'
const Search = ({ onChange, onSubmit, name, value }) => {
  return (
    <form onSubmit={e => onSubmit(e)}>
      <input
        value={value}
        onChange={e => onChange(e)}
        name={name}
        type="text"
      />
      <button type="submit">Search</button>
    </form>
  )
}
export default Search
