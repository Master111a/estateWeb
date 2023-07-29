import { useState, useEffect } from 'react'
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { Menu } from '@headlessui/react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store'
import { PropertyType } from '../../type/property.type'
import { SearchType } from '../../type/search.type'
interface PropertyDropdownProps {
  handleChangeText: (text: SearchType) => void
}
const initialState: PropertyType = {
  id: 0,
  name: 'Property (any)'
}
export default function PropertyDropdown(props: PropertyDropdownProps) {
  const { handleChangeText } = props
  const [isOpen, setIsOpen] = useState(false)
  const [property, SetProperty] = useState<PropertyType>(initialState)
  const listPoperty = useSelector((state: RootState) => state.estate.properties)
  const handleClick = (property: PropertyType) => {
    handleChangeText({
      type: property.name
    })
  }
  return (
    <div>
      <Menu as='div' className='w-full lg:max-w-[296px] cursor-pointer relative'>
        <Menu.Button
          onClick={() => setIsOpen(!isOpen)}
          className='flex h-[64px] items-center px-[18px] border rounded-lg w-full text-left'
        >
          <RiHome5Line className='text-2xl mr-[18px] text-violet-700' />
          <div>
            <div className='text-[15px] font-medium leading-tight'>{property.name}</div>
            <div className='text-[13px]'>Select your place</div>
          </div>
          {!isOpen ? (
            <RiArrowDownSLine className='text-2xl text-violet-700 ml-auto' />
          ) : (
            <RiArrowUpSLine className='text-2xl text-violet-700 ml-auto' />
          )}
        </Menu.Button>
        <Menu.Items className='px-6 py-8 text-[15px] space-y-6 shadow-md bg-white absolute w-full z-10 list-none rounded-b-lg'>
          {listPoperty.map((property) => {
            return (
              <Menu.Item
                as={'li'}
                className='cursor-pointer hover:text-blue-500 transition'
                onClick={() => {
                  SetProperty(property)
                  handleClick(property)
                }}
                key={property.id}
              >
                {property.name}
              </Menu.Item>
            )
          })}
        </Menu.Items>
      </Menu>
    </div>
  )
}
