import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from 'src/schemas/student.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Mark } from 'src/schemas/mark.schema';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<Student>,
    @InjectModel(Mark.name) private markModel: Model<Mark>,
  ) {}

  async create(createStudentDto: CreateStudentDto) {
    const createdStudent = new this.studentModel(createStudentDto);
    return createdStudent.save();
  }

  async findAll() {
    return this.studentModel
      .find()
      .populate({ path: 'marks', model: this.markModel })
      .exec();
  }

  async findOne(id: Types.ObjectId) {
    return this.studentModel
      .findById(id)
      .populate({ path: 'marks', model: this.markModel })
      .exec();
  }

  async update(id: Types.ObjectId, updateStudentDto: UpdateStudentDto) {
    return this.studentModel.findByIdAndUpdate(id, updateStudentDto).exec();
  }

  async remove(id: Types.ObjectId) {
    return this.studentModel.findByIdAndDelete(id).exec();
  }
}
