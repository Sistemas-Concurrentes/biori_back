export class JwtModel {
  public id: number;
  public username: string;
  public name: string;

  constructor(id:number, username: string, name: string) {
    this.id = id;
    this.username = username;
    this.name = name;
  }

  toJson(): object {
    return {
      id: this.id,
      username: this.username,
      name: this.name
    }
  }
}

export function jwtModelFromJson(json: object): JwtModel {
  return new JwtModel(json['id'], json['username'], json['name']);
}