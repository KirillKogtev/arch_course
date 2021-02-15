import { Injectable } from '@nestjs/common';
import { Health } from './health.interface';

@Injectable()
export class HealthService {

  health(): Health {
    return { status: 'OK' };
  }
}
