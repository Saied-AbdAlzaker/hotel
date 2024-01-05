import { IRooms } from "../../rooms/model/room";
export interface IBookingsTable {
    totalCount: number,
    booking: IBookings[]
}
export interface IBookings {
    _id: string,
    startDate: string,
    endDate: string,
    totalPrice: number,
    user: any,
    room: IRooms,
    status: string,
    createdAt: string,
    updatedAt: string
}
