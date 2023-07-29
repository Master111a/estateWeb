import React from 'react'

import House5 from '../../../..//assets/img/houses/house5.png'
import { BiBed, BiBath, BiArea } from 'react-icons/bi'
import { HouseType } from '../../type/house.type'
interface HouseProps {
  house: HouseType
}
export default function House(props: HouseProps) {
  const { house } = props
  return (
    <div
      className='bg-white shadow-lg p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px]
     mx-auto cursor-pointer hover:shadow-2xl transition overflow-hidden'
    >
      <img src={house.image} alt='' className='mb-8' />
      <div className='mb-4 flex gap-x-2 text-sm'>
        <div className='bg-green-500 rounded-full text-white px-3'>{house.type}</div>
        <div className=' bg-violet-500 rounded-full text-white px-3'>{house.country}</div>
      </div>
      <div className='text-lg font-semibold max-w-[260px]'>{house.address}</div>
      <div className='flex gap-x-4 mb-4 '>
        <div className='flex items-center text-gray-600 gap-1 '>
          <div className=' text-[20px]'>
            <BiBed />
          </div>
          <div>{house.bedrooms}</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1 '>
          <div className=' text-[20px]'>
            <BiBath />
          </div>
          <div>{house.bathrooms}</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1 '>
          <div className=' text-[20px]'>
            <BiArea />
          </div>
          <div>{house.surface}</div>
        </div>
      </div>
      <div className='text-lg font-semibold text-violet-600 mb-4'>${house.price}</div>
    </div>
  )
}
