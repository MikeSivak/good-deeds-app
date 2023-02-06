import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateDeedDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;
    @IsString()
    @IsNotEmpty()
    readonly description: string;
    @IsBoolean()
    @IsNotEmpty()
    readonly status: boolean = false;
}