import { IsOptional, IsString, IsEmail } from 'class-validator';
import { Deed } from 'src/deeds/entities/deed.entity';
import { User } from '../entities/user.entity';

export class UpdateUserDto {
    @IsString()
    @IsOptional()
    readonly firstName: string;
    @IsString()
    @IsOptional()
    readonly lastName: string;
    @IsEmail()
    @IsOptional()
    readonly username: string;
    @IsOptional()
    password: string;
    @IsOptional()
    deads: Deed[];
    @IsOptional()
    friends: User[];
};
