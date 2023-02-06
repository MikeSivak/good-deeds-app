import { IsBoolean, IsOptional, IsString } from "class-validator";

export class UpdateDeedDto {
    @IsString()
    @IsOptional()
    readonly name: string;
    @IsString()
    @IsOptional()
    readonly description: string;
    @IsBoolean()
    @IsOptional()
    readonly status: boolean;
};