import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { HouseType } from './type/house.type'
import { countriesData, housesData, priceData, propertyData } from '../../data'
import { CountriesType } from './type/country.type'
import { PropertyType } from './type/property.type'
import { PriceType } from './type/price.type'
import { SearchType } from './type/search.type'
interface Estate {
  houseList: HouseType[]
  houseDetail: HouseType | null
  countries: CountriesType[]
  properties: PropertyType[]
  prices: PriceType[]
  textSearch: SearchType
  searchList: HouseType[]
  currentPage: number
  housePerPage: number
}
const initialState: Estate = {
  houseList: housesData,
  houseDetail: null,
  countries: countriesData,
  properties: propertyData,
  prices: priceData,
  textSearch: { country: '', type: '' },
  searchList: housesData,
  currentPage: 1,
  housePerPage: 8
}
const estateSlice = createSlice({
  name: 'estate',
  initialState,
  reducers: {
    getDetailHouse: (state, action: PayloadAction<number>) => {
      const houseId = action.payload
      const houseDetailById = state.houseList.find((house) => house.id === houseId) || null
      state.houseDetail = houseDetailById
    },
    searchHouse: (state, action: PayloadAction<SearchType>) => {
      const text: SearchType = action.payload
      const list: HouseType[] = state.houseList.filter((house) => {
        if (text.country) {
          if (text.type && text.min && text.max) {
            return (
              house.country === text.country &&
              house.type === text.type &&
              parseInt(house.price) >= text.min &&
              parseInt(house.price) <= text.max
            )
          } else if (text.type) {
            return house.country === text.country && house.type === text.type
          } else if (text.min && text.max) {
            return (
              house.country === text.country && parseInt(house.price) >= text.min && parseInt(house.price) <= text.max
            )
          } else {
            return house.country === text.country
          }
        } else if (text.type) {
          if (text.min && text.max) {
            return house.type === text.type && parseInt(house.price) >= text.min && parseInt(house.price) <= text.max
          } else {
            return house.type === text.type
          }
        } else if (text.min && text.max) {
          return parseInt(house.price) >= text.min && parseInt(house.price) <= text.max
        } else {
          return house
        }
      })
      state.searchList = list
    },
    resetSearch: (state) => {
      state.searchList = state.houseList
    },
    nextPage: (state) => {
      state.currentPage++
    },
    prevPage: (state) => {
      state.currentPage--
    },
    onChangePerPage: (state, action) => {
      state.housePerPage = action.payload
    }
  }
})
export const { getDetailHouse, searchHouse, resetSearch, nextPage, prevPage, onChangePerPage } = estateSlice.actions
export default estateSlice.reducer
