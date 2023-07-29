import { AgentType } from './agent.type'

export interface HouseType {
  id: number
  type: string
  name: string
  description: string
  image: string
  imageLg: string
  country: string
  address: string
  bedrooms: string
  bathrooms: string
  surface: string
  year: string
  price: string
  agent: AgentType
}
