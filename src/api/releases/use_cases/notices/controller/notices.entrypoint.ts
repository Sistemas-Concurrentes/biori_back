import {
  Controller,
  UseGuards,
  Body, Request, Post, HttpCode, HttpStatus,
} from '@nestjs/common';
import {AuthGuard} from '../../../../auth/guards/auth.guard';
import { AddNoticesUsecase } from '../use_cases/add_notices.usecase';
import { AddNoticesDto } from './dto/notices.dto';

@Controller()
export class NoticesEntrypoint {
  constructor(
    private addNoticeUsecase: AddNoticesUsecase) {
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.CREATED)
  @Post('addNotice')
  async addNotices(
    @Body() addAdvertisementDto: AddNoticesDto,
      @Request() request: any) {
    return this.addNoticeUsecase.run(addAdvertisementDto, request.id);
  }
}