import { Module } from '@nestjs/common';
import { MarksService } from './marks.service';
import { MarksController } from './marks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Mark, MarkSchema } from 'src/schemas/mark.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Mark.name, schema: MarkSchema }]),
  ],
  controllers: [MarksController],
  providers: [MarksService],
})
export class MarksModule {}
