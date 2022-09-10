import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DragonflyController } from './dragonfly.controller';
import { Dragonflies } from './dragonfly.entity';
import { DragonflyService } from './dragonfly.service';

@Module({
  imports: [TypeOrmModule.forFeature([Dragonflies])],
  controllers: [DragonflyController],
  providers: [DragonflyService],
})
export class DragonflyModule {}
