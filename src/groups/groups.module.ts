import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Group, GroupSchema } from 'src/schemas/group.schema';
import { Student, StudentSchema } from 'src/schemas/student.schema';
import { MarkSchema, Mark } from 'src/schemas/mark.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Group.name, schema: GroupSchema },
      { name: Student.name, schema: StudentSchema },
      { name: Mark.name, schema: MarkSchema },
    ]),
  ],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {}
