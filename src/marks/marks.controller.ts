import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MarksService } from './marks.service';
import { CreateMarkDto } from './dto/create-mark.dto';
import { UpdateMarkDto } from './dto/update-mark.dto';
import { Types } from 'mongoose';
import { ParseObjectIdPipe } from 'src/pipes/ParseObjectIdPipe';

@Controller('marks')
export class MarksController {
  constructor(private readonly marksService: MarksService) {}

  @Post()
  create(@Body() createMarkDto: CreateMarkDto) {
    return this.marksService.create(createMarkDto);
  }

  @Get()
  findAll() {
    return this.marksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) id: Types.ObjectId) {
    return this.marksService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseObjectIdPipe) id: Types.ObjectId,
    @Body() updateMarkDto: UpdateMarkDto,
  ) {
    return this.marksService.update(id, updateMarkDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseObjectIdPipe) id: Types.ObjectId) {
    return this.marksService.remove(id);
  }
}
