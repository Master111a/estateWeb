import React, { useState, useEffect } from 'react'
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { Menu } from '@headlessui/react'
import { PriceType } from '../../type/price.type'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store'
import { isDefault, maxPrice, minPrice } from '../../function'
import { SearchType } from '../../type/search.type'
interface PriceRangeDropdownProps {
  handleChangeText: (text: SearchType) => void
}
const initialState: PriceType = {
  id: 0,
  type: 'Price range (any)'
}
export default function PriceRangeDropdown(props: PriceRangeDropdownProps) {
  const { handleChangeText } = props

  const [isOpen, setIsOpen] = useState(false)
  const listPrices = useSelector((state: RootState) => state.estate.prices)
  const [prices, SetPrices] = useState<PriceType>(initialState)

  const handleClick = (prices: PriceType) => {
    handleChangeText({
      min: minPrice(prices.type),
      max: maxPrice(prices.type)
    })
  }
  // console.log(isDefault(prices.type))

  // console.log(minPrice(prices.type))
  // console.log(maxPrice(prices.type))

  return (
    <div>
      <Menu as='div' className='w-full lg:max-w-[296px] cursor-pointer relative'>
        <Menu.Button
          onClick={() => setIsOpen(!isOpen)}
          className='flex h-[64px] items-center px-[18px] border rounded-lg w-full text-left'
        >
          <RiWallet3Line className='text-2xl mr-[18px] text-violet-700' />
          <div>
            <div className='text-[15px] font-medium leading-tight'>{prices.type}</div>
            <div className='text-[13px]'>Choose price range</div>
          </div>
          {!isOpen ? (
            <RiArrowDownSLine className='text-2xl text-violet-700 ml-auto' />
          ) : (
            <RiArrowUpSLine className='text-2xl text-violet-700 ml-auto' />
          )}
        </Menu.Button>
        <Menu.Items className='px-6 py-8 text-[15px] space-y-6 shadow-md bg-white absolute w-full z-10 list-none rounded-b-lg'>
          {listPrices.map((prices) => {
            return (
              <Menu.Item
                as={'li'}
                className='cursor-pointer hover:text-blue-500 transition'
                key={prices.id}
                onClick={() => {
                  SetPrices(prices)
                  handleClick(prices)
                }}
              >
                {prices.type}
              </Menu.Item>
            )
          })}
        </Menu.Items>
      </Menu>
    </div>
  )
}
