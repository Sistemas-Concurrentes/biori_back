import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtModel, jwtModelFromJson } from './model/jwt.model';

@Injectable()
export class MyJwtService {

  constructor(private jwtService: JwtService) {}

  getAccessToken(
    id: number, username: string, name: string, user_type: string,
    rol: string): string {
    const jwtModel = new JwtModel(id, username, name, user_type, rol);
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

  getUserId(token: string): number {
    return this.getJwtModel(token).id;
  }
}
