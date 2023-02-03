import { IsBoolean, IsNotEmpty, IsString } from "class-validator";
import { User } from "src/users/entities/user.entity";
export class CreateDeedDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;
    @IsString()
    @IsNotEmpty()
    readonly description: string;
    @IsBoolean()
    @IsNotEmpty()
    readonly status: boolean;
}