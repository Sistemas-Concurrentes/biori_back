import {
  Controller,
  UseGuards,
  Body, Request, Post,
} from '@nestjs/common';
import {AuthGuard} from '../../../../auth/guards/auth.guard';
import {LikeDto} from './dto/like.dto';
import {LikeUsecase} from '../use_cases/like.usecase';

@Controller('releases/events')
export class UserInteractionEntrypoint {
  constructor(private likeUsecase: LikeUsecase) {
  }

  @UseGuards(AuthGuard)
  @Post('like')
  async likeEvent(@Body() likeDto: LikeDto, @Request() request: any) {
    return await this.likeUsecase.run(likeDto, request.id);
  }
}