export interface IlistTable {
    totalCount: number,
    listuser:IlistUser[]
}

export interface IlistUser {
        _id:string,
        userName: string,
        email: string,
        phoneNumber: string,
        country: string ,
        role: string,
        verified: boolean,
        createdAt: string,
        updatedAt: string


}
