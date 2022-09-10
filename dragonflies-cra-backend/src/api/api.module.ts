import { Module } from '@nestjs/common';
import { DragonflyModule } from './dragonfly/dragonfly.module';

@Module({
  imports: [DragonflyModule],
})
export class ApiModule {}
