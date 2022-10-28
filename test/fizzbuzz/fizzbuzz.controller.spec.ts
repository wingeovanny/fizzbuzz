import { Test, TestingModule } from '@nestjs/testing';
import { FizzbuzzController } from '../../src/fizzbuzz/fizzbuzz.controller';
import { FizzbuzzService } from '../../src/fizzbuzz/fizzbuzz.service';

describe('FizzbuzzController', () => {
  let controller: FizzbuzzController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FizzbuzzController],
      providers: [FizzbuzzService]
    }).compile();

    controller = module.get<FizzbuzzController>(FizzbuzzController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
