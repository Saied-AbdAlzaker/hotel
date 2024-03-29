export interface IRoom {
    _id: string,
    roomNumber: string,
    images: string,
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



