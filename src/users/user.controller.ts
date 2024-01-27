import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {
  }

  @HttpCode(HttpStatus.OK)
  @Get('all')
  async getAllUsers() {
    return await this.userService.getUsers();
  }
}
