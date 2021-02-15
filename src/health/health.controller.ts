import { Controller, Get } from '@nestjs/common';
import { Health } from './health.interface';
import { HealthService } from './health.service';

@Controller('health')
export class HealthController {
  constructor(private healthService: HealthService) {}

  @Get()
  health(): Health {
    return this.healthService.health();
  }
}
