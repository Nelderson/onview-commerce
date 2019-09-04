interface GeoAddress {
  lat: string,
  lng: string,
}

interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: GeoAddress
}

interface Company {
  name: string,
  catchPhrase: string,
  bs: string,
}

export interface PostUser {
  id: number | null,
  name: string,
}

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export interface UserFormatted {
  id: number,
  name: string,
  email: string,
  city: string,
  company: string,
}

export interface PostDataFormatted {
  title: string,
  body: string,
}

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  company: Company,
}

export interface StoreData {
  currentView: 'userTable' | 'postTable';
  searchValue: string,
  tableData: User[],
  postUser: PostUser,
  postData: any,
}
