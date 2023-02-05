import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';
import { Deed } from 'src/deeds/entities/deed.entity';
import { User } from '../entities/user.entity';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsOptional()
    deads: Deed[];
    @IsOptional()
    friends: User[];
};
