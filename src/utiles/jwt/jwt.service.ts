import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtModel, jwtModelFromJson } from './model/jwt.model';

@Injectable()
export class MyJwtService {

  constructor(private jwtService: JwtService) {}
  getAccessToken(username: string, name: string): string {
    const jwtModel = new JwtModel(username, name);
    const payload = jwtModel.toJson();
    return this.jwtService.sign(payload);
  }

  verifyToken(token: string): boolean {
    try {
      this.jwtService.verify(token);
      return true;
    } catch (e) {
      return false;
    }
  }

  getJwtModel(token: string): JwtModel {
    return jwtModelFromJson(this.jwtService.decode(token));
  }

  getUserName(token: string): string {
    return this.getJwtModel(token).username;
  }

}
