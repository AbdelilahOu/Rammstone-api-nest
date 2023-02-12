import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../user.controller';
import * as request from 'supertest';
describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('get users', () => {
    return request(controller).get('/').expect(200);
  });

  it('get user', () => {
    return request(controller).get('/fhgfjtdjhdhvbcv').expect(200);
  });

  it('get users', () => {
    return request(controller).put('/iuiudhskjdsdsd').expect(200);
  });

  it('get users', () => {
    return request(controller).delete('/tygjhghgghgj').expect(200);
  });
});
