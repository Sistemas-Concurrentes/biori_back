import { Injectable } from '@nestjs/common';
import { DbConnection } from '../db.connection';
import { UsertableModel } from './model/usertable.model';
import { RegisterDto } from '../../../api/auth/controller/dto/register.dto';


@Injectable()
export class UserTable {

  CODE_VERIFICATED:number = 0;

  constructor(private dbConnection: DbConnection) {
  }

  async getUserByEmail(user_name: string): Promise<UsertableModel> {
    const query = 'SELECT * FROM user WHERE user_name = ? ';
    const user = await this.dbConnection.runQuery(query, [user_name]);

    return new UsertableModel(user[0]);
  }

  async createUser(user: RegisterDto): Promise<void> {
    try {
      const query = 'INSERT INTO user (name, user_name, surname, birth_date, phone_number, password) VALUES ( ?, ?, ?, ?, ?, ?)';
      await this.dbConnection.runQuery(query, [user.name, user.user_name,
        user.surname, user.birth_date, user.phone_number, user.password]);
    } catch (error) {
      console.log(error);
    }
  }

  async updateUserRegisterCode(userName: string): Promise<void> {
    try {
      const query = 'UPDATE user SET register_code = ? WHERE user_name = ?';
      await this.dbConnection.runQuery(query, [this.CODE_VERIFICATED, userName]);
    } catch (error) {
      console.log(error);
    }
  }
}