import { RequestService } from './requests.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('RequestService', () => {
  let service: RequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestService],
    }).compile();

    service = module.get<RequestService>(RequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
