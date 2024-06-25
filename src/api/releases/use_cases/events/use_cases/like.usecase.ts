import {Injectable} from '@nestjs/common';
import {
  LikesTable,
} from '../../../../../datasource/db/liketable/liketable.usecase';
import {LikeDto} from '../controller/dto/like.dto';

@Injectable()
export class LikeUsecase {

  constructor(
    private likesTable: LikesTable) {
  }

  async run(likeDto: LikeDto, userId: number): Promise<void> {

    const hasBeenLiked = await this.likesTable.hasBeenLiked(likeDto.idEvent,
      userId);

    if (hasBeenLiked) {
      await this.likesTable.updateLike(likeDto.idEvent, userId,
          likeDto.userSetLike);
    } else {
      await this.likesTable.addLike(likeDto.idEvent, userId,
          likeDto.userSetLike);
    }
  }
}
