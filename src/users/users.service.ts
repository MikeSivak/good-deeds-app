import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { IUser } from './interfaces/user.interface';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User')
    private userModel: Model<IUser>
  ) { }
  async createUser(createUserDto: CreateUserDto): Promise<IUser> {
    const saltOrRounds: number = 10;
    createUserDto.password = await bcrypt.hash(createUserDto.password, saltOrRounds);
    return this.userModel.create(createUserDto);
  }

  async getAllUsers(): Promise<IUser[]> {
    return this.userModel.find();
  }

  async getUserById(id: string): Promise<IUser> {
    return this.userModel.findById(id);
  }

  async getUser(username: string): Promise<User> {
    return this.userModel.findOne({ username: username });
  }

  async updateUserById(id: string, updateUserDto: UpdateUserDto): Promise<IUser> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  async deleteUserById(id: string): Promise<IUser> {
    return this.userModel.findByIdAndDelete(id);
  }
}
