import { IRoomsUser } from './home';

export interface IFavouriteResponse {
  success: boolean;
  message: string;
  data: IFavouriteData;
}
export interface IFavouriteData {
  favoriteRooms: IFavouriteRooms[];
  totalCount: number;
}
export interface IFavouriteRooms {
  _id: string;
  rooms: IRoomsUser[];
  user: IUser;
  createdAt: Date;
  updatedAt: Date;
}
export interface IUser {
  _id: string;
  userName: string;
}
