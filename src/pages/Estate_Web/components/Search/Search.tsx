import React, { useState } from 'react'
import CountryDropdown from '../Country'
import PropertyDropdown from '../PropertyDropdown'
import PriceRangeDropdown from '../PriceRangeDropdown'
import { RiSearch2Line } from 'react-icons/ri'
import { BiReset } from 'react-icons/bi'
import { SearchType } from '../../type/search.type'
import { useDispatch } from 'react-redux'
import { resetSearch, searchHouse } from '../../estate.slice'
const initialState: SearchType = {}
export default function Search() {
  const [textSearch, setTextSearch] = useState<SearchType>(initialState)
  const dispatch = useDispatch()
  const handleChangeMinMax = (text: SearchType) => {
    setTextSearch((prev) => ({ ...prev, min: text.min, max: text.max }))
  }
  const handleChangeCoutry = (text: SearchType) => {
    setTextSearch((prev) => ({ ...prev, country: text.country }))
  }
  const handleChangeProperty = (text: SearchType) => {
    setTextSearch((prev) => ({ ...prev, type: text.type }))
  }
  const handleSearch = () => {
    dispatch(searchHouse(textSearch))
  }
  const handleResetSearch = () => {
    dispatch(resetSearch())
  }
  return (
    <div
      className='flex flex-col py-6 px-[30px] 
      lg:items-center
    max-w-[1170px] mx-auto bg-white 
    lg:bg-transparent lg:backdrop-blur rounded-lg lg:shadow-1 
    lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4'
    >
      <CountryDropdown handleChangeText={handleChangeCoutry} />
      <PropertyDropdown handleChangeText={handleChangeProperty} />
      <PriceRangeDropdown handleChangeText={handleChangeMinMax} />
      <button
        type='button'
        onClick={() => handleSearch()}
        className=' bg-gray-400 hover:bg-gray-500 transition w-full lg:max-w-[120px] h-10
      rounded-lg  flex justify-center items-center text-white text-lg'
      >
        <RiSearch2Line />
      </button>
      <button
        type='button'
        onClick={() => handleResetSearch()}
        className=' bg-red-300 hover:bg-amber-300 transition w-full lg:max-w-[120px] h-10
      rounded-lg flex justify-center items-center text-white text-lg'
      >
        <BiReset />
      </button>
    </div>
  )
}
