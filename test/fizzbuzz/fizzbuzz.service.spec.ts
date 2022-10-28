import { Test, TestingModule } from '@nestjs/testing';
import { FizzbuzzService } from '../../src/fizzbuzz/fizzbuzz.service';

describe('FizzbuzzService', () => {
  let service: FizzbuzzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FizzbuzzService],
    }).compile();

    service = module.get<FizzbuzzService>(FizzbuzzService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


  it('should return Fizz when the number is multiple of 3', () => {
    expect(service.fizzbuzz(3)).toBe('fizz');
  });

  it('should return buzz when the number is mulltplie of 5', () => {
    expect(service.fizzbuzz(5)).toBe('buzz');

  });


  it('should return buzz when the number is mulltplie of 5', () => {
    expect(service.fizzbuzz(15)).toBe('fizzbuzz');

  });

  it('should return the number when then number is neither multiple of 3, 5 nor 15', () => {
    expect(service.fizzbuzz(2)).toBe("2");
  });

  it('should return nothing when the number is not major 100', () => {
    expect(service.fizzbuzz(101)).toBe(undefined);
  });

  it('should return nothing when the number is not menor 1', () => {
    expect(service.fizzbuzz(101)).toBe(undefined);
  })

});
