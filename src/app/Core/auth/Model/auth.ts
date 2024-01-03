export interface ISignin {
    email: string,
    password: string
}
export interface IResetPassword {
    email: string,
    password: string,
    confirmPassword: string,
    seed: string
}
