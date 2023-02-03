import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User')
    private userModel: Model<IUser>
  ) { }
  async create(createUserDto: CreateUserDto): Promise<IUser> {
    return this.userModel.create(createUserDto);
  }

  async getAllUsers(): Promise<IUser[]> {
    return this.userModel.find();
  }

  async getUserById(id: string): Promise<IUser> {
    return this.userModel.findById(id);
  }

  async updateUserById(id: string, updateUserDto: UpdateUserDto): Promise<IUser> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  async deleteUserById(id: string): Promise<IUser> {
    return this.userModel.findByIdAndDelete(id);
  }
}
