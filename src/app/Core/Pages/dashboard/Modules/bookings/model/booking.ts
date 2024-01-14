import { IRooms } from "../../rooms/model/room";
import { IlistUser } from "../../users/model/users";
export interface IBookingsTable {
    totalCount: number,
    booking: IBookings[]
}
export interface IBookings {
    _id: string,
    startDate: Date,
    endDate: Date,
    totalPrice: number,
    user: IlistUser,
    room: IRooms,
    status: string,
    createdAt: Date,
    updatedAt: Date
}
