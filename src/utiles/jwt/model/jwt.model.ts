export class JwtModel {
  public id: number;
  public username: string;
  public name: string;
  public user_type: string;
  public rol: string;

  constructor(
    id: number, username: string, name: string, user_type: string,
    rol: string) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.user_type = user_type;
    this.rol = rol;
  }

  toJson(): object {
    return {
      id: this.id,
      username: this.username,
      name: this.name,
      user_type: this.user_type,
      rol: this.rol,
    }
  }

  fromJson(json: object): JwtModel {
    return new JwtModel(json['id'], json['username'], json['name'],
      json['user_type'], json['rol']);
  }


}

export function jwtModelFromJson(json: object): JwtModel {
  return new JwtModel(json['id'], json['username'], json['name'],
    json['user_type'], json['rol']);
}