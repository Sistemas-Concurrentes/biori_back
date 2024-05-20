import { Test, TestingModule } from '@nestjs/testing';
import { AuthLoginEntrypoint } from './auth.login.entrypoint';
import { LoginUsecase } from '../use_cases/login.usecase';
import { LoginUsecaseResult } from '../use_cases/dto/loginUsecase.result';
import { AuthGuard } from '../guards/auth.guard';
import { RegisterUsecase } from '../use_cases/register.usecase';
import { ValidationUsecase } from '../use_cases/validation.usecase';
import { ResendUsecase } from '../use_cases/resend.usecase';

describe('AuthLoginEntrypoint', () => {
  let entrypoint: AuthLoginEntrypoint;
  const mockLoginUsecase = {
    run: jest.fn(() => new Promise((resolve) => resolve({
      id: 1,
      user_name: 'string',
      token: 'string',
      register_code: 1,
    }))),
  };
  const mockValidationUsecase = {};
  const mockRegisterUsecase = {};
  const mockResendUsecase = {};

  const result: LoginUsecaseResult = {
    id: 1,
    user_name: 'string',
    token: 'string',
    register_code: 1,
  };

  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AuthLoginEntrypoint],
      providers: [
        LoginUsecase,
        RegisterUsecase,
        ValidationUsecase,
        ResendUsecase],
    }).
      overrideProvider(LoginUsecase).
      useValue(mockLoginUsecase).
      overrideProvider(ValidationUsecase).
      useValue(mockValidationUsecase).
      overrideProvider(ResendUsecase).
      useValue(mockResendUsecase).
      overrideProvider(RegisterUsecase).
      useValue(mockRegisterUsecase).
      overrideGuard(AuthGuard).
      useValue({ canActivate: jest.fn(() => true) }).
      compile();

    entrypoint = app.get<AuthLoginEntrypoint>(AuthLoginEntrypoint);
  });

  it('should check that if login is ok then return promise login dto', () => {
    expect(entrypoint.singIn({ user_name: 'user', password: 'pass' }).then(
      (res) => expect(res).toStrictEqual(result),
    ));
  });

  it('should check that if loginUsecase is called with user, pass params',
    () => {
      const loginSpyMock = jest.spyOn(mockLoginUsecase, 'run');
      entrypoint.singIn({ user_name: 'user', password: 'pass' });
      expect(loginSpyMock).toHaveBeenCalledWith('user', 'pass');
    });

  it('should be defined', () => {
    expect(entrypoint).toBeDefined();
  });
});
