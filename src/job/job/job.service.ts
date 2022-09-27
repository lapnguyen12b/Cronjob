import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Interval, Timeout } from '@nestjs/schedule';

@Injectable()
export class JobService {
  private readonly logger = new Logger(JobService.name);

  @Cron('45 * * * * *')
  handleCron() {
    this.logger.debug('Called when the current second is 45');
  }

  @Cron(CronExpression.EVERY_30_SECONDS)
  handleCron30Seconds() {
    this.logger.debug('Called every 30 seconds / time');
  }

  @Interval(10000)
  handleInterval() {
    this.logger.debug('Called every 10 seconds / time');
  }

  @Interval(10000)
  handleIntervalV2() {
    this.logger.debug('Called every 10 seconds v2 / time');
  }

  @Timeout(5000)
  handleTimeout() {
    this.logger.debug('Called once after 5 seconds');
  }
}
