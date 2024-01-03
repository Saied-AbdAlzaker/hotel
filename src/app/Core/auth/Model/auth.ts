export interface Auth {
}
export interface IResetPassword {
    email: string,
    password: string,
    confirmPassword: string,
    seed: string
}
export interface ISignUp {
    userName: string,
    email: string,
    phoneNumber: string,
    country: string,
    password: string,
    confirmPassword: string,
}