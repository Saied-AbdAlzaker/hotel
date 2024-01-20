export interface IRoom {
    _id: string,
    roomNumber: string,
    imgs: string,
    price: string,
    capacity: string,
    discount: number,
    facilities: IFacilities[],
    createdAt: string,
    updatedAt: string,
}
export interface IFacilities {
    _id: string,
    name: string,
}
export interface IRoomsDetails {
    success: true;
    message: string;
    data: IRoom;
}


// export interface IRooms {
//     _id:string,
//     roomNumber: string,
//     images: string,
//     price: number,
//     capacity: string,
//     discount: number,
//     facilities: IFacilities[],
//     createdAt: string,
//     updatedAt: string,

// }


