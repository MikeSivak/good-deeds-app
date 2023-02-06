import { Document } from 'mongoose';

export interface IComment extends Document {
    readonly username: string;
    readonly content: string;
}