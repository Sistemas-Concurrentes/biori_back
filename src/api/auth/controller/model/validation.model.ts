export class ValidationModel{
  public register_code: number;
  public username: string;

  constructor(register_code: number, token: string) {
    this.register_code = register_code;
    this.username = token;
  }

  toJson(): object {
    return {
      register_code: this.register_code,
      token: this.username
    }
  }
}