export interface ArrOfWines {
  page: number,
  totalPages: number,
  itemsPerPage: number,
  totalItems: number,
  items: Wine[]
}

export interface Wine {
  id: number,
  image: string,
  name: string,
  price: number,
  discount: number,
  priceMember: number,
  priceNonMember: number,
  type: string,
  classification: string,
  size: string,
  rating: number,
  avaliations: 292,
  country: string,
  region: string,
  flag: string,
  sommelierComment: string
}