import {
  Controller,
  UseGuards,
  Body, Request, Post, HttpCode, HttpStatus,
} from '@nestjs/common';
import {AuthGuard} from '../../../../auth/guards/auth.guard';
import {AddAdvertisementUsecase} from '../use_cases/add_advertisement.usecase';
import {AddAdvertisementDto} from './dto/advertisement.dto';

@Controller()
export class AdvertisementsEntrypoint {
  constructor(
      private addAdvertisementUseCase: AddAdvertisementUsecase) {
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.CREATED)
  @Post('addAdvertisement')
  async addAdvertisement(
      @Body() addAdvertisementDto: AddAdvertisementDto,
      @Request() request: any) {
    return this.addAdvertisementUseCase.run(addAdvertisementDto, request.id);
  }
}