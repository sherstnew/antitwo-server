import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Group } from 'src/schemas/group.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Student } from 'src/schemas/student.schema';
import { Mark } from 'src/schemas/mark.schema';

@Injectable()
export class GroupsService {
  constructor(
    @InjectModel(Group.name) private groupModel: Model<Group>,
    @InjectModel(Student.name) private studentModel: Model<Student>,
    @InjectModel(Mark.name) private markModel: Model<Mark>,
  ) {}

  async create(createGroupDto: CreateGroupDto) {
    const createdGroup = new this.groupModel(createGroupDto);
    return createdGroup.save();
  }

  async findAll() {
    return this.groupModel
      .find()
      .populate({
        path: 'students',
        model: this.studentModel,
        populate: { path: 'marks', model: this.markModel },
      })
      .exec();
  }

  async findOne(id: Types.ObjectId) {
    return this.groupModel
      .findById(id)
      .populate({
        path: 'students',
        model: this.studentModel,
        populate: { path: 'marks', model: this.markModel },
      })
      .exec();
  }

  async update(id: Types.ObjectId, updateGroupDto: UpdateGroupDto) {
    return this.groupModel.findByIdAndUpdate(id, updateGroupDto).exec();
  }

  async remove(id: Types.ObjectId) {
    return this.groupModel.findByIdAndDelete(id).exec();
  }
}
