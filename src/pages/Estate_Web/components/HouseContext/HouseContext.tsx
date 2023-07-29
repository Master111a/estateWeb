import React, { useState, useEffect, createContext } from 'react'
import { housesData } from '../../../../data'

export default function HouseContext({ children }: any) {
  const [houses, setHouses] = useState(housesData)
  const [conutry, setCountry] = useState()

  return <></>
}
