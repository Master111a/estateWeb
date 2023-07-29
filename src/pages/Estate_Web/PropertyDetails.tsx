import { Link, useParams } from 'react-router-dom'
import { BiBed, BiBath, BiArea } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { useEffect, useState } from 'react'
import { HouseType } from './type/house.type'
export default function PropertyDetails() {
  const { id } = useParams()
  console.log(id)

  const houseList = useSelector((state: RootState) => state.estate.houseList)
  const [houseDetail, setDetail] = useState<HouseType | null>(null)
  useEffect(() => {
    if (id) {
      const house: HouseType | null = houseList.find((houseItem) => houseItem.id === parseInt(id)) || null
      setDetail(house)
    }
  }, [id])
  return (
    <section>
      <div className='container mx-auto min-h-[800px] mb-14'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
          <div>
            <h2 className='text-2xl font-semibold'>{houseDetail?.name}</h2>
            <h3 className='text-lg mb-4'>{houseDetail?.address}</h3>
          </div>
          <div className='mb4 lg:mb-0 flex gap-x-2 text-base'>
            <div className=' bg-green-500 text-white px-4 py-2 rounded-full'>{houseDetail?.type}</div>
            <div className='bg-violet-500 text-white px-4 py-2 rounded-full'>{houseDetail?.country}</div>
          </div>
          <div className='text-3xl font-semibold text-gray-600 '>$ {houseDetail?.price}</div>
        </div>
        <div className='flex flex-col items-start gap-8 lg:flex-row'>
          <div className='max-w-[768px]'>
            <div className='mb-8'>
              <img src={houseDetail?.imageLg} alt='' />
            </div>
            <div className='flex text-violet-700 gap-x-6 '>
              <div className='flex gap-x-2 items-center'>
                <BiBed className='text-2xl' />
                <div>{houseDetail?.bedrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiBath className='text-2xl' />
                <div>{houseDetail?.bathrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiArea className='text-2xl' />
                <div>{houseDetail?.surface}</div>
              </div>
            </div>
            <div>{houseDetail?.description}</div>
          </div>
          <div className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
            <div className='flex items-center gap-x-4 mb-8'>
              <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
                <img src={houseDetail?.agent.image} alt='' />
              </div>
              <div>
                <div className='font-bold text-lg '>{houseDetail?.agent.name}</div>
                <Link to={''} className='text-violet-700 text-sm'>
                  View Listings
                </Link>
              </div>
            </div>
            <form className='flex flex-col gap-y-4'>
              <input
                type='text'
                placeholder='Name*'
                className='border border-gray-400 focus:border-red-300 outline-none
              rounded w-full px-4 h-14 text-sm'
              />
              <input
                type='text'
                placeholder='Email*'
                className='border border-gray-400 focus:border-red-300 outline-none
              rounded w-full px-4 h-14 text-sm '
              />
              <input
                type='text'
                placeholder='Phone*'
                className='border border-gray-400 focus:border-red-300 outline-none
              rounded w-full px-4 h-14 text-sm'
              />
              <textarea
                placeholder='Message'
                defaultValue={'Hello. I am Nam'}
                className='w-full p-4 h-36 rounded outline-none border border-gray-400 focus:border-red-300'
              ></textarea>
              <div className='flex gap-x-2'>
                <button className='bg-blue-600 hover:bg-blue-800 text-white rounded p-4 text-sm w-full'>
                  Send Message
                </button>
                <button className='border border-green-400 text-blue-600 hover:bg-green-400 hover:text-white rounded p-4 text-sm w-full'>
                  Call
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
