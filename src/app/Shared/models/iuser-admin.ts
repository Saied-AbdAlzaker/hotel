export interface IUserAdmin {
  _id: string,
  userName: string
}
export interface IChangePassword {
oldPassword: string,
newPassword: string,
confirmPassword: string
}
