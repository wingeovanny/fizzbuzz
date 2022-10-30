import { Test, TestingModule } from '@nestjs/testing';
import { FizzbuzzController } from '../../src/fizzbuzz/fizzbuzz.controller';
import { FizzbuzzService } from '../../src/fizzbuzz/fizzbuzz.service';

describe('FizzbuzzController', () => {
  let controller: FizzbuzzController;
  let service: FizzbuzzService;


  let mockedFizzBuzzValue = 'Buzz';//1
  let mockFizzBuzzService = { //2
    fizzbuzz: () => mockedFizzBuzzValue, //3
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FizzbuzzController],
      providers: [FizzbuzzService]
    }).overrideProvider(FizzbuzzService)//4
      .useValue(mockFizzBuzzService)//5
      .compile();

    controller = module.get<FizzbuzzController>(FizzbuzzController);
    service = module.get<FizzbuzzService>(FizzbuzzService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return the correct Fizz Buzz word according the introduced number (Using spyOn)', () => {
    const result = 'Fizz';
    const fizzbuzzSpy = jest.spyOn(service, 'fizzbuzz');
    jest.spyOn(service, 'fizzbuzz').mockImplementation(() => result);

    expect(controller.fizzbuzz(3)).toBe(result);

    fizzbuzzSpy.mockRestore();
  });

  it('should return the correct Fizz Buzz word according the introduced number (Using mocking de servicios)', () => { //6
    expect(controller.fizzbuzz(5)).toBe(mockedFizzBuzzValue); //7
  });

});
