import {
  Controller,
  UseGuards,
  Body, Request, Post, HttpCode, HttpStatus,
} from '@nestjs/common';
import {AuthGuard} from '../../../../auth/guards/auth.guard';
import {LikeDto} from './dto/like.dto';
import {LikeUsecase} from '../use_cases/like.usecase';
import {SubscribeDto} from './dto/subscribe.dto';
import {SubscribeUsecase} from '../use_cases/subscribe.usecase';
import {AddEventDto} from '../../../controller/dto/event.dto';
import {AddEventUsecase} from '../use_cases/add_event.usecase';

@Controller()
export class EventsEntrypoint {
  constructor(
      private addEventUseCase: AddEventUsecase,
      private likeUsecase: LikeUsecase,
      private subscribeUsecase: SubscribeUsecase) {
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.CREATED)
  @Post('addEvent')
  async addEvent(@Body() addEventDto: AddEventDto, @Request() request: any) {
    return this.addEventUseCase.run(addEventDto, request.id);
  }

  @UseGuards(AuthGuard)
  @Post('like')
  async likeEvent(@Body() likeDto: LikeDto, @Request() request: any) {
    return await this.likeUsecase.run(likeDto, request.id);
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('subscribe')
  async subscribeEvent(
      @Body() subscribeDto: SubscribeDto, @Request() request: any) {
    return await this.subscribeUsecase.run(subscribeDto, request.id);
  }
}