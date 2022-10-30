import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => { //1
  let app: INestApplication;

  beforeEach(async () => {//2
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {//3
    return request(app.getHttpServer())//4
      .get('/')//5
      .expect(200)//6
      .expect('Hello World!');//7
  });
});
