import { IAddress } from "./IAddress"

export interface IUser {
  address: IAddress
  email: string
  id: number
  name: IName
  password: string
  phone: string
  username: string
}

export interface IName {
  firstname: string
  lastname: string
}