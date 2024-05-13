import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards, Request } from '@nestjs/common';
import { SingInDto } from './dto/sing_in.dto';
import { LoginUsecase } from '../use_cases/login.usecase';
import { ValidationDto } from './dto/validation.dto';
import { ValidationUsecase } from '../use_cases/validation.usecase';
import { AuthGuard } from '../guards/auth.guard';
import { ValidationModel } from './model/validation.model';
import { ResendUsecase } from '../use_cases/resend.usecase';

@Controller()
export class AuthLoginEntrypoint {
  constructor (private loginUseCase: LoginUsecase, private validateUseCase: ValidationUsecase,
               private resendUseCase: ResendUsecase) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async singIn (@Body() singInDto: SingInDto){
      return await this.loginUseCase.run(singInDto.user_name, singInDto.password);
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('validation')
  async validationCode (@Body() validationDto: ValidationDto, @Request() request: any){
    const validationModel = new ValidationModel(validationDto.register_code, request.user)
    return await this.validateUseCase.run(validationModel);
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('resend')
  async resendCode (@Request() request: any){
    return await this.resendUseCase.run(request.user);
  }
}