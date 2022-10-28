import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../src/app.controller';
import { AppService } from '../src/app.service';

//Bloque de agrupacion de tests
describe('AppController', () => {
  let appController: AppController;

  //bloque de preparacion previa de cada test
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  //bloque anidado de agrupacion de tests
  describe('root', () => {
    //test individual
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });

  });
});
