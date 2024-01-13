import { IUserAdmin } from 'src/app/Shared/models/iuser-admin';
import { IRoom, IRooms } from '../../rooms/model/room';

export interface IAdsResponse {
  success: true;
  message: string;
  data: IAdsData;
}
export interface IAdsData {
  ads: IAds[];
  totalCount: number;
}

export interface IAds {
  _id: string;
  isActive: boolean;
  room: IRooms;
  discount: number,
  createdBy: IUserAdmin;
  createdAt: string;
  updatedAt: string;
}

export interface IAddAds {
  room: IRooms,
  discount: number,
  isActive: boolean
}

