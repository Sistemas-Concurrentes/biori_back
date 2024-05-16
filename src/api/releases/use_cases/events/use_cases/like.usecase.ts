import {Injectable} from '@nestjs/common';
import {
  LikesTable,
} from '../../../../../datasource/db/liketable/liketable.usecase';
import {LikeDto} from '../controller/dto/like.dto';
import {
  StudenttableUsecase,
} from '../../../../../datasource/db/studenttable/studenttable.usecase';

@Injectable()
export class LikeUsecase {

  constructor(
      private likesTable: LikesTable,
      private studentTable: StudenttableUsecase) {
  }

  async run(likeDto: LikeDto, userId: number): Promise<void> {
    const studentId = await this.studentTable.getStudentIdByUserId(userId);

    const hasBeenLiked = await this.likesTable.hasBeenLiked(likeDto.idEvent,
        studentId);

    if (hasBeenLiked) {
      await this.likesTable.updateLike(likeDto.idEvent, studentId,
          likeDto.userSetLike);
    } else {
      await this.likesTable.addLike(likeDto.idEvent, studentId,
          likeDto.userSetLike);
    }
  }
}
