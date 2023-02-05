import { Document } from 'mongoose';

export interface IUserRequest extends Document {
    readonly userId: string,
    readonly username: string,
}