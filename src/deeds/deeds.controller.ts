import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DeedsService } from './deeds.service';
import { CreateDeedDto } from './dto/create-deed.dto';
import { UpdateDeedDto } from './dto/update-deed.dto';

@Controller('deeds')
@UseGuards(JwtAuthGuard)
export class DeedsController {
  constructor(private readonly deedsService: DeedsService) { }

  @Post()
  async createDeed(@Body() createDeedDto: CreateDeedDto) {
    return await this.deedsService.createDeed(createDeedDto);
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
