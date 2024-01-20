import { IFacilities } from 'src/app/Core/Pages/dashboard/Modules/rooms/model/room';

export interface IRoomsUserDetails {
  page: number;
  size: number;
  data: {
    rooms: IRoomsUser[];
    totalCount: number
  };
}
export interface IRoomsUser {
  _id: string;
  roomNumber: string;
  images: string[];
  price: number;
  capacity: number;
  discount: number;
  facilities: IFacilities[];
  createdAt: Date;
  updatedAt: Date;
  isBooked: boolean;
}
