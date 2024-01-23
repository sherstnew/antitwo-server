import { Injectable } from '@nestjs/common';
import { CreateMarkDto } from './dto/create-mark.dto';
import { UpdateMarkDto } from './dto/update-mark.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Mark } from 'src/schemas/mark.schema';
import { Model } from 'mongoose';
import { Types } from 'mongoose';

@Injectable()
export class MarksService {
  constructor(@InjectModel(Mark.name) private markModel: Model<Mark>) {}

  async create(createMarkDto: CreateMarkDto) {
    const createdMark = new this.markModel(createMarkDto);
    return await createdMark.save();
  }

  async findAll() {
    return this.markModel.find().exec();
  }

  async findOne(id: Types.ObjectId) {
    return this.markModel.findById(id).exec();
  }

  async update(id: Types.ObjectId, updateMarkDto: UpdateMarkDto) {
    return this.markModel.findByIdAndUpdate(id, updateMarkDto).exec();
  }

  async remove(id: Types.ObjectId) {
    return this.markModel.findByIdAndDelete(id).exec();
  }
}
