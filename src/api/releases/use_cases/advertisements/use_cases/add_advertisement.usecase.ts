import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {
  TeacherTable,
} from '../../../../../datasource/db/usertable/teacherTable.usecase';
import {
  Advertisementtable,
} from '../../../../../datasource/db/advertisementtable/advertisementtable.usecase';
import {
  AdvertisementDto,
} from '../../../../../datasource/db/advertisementtable/dto/advertisement.dto';
import {AddAdvertisementResult} from './dto/add_advertisement.result';
import {AddAdvertisementDto} from '../controller/dto/advertisement.dto';

@Injectable()
export class AddAdvertisementUsecase {

  constructor(
      private advertisementTable: Advertisementtable,
      private teacherTable: TeacherTable) {
  }

  async run(
      addAdvertisementDto: AddAdvertisementDto,
      userId: number): Promise<AddAdvertisementResult> {
    const teacherId: number = await this.teacherTable.getUserIdByTeacherId(
        userId);
    const isTeacherOrDelegate = teacherId == 0;

    if (isTeacherOrDelegate) {
      throw new HttpException('Teacher not found', HttpStatus.FORBIDDEN);
    }

    const advertisementDto: AdvertisementDto = {
      title: addAdvertisementDto.titulo,
      description: addAdvertisementDto.descripcion,
      userId: userId,
      groups: addAdvertisementDto.groups.map(group => group.id),
    };
    await this.advertisementTable.createAdvertisement(advertisementDto);

    return {
      titulo: addAdvertisementDto.titulo,
    };
  }
}


