import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeedsService } from './deeds.service';
import { CreateDeedDto } from './dto/create-deed.dto';
import { UpdateDeedDto } from './dto/update-deed.dto';

@Controller('deeds')
export class DeedsController {
  constructor(private readonly deedsService: DeedsService) { }

  @Post()
  async createDeed(@Body() createDeedDto: CreateDeedDto) {
    return await this.deedsService.createDeed(createDeedDto);
  }

  @Get()
  async getAllDeeds() {
    return await this.deedsService.getAllDeeds();
  }

  @Get(':id')
  async getDeedById(@Param('id') id: number) {
    return await this.deedsService.getDeedById(id);
  }

  @Patch(':id')
  async updateDeedById(@Param('id') id: number, @Body() updateDeedDto: UpdateDeedDto) {
    return await this.deedsService.updateDeedById(id, updateDeedDto);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: number) {
    return await this.deedsService.deleteDeedById(id);
  }
}
