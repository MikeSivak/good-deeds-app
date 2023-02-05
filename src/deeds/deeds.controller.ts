import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/users/entities/user.entity';
import { IUserRequest } from 'src/users/interfaces/user-req.interface';
import { UsersService } from 'src/users/users.service';
import { GetUser } from './decorators/get-user.decorator';
import { DeedsService } from './deeds.service';
import { CreateDeedDto } from './dto/create-deed.dto';
import { UpdateDeedDto } from './dto/update-deed.dto';

@Controller('deeds')
@UseGuards(JwtAuthGuard)
export class DeedsController {
  constructor(
    private readonly deedsService: DeedsService,
  ) { }

  @Post()
  async createDeed(@GetUser() user: IUserRequest, @Body() createDeedDto: CreateDeedDto) {
    return await this.deedsService.createDeed(user, createDeedDto);
  }

  @Get()
  async getUserDeeds() {
    return await this.deedsService.getUserDeeds();
  }

  @Get(':id')
  async getDeedById(@Param('id') id: string) {
    return await this.deedsService.getDeedById(id);
  }

  @Patch(':id')
  async updateDeedById(@Param('id') id: string, @Body() updateDeedDto: UpdateDeedDto) {
    return await this.deedsService.updateDeedById(id, updateDeedDto);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return await this.deedsService.deleteDeedById(id);
  }
}
