import { IRooms } from "../../rooms/model/room";
export interface IBookingsTable {
    totalCount: number,
    booking: IBookings[]
}
export interface IBookings {
    _id: string,
    startDate: Date,
    endDate: Date,
    totalPrice: number,
    user: any,
    room: IRooms,
    status: string,
    createdAt: Date,
    updatedAt: Date
}
