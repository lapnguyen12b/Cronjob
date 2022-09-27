import { Module } from '@nestjs/common';
import { JobService } from './job/job.service';

@Module({
  providers: [JobService]
})
export class JobModule {}
