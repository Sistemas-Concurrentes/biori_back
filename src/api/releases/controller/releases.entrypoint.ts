import {
  Controller,
  HttpCode,
  HttpStatus,
  UseGuards,
  Get,
  Body,
  Post,
  Request,
} from '@nestjs/common';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { ConsultUsecase } from '../use_cases/consult.usecase';
import {
  AddAdvertisementDto,
} from '../use_cases/advertisements/controller/dto/advertisement.dto';
import {AddReportDto} from './dto/report.dto';
import {
  AddAdvertisementUsecase,
} from '../use_cases/advertisements/use_cases/add_advertisement.usecase';
import {AddReportUsecase} from '../use_cases/add_report.usecase';

@Controller()
export class ReleasesEntrypoint {
  constructor(
      private consultUseCase: ConsultUsecase,
      private addAdvertisementUseCase: AddAdvertisementUsecase,
      private addReportUseCase: AddReportUsecase) {
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get('getAll')
  async getAll (){
    return this.consultUseCase.run();
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.CREATED)
  @Post('addReport')
  async addReport(@Body() addReportDto: AddReportDto, @Request() request: any) {
    return this.addReportUseCase.run(addReportDto, request.id);
  }
}