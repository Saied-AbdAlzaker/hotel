import { IFacilities } from "src/app/Core/Pages/dashboard/Modules/rooms/model/room";


export interface IAdsUserDetails{
    data:{
      ads:IAdsUser[]
      totalCount: number;
  
    }
    
  }
  export interface IAdsUser{
    _id:string;
    roomNumber:string;
    price:number;
    capacity:number;
    discount:number;
    facilities:IFacilities[];
    createdAt:Date;
    updatedAt:Date;
    images: string[];
  
  
  
  
  
  }