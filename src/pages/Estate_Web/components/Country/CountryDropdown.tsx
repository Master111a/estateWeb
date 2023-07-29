import { useState, useEffect } from 'react'
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { Menu } from '@headlessui/react'
import { CountriesType } from '../../type/country.type'
import { RootState } from '../../../../store'
import { useSelector } from 'react-redux'
import { SearchType } from '../../type/search.type'
interface CountryDropdownProps {
  handleChangeText: (text: SearchType) => void
}
const initialState: CountriesType = {
  id: 0,
  name: 'Location (any)'
}

export default function CountryDropdown(props: CountryDropdownProps) {
  const { handleChangeText } = props
  const [country, SetCountry] = useState<CountriesType>(initialState)
  const listCountry = useSelector((state: RootState) => state.estate.countries)
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (country: CountriesType) => {
    handleChangeText({
      country: country.name
    })
  }

  return (
    <div>
      <Menu as='div' className='w-full lg:max-w-[296px] cursor-pointer relative'>
        <Menu.Button
          onClick={() => setIsOpen(!isOpen)}
          className='flex h-[64px] items-center px-[18px] border rounded-lg w-full text-left'
        >
          <RiMapPinLine className='text-2xl mr-[18px] text-violet-700' />
          <div>
            <div className='text-[15px] font-medium leading-tight'>{country?.name}</div>
            <div className='text-[13px]'>Select your place</div>
          </div>
          {!isOpen ? (
            <RiArrowDownSLine className='text-2xl text-violet-700 ml-auto' />
          ) : (
            <RiArrowUpSLine className='text-2xl text-violet-700 ml-auto' />
          )}
        </Menu.Button>
        <Menu.Items className='px-6 py-8 text-[15px] space-y-6 shadow-md bg-white absolute w-full z-10 list-none rounded-b-lg'>
          {listCountry.map((country) => {
            return (
              <Menu.Item
                as={'li'}
                className='cursor-pointer hover:text-blue-500 transition'
                onClick={() => {
                  SetCountry(country)
                  handleClick(country)
                }}
                key={country.id}
              >
                {country.name}
              </Menu.Item>
            )
          })}
        </Menu.Items>
      </Menu>
    </div>
  )
}
