import { Document } from 'mongoose';
import { Deed } from 'src/deeds/entities/deed.entity';
import { User } from '../entities/user.entity';

export interface IUser extends Document {
    readonly firstName: string,
    readonly lastName: string,
    readonly username: string,
    readonly password: string,
    readonly deeds: Deed[],
    readonly friends: User[],
    readonly rate: number,
}