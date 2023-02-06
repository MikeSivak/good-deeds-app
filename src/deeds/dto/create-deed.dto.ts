import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateDeedDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;
    @IsString()
    @IsOptional()
    readonly description: string;
    @IsBoolean()
    @IsNotEmpty()
    readonly status: boolean;
}