export type TUser = {
    _id: string;
    email: string;
    role: 'user' | 'admin';
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
    role: 'user' | 'admin';
    // role: string;
    userEmail: string;
}