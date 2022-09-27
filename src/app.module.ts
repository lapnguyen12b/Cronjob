import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobModule } from './job/job.module';

@Module({
  imports: [ScheduleModule.forRoot(), JobModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
