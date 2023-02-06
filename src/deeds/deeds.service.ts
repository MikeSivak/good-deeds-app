import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDeedDto } from './dto/create-deed.dto';
import { UpdateDeedDto } from './dto/update-deed.dto';
import { IDeed } from './interfaces/deed.interface';
import { Model } from 'mongoose';
import { UsersService } from 'src/users/users.service';
import { IUser } from 'src/users/interfaces/user.interface';
import { IUserRequest } from 'src/users/interfaces/user-req.interface';
import { Deed } from './entities/deed.entity';

@Injectable()
export class DeedsService {
  constructor(
    @InjectModel('Deed')
    private deedModel: Model<IDeed>,
    @Inject(UsersService)
    private readonly usersService: UsersService,
  ) { }

  async createDeed(user: IUserRequest, createDeedDto: CreateDeedDto): Promise<IDeed> {
    const userFromDb: IUser = await this.usersService.getUserById(user.userId);
    const newDeed = await this.deedModel.create(createDeedDto);
    userFromDb.deeds.push(newDeed);
    await userFromDb.save();

    return newDeed;
  }

  async getDeedById(id: string): Promise<IDeed> {
    return this.deedModel.findById(id);
  }

  async updateDeedById(user: IUserRequest, id: string, updateDeedDto: UpdateDeedDto): Promise<IDeed> {
    if (updateDeedDto.status === true) {
      await this.usersService.increaseRating(user.userId);
    }
    return this.deedModel.findByIdAndUpdate(id, updateDeedDto);
  }

  async deleteDeedById(id: string): Promise<IDeed> {
    return this.deedModel.findByIdAndDelete(id);
  }

  async getDeedsByUserId(reqUser: IUserRequest, id: string): Promise<Deed[] | string> {
    const friendsIds = (await this.usersService.getUserById(reqUser.userId))
      .friends.map(f => f.valueOf());
    if (!friendsIds.includes(id)) {
      return 'you need to add this user as a friend if you want to see more information';
    }
    return (await (await this.usersService.getUserById(id)).populate('deeds')).deeds;
  }
}
