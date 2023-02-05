import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AddFriendDto } from './dto/add-firend.dto';
import { GetUser } from 'src/deeds/decorators/get-user.decorator';
import { IUserRequest } from './interfaces/user-req.interface';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  //Get all users except yourself
  @Get()
  async getAllUsers(@GetUser() user: IUserRequest) {
    return await this.usersService.getAllUsers(user.userId);
  }

  //Get your profile info
  @Get('/my-profile')
  async getMyProfile(@GetUser() user: IUserRequest) {
    return await this.usersService.getMyProfile(user.userId);
  }

  //Add a friend to your profile
  @Post('/add-friend')
  async addFriend(@GetUser() user: IUserRequest, @Body() addFriendDto: AddFriendDto) {
    return await this.usersService.addFriend(user, addFriendDto);
  }

  //Get user by id
  @Get(':id')
  async getUserById(@GetUser() user: IUserRequest, @Param('id') id: string) {
    return await this.usersService.getUserById(id, user.userId);
  }

  //Update your profile
  @Patch()
  async updateUserById(@GetUser() user: IUserRequest, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.updateUserById(user.userId, updateUserDto);
  }

  //Delete your profile
  @Delete()
  async deleteUserById(@GetUser() user: IUserRequest) {
    return await this.usersService.deleteUserById(user.userId);
  }
}
