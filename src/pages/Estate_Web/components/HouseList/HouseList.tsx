import { useState } from 'react'
import { Link } from 'react-router-dom'
import House from '../House/House'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../store'
import Pagination from '../Pagination'
import { nextPage, prevPage } from '../../estate.slice'
export default function HouseList() {
  const searchList = useSelector((state: RootState) => state.estate.searchList)
  const currentPage = useSelector((state: RootState) => state.estate.currentPage)
  const housePerPage = useSelector((state: RootState) => state.estate.housePerPage)
  const dispatch = useDispatch()

  const totalPage: number = Math.ceil(searchList.length / housePerPage)
  const lastIndex: number = currentPage * housePerPage
  const firstIndex: number = lastIndex - housePerPage
  // const pages: object = [...Array(totalPage + 1).keys()].slice(1)

  const viewHouse = searchList.slice(firstIndex, lastIndex)

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      dispatch(nextPage())
    }
  }
  const handlePrevPage = () => {
    if (currentPage > 0) {
      dispatch(prevPage())
    }
  }
  console.log(currentPage, totalPage, viewHouse)

  return (
    <section className='mb-5'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 xl:min-h-[400px] gap-4 xl:gap-10 lg:gap-14'>
          {viewHouse.map((houseList) => (
            <Link to={`/property/${houseList.id}`} key={houseList.id}>
              <House house={houseList} />
            </Link>
          ))}
        </div>
        <div className='flex justify-center items-center mt-5'>
          <Pagination pageNumber={currentPage} handlePrev={handlePrevPage} handleNext={handleNextPage} />
        </div>
        <span className='flex justify-center items-center mt-4 h-8 text-gray-500 bg-white font-medium '>
          Page {currentPage} / {totalPage}
        </span>
      </div>
    </section>
  )
}
