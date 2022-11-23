export interface ContactsObject {
  gender: string,
  name: {
    first: string,
    last: string,
    title: string
  },
  location: object,
  email: string,
  login: object,
  dob: {
    age: string,
    date: string
  },
  registered: object,
  phone: string,
  cell: string,
  id: {
    name: string,
    value: string
  },
  picture: {
    large: string
  },
  nat: string
  showAge: boolean
}