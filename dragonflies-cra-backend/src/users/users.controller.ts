import { Controller, Get, Inject, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {

  constructor(
    @Inject(UsersService) private readonly service: UsersService,
  ) {}

  @Get('/get-all')
  public getAllUsers(): Promise<User[]> {
    return this.service.getAllUsers();
  }

  @Post('/signin')
  public signInUser(): Promise<User[]> {
    return this.service.signInUser();
  }
}
