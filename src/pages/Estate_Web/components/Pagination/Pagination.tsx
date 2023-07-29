import React from 'react'
interface PaginationProps {
  pageNumber: number
  handleNext: () => void
  handlePrev: () => void
}
export default function Pagination(props: PaginationProps) {
  const { pageNumber, handlePrev, handleNext } = props
  return (
    <div className='inline-flex  xs:mt-0'>
      <button
        type='button'
        onClick={() => handlePrev()}
        className='flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
      >
        Prev
      </button>

      <span className='flex items-center justify-center px-4 h-8 leading-tight text-gray-500 bg-white font-medium border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
        {pageNumber}
      </span>

      <button
        type='button'
        onClick={() => handleNext()}
        className='flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
      >
        Next
      </button>
    </div>
  )
}
