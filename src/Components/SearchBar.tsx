import React from 'react'
import '../dist/css/SearchBar.css'
import {BiSearch} from 'react-icons/bi';
function SearchBar() {
  return (
    <div className='navbar__search__container'>
        <BiSearch size={22}/>
        <input type={'text'} placeholder='Search icons, NFTs and receipts'/>
    </div>
  )
}

export default SearchBar