import { IRoom } from "src/app/Core/Pages/dashboard/Modules/rooms/model/room";
import { IUser } from "src/app/Shared/models/iuser-admin";

export interface IBooking {
    startDate: Date,
    endDate: Date,
    room: IRoom,
    totalPrice: number,
    user:IUser
}

