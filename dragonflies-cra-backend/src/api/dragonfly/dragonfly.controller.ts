import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateDragonflyDto } from './dragonfly.dto';
import { Dragonflies } from './dragonfly.entity';
import { DragonflyService } from './dragonfly.service';

@Controller('dragonflies')
export class DragonflyController {
  constructor(
    @Inject(DragonflyService) private readonly service: DragonflyService,
  ) {}

  @Get('/:id')
  public getDragonfly(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Dragonflies> {
    return this.service.getDragonfly(id);
  }

  @Get()
  public getAllDragonflies(): Promise<Dragonflies[]> {
    return this.service.getAllDragonflies();
  }

  @Post()
  public createDragonfly(
    @Body() body: CreateDragonflyDto,
  ): Promise<Dragonflies> {
    return this.service.createDragonfly(body);
  }

  @Get('/lestes')
  getAllLestesDragonflies() {
    return;
  }
}
