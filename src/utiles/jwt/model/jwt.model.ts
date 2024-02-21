export class JwtModel {
  public username: string;
  public name: string;

  constructor(username: string, name: string) {
    this.username = username;
    this.name = name;
  }

  toJson(): object {
    return {
      username: this.username,
      name: this.name
    }
  }
}

export function jwtModelFromJson(json: object): JwtModel {
  return new JwtModel(json['username'], json['name']);
}