export type TUser = {
    _id: string;
    name ?: string;
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
};

export interface IManageUser {
    _id: string
    name: string
    email: string
    password: string
    role: string
    isBlocked: boolean
    createdAt: string
    updatedAt: string
    __v: number
  }