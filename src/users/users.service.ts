import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { IUser } from './interfaces/user.interface';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { AddFriendDto } from './dto/add-firend.dto';
import { IUserRequest } from './interfaces/user-req.interface';
import { NotFoundException } from '@nestjs/common/exceptions';
import { Types } from "mongoose";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User')
    private userModel: Model<IUser>
  ) { }

  async createUser(createUserDto: CreateUserDto): Promise<IUser> {
    //move to common code
    const saltOrRounds: number = 10;
    createUserDto.password = await bcrypt.hash(createUserDto.password, saltOrRounds);
    return this.userModel.create(createUserDto);
  }

  async addFriend(user: IUserRequest, addFriendDto: AddFriendDto): Promise<IUser[]> {
    const userFromDb: IUser = await this.getUserById(user.userId);
    const friend = await this.getUserByUserName(addFriendDto.username);
    if (!friend) {
      throw new NotFoundException('User not found');
    }
    userFromDb.friends.push(friend);
    await userFromDb.save();
    const myFriends: any = (await this.getUserById(user.userId)).friends;
    console.log(myFriends);

    return myFriends;
  }

  async getAllUsers(id: string): Promise<IUser[]> {
    return this.userModel.find({ _id: { $ne: id } });
  }

  async getMyProfile(id: string): Promise<IUser> {
    return await this.getUserById(id);
  }

  async getUserById(id: string): Promise<IUser> {
    return this.userModel.findById(id);
  }

  async getUserByUserName(username: string): Promise<User> {
    return this.userModel.findOne({ username: username });
  }

  async updateUserById(id: string, updateUserDto: UpdateUserDto): Promise<void> {
    if (updateUserDto.password) {
      //TODO: move to common code
      const saltOrRounds: number = 10;
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, saltOrRounds);
    }
    return this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  async deleteUserById(id: string): Promise<IUser> {
    //TODO: throw 401 unauthorized exceprion id user deleted
    return this.userModel.findByIdAndDelete(id);
  }
}
