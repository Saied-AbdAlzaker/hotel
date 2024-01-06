export interface IRoom {
    roomNumber: string,
    imgs: string,
    price: string,
    capacity: string,
    discount: string,
    facilities: string[],
}
export interface IFacilities {
    _id: any,
    name: string,
}

export interface IRoomsDetails {
    page:number,
    size:number,
    data:IRooms[],
    totalCount:number
}
export interface IRooms {
    _id:any,
    roomNumber: string,
    images: string,
    price: number,
    capacity: string,
    discount: string,
    facilities: IFacilities[],
    createdAt: string,
    updatedAt: string,
}
