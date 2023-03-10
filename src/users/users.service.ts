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
import { usersProtection } from './constants/users-protection.constants';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<IUser>,
    private readonly configService: ConfigService,
  ) { }

  async createUser(createUserDto: CreateUserDto): Promise<IUser> {
    //move to common code
    const saltOrRounds: number = +this.configService.get<string>('SALT_OR_ROUNDS');
    createUserDto.password = await bcrypt.hash(createUserDto.password, saltOrRounds);
    return await this.userModel.create(createUserDto);
  }

  async addFriend(user: IUserRequest, addFriendDto: AddFriendDto): Promise<User> {
    const userFromDb: IUser = await this.getUserById(user.userId);
    const friend = await this.getUserByUserName(addFriendDto.username);
    if (!friend) {
      throw new NotFoundException('User not found');
    }
    userFromDb.friends.push(friend);
    await userFromDb.save();

    return friend;
  }

  //Get all users without private fields (friends, deeds, password)
  async getAllUsers(id: string): Promise<IUser[]> {
    return await this.userModel.find({ _id: { $ne: id } }, usersProtection);
  }

  async getMyProfile(id: string): Promise<IUser> {
    return await this.getUserById(id);
  }

  async getUserById(id: string): Promise<IUser> {
    return await this.userModel.findById(id, { password: usersProtection.password });
  }

  async getUserByUserName(username: string): Promise<User> {
    return await this.userModel.findOne({ username: username });
  }

  async increaseRating(userId: string): Promise<IUser> {
    const user = await this.getUserById(userId);
    let rate = user.rate + 10;
    user.rate = rate;
    await user.save();

    return user;
  }

  async updateUserById(id: string, updateUserDto: UpdateUserDto): Promise<IUser> {
    if (updateUserDto.password) {
      const saltOrRounds: number = +this.configService.get<string>('SALT_OR_ROUNDS');
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, saltOrRounds);
    }
    return await this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  async deleteUserById(id: string): Promise<IUser> {
    return await this.userModel.findByIdAndDelete(id);
  }
}
