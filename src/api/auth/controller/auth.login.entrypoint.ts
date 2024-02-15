import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SingInDto } from './dto/sing_in.dto';
import { LoginUsecase } from '../use_cases/login.usecase';
import { ValidationDto } from './dto/validation.dto';
import { ValidationUsecase } from '../use_cases/validation.usecase';

@Controller('auth')
export class AuthLoginEntrypoint {
  constructor (private loginUseCase: LoginUsecase, private validateUseCase: ValidationUsecase) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async singIn (@Body() singInDto: SingInDto){
    return await this.loginUseCase.run(singInDto.user_name, singInDto.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('validation')
  async validationCode (@Body() validationDto: ValidationDto){
    return await this.validateUseCase.run(validationDto);
  }
}