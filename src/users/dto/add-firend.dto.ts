import { IsEmail, IsNotEmpty } from "class-validator";

export class AddFriendDto {
    @IsEmail()
    @IsNotEmpty()
    readonly username: string;
}
