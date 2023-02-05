import { Document } from 'mongoose';
import { User } from 'src/users/entities/user.entity';

export interface IDeed extends Document {
    readonly name: string,
    readonly description: string,
    readonly status: boolean,
}