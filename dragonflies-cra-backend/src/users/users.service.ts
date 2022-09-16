import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {

  public getAllUsers(): Promise<User[]> {
    return User.find();
  }

}
