import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCommentDto {
    @IsString()
    @IsNotEmpty()
    deedId: string;
    @IsString()
    @IsOptional()
    readonly content: string;
}
