import { Document } from 'mongoose';
import { Deed } from 'src/deeds/entities/deed.entity';

export interface IUser extends Document {
    readonly firstName: string,
    readonly lastName: string,
    readonly username: string,
    readonly email: string,
    readonly password: string,
    readonly deeds: Deed[],
}