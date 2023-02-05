import { Document } from 'mongoose';

export interface IDeed extends Document {
    readonly name: string,
    readonly description: string,
    readonly status: boolean,
}