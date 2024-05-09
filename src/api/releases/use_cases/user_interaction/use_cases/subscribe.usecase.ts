import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {
  StudenttableUsecase,
} from '../../../../../datasource/db/studenttable/studenttable.usecase';
import {SubscribeDto} from '../controller/dto/subscribe.dto';
import {
  RegisteredTable,
} from '../../../../../datasource/db/registeredtable/registeredtable.usecase';
import {
  StudentRegisteredTable,
} from '../../../../../datasource/db/student_registeredtable/student_registeredtable.usecase';

@Injectable()
export class SubscribeUsecase {

  constructor(
      private studentRegisteredTable: StudentRegisteredTable,
      private studentTable: StudenttableUsecase,
      private registeredTable: RegisteredTable) {
  }

  async run(subscribeDto: SubscribeDto, userId: number): Promise<boolean> {
    const studentId = await this.studentTable.getStudentIdByUserId(userId);
    const registerEventId = await this.registeredTable.getRegisterIdEventById(
        subscribeDto.idEvent);
    const existsInscription = await this.studentRegisteredTable.existsInscription(
        studentId, registerEventId);

    if (studentId == 0) {
      throw new HttpException('student not found', HttpStatus.FORBIDDEN);
    }
    if (registerEventId == -1) {
      throw new HttpException('register not found', HttpStatus.FORBIDDEN);
    }
    if (existsInscription) {
      throw new HttpException('Event already subscribed found',
          HttpStatus.FORBIDDEN);
    }

    await this.studentRegisteredTable.addInscription(studentId,
        registerEventId);

    return true;

  }
}
