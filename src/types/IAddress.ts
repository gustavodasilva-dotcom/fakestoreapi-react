export interface IAddress {
  city: string
  geolocation: IGeolocation
  number: number
  street: string
  zipcode: string
}

export interface IGeolocation {
  lat: string
  long: string
}