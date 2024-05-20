import { LoginUsecase } from './login.usecase';
import { Test, TestingModule } from '@nestjs/testing';
import { MyJwtService } from '../../../utiles/jwt/jwt.service';
import { UserTable } from '../../../datasource/db/usertable/usertable.usecase';
import { UnauthorizedException } from '@nestjs/common';
import * as bcrypt from '../../../utiles/bcrypt/mybcrypt';

describe('LoginUsecase', () => {
  let useCase: LoginUsecase;
  const mockJwt = {
    getAccessToken: jest.fn(() => 'string'),
  };
  const mockUserTable = {
    getUserByEmail: jest.fn(),
  };

  const resultUserTable = {
    id: 1,
    name: 'name',
    surname: 'surname',
    user_name: 'username',
    birth_date: new Date(),
    password: 'hashedPassword',
    phone_number: 'phone',
    register_code: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: new Date(),
  };
  const resultLoginUsecase = {
    id: resultUserTable.id,
    user_name: resultUserTable.user_name,
    token: 'string',
    register_code: resultUserTable.register_code,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LoginUsecase,
        {
          provide: MyJwtService,
          useValue: mockJwt,
        },
        {
          provide: UserTable,
          useValue: mockUserTable,
        },
      ],
    }).compile();
    jest.spyOn(bcrypt, 'comparePassword').mockReturnValue(true);
    jest.spyOn(mockUserTable, 'getUserByEmail').
      mockResolvedValue(resultUserTable);

    useCase = module.get<LoginUsecase>(LoginUsecase);
  });

  it('should throw UnauthorizedException if user is invalid', async () => {
    jest.spyOn(mockUserTable, 'getUserByEmail').mockResolvedValue({});

    await expect(useCase.run('username', 'wrongPassword')).
      rejects.
      toThrow(UnauthorizedException);
  });

  it('should throw UnauthorizedException if password is invalid', async () => {
    jest.spyOn(bcrypt, 'comparePassword').mockReturnValue(false);
    await expect(useCase.run('username', 'wrongPassword')).
      rejects.
      toThrow(UnauthorizedException);
  });

  it('should return a LoginUsecaseResult if user and password are valid',
    async () => {
      expect(await useCase.run('username', 'password')).
        toEqual(resultLoginUsecase);
    });

  it('should check that if UserTable is called with user param',
    async () => {
      const userTableSpyMock = jest.spyOn(mockUserTable, 'getUserByEmail');
      await useCase.run('user', 'pass');
      expect(userTableSpyMock).toHaveBeenCalledWith('user');
    });

  it('should check that if MyJwt is called with right params',
    async () => {
      const myJwtSpyMock = jest.spyOn(mockJwt, 'getAccessToken');
      await useCase.run('user', 'pass');
      expect(myJwtSpyMock).toHaveBeenCalledWith(1, 'username', 'name');
    });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });
});