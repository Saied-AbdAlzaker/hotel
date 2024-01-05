export interface IRoomsDetails {
    page:number,
    size:number,
    data:IRooms[],
    totalCount:number
}
export interface IRooms {
    _id:number,
    roomNumber: string,
    images: string,
    price: number,
    capacity: string,
    discount: string,
    facilities: any,
    createdAt: string,
    updatedAt: string
}


