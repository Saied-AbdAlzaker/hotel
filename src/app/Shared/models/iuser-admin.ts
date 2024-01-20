export interface IUserAdmin {
  _id: string,
  userName: string
}
export interface IChangePassword {
oldPassword: string,
newPassword: string,
confirmPassword: string
}
export interface IUser {
  country:string,
  createdAt:Date,
  email:string,
  phoneNumber:number,
  profileImage:string,
  role:string,
  updatedAt:Date,
  userName:string,
  verified:boolean,
  _id: string
}
