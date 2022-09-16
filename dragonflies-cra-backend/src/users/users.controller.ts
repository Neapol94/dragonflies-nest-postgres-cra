import { Controller, Get, Inject } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(
    @Inject(UsersService) private readonly service: UsersService,
  ) {}

  @Get('/all')
  public getAllUsers(): Promise<User[]> {
    return this.service.getAllUsers();
  }
}
