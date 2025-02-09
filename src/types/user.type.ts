export type TUser = {
    _id: string;
    email: string;
    role: string;
    status?: string;
    isDeleted?: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
};

export type TUserLoginData = {
    exp: number;
    iat: number;
    id: string;
    role: string;
    userEmail: string;
}