import { IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword } from "class-validator";
import { Deed } from "src/deeds/entities/deed.entity";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    readonly firstName: string;
    @IsString()
    @IsNotEmpty()
    readonly lastName: string;
    @IsString()
    @IsNotEmpty()
    readonly username: string;
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;
    @IsStrongPassword()
    @IsNotEmpty()
    readonly password: string;
}
