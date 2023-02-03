import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDeedDto } from './dto/create-deed.dto';
import { UpdateDeedDto } from './dto/update-deed.dto';
import { IDeed } from './interfaces/deed.interface';
import { Model } from 'mongoose';

@Injectable()
export class DeedsService {
  constructor(
    @InjectModel('Deed')
    private deedModel: Model<IDeed>
  ) { }
  async createDeed(createDeedDto: CreateDeedDto): Promise<IDeed> {
    return this.deedModel.create(createDeedDto);
  }

  async getAllDeeds(): Promise<IDeed[]> {
    return this.deedModel.find();
  }

  async getDeedById(id: number): Promise<IDeed> {
    return this.deedModel.findById(id);
  }

  async updateDeedById(id: number, updateDeedDto: UpdateDeedDto): Promise<IDeed> {
    return this.deedModel.findByIdAndUpdate(id, updateDeedDto);
  }

  async deleteDeedById(id: number): Promise<IDeed> {
    return this.deedModel.findByIdAndDelete(id);
  }
}
