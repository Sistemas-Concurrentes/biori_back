import {
  Controller,
  UseGuards,
  Body, Request, Post, HttpCode, HttpStatus,
} from '@nestjs/common';
import {AuthGuard} from '../../../../auth/guards/auth.guard';
import {AddReportDto} from './dto/report.dto';
import {AddReportUsecase} from '../use_cases/add_report.usecase';

@Controller()
export class ReportsEntrypoint {
  constructor(
      private addReportUseCase: AddReportUsecase) {
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.CREATED)
  @Post('addReport')
  async addReport(@Body() addReportDto: AddReportDto, @Request() request: any) {
    return this.addReportUseCase.run(addReportDto, request.id);
  }
}