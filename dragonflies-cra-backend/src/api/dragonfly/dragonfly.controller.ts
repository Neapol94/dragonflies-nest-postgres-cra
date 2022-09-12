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
  
  @Get('/:id')
  public getDragonfly(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Dragonflies> {
    return this.service.getDragonfly(id);
  }
  
  @Get('/filter/:column/:value')
  public getDragonfliesByColumn(
    @Param('column') column: string,
    @Param('value') value: string,
  ) {
    return this.service.getDragonfliesByColumn(column, value);
  }
}
