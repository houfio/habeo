import { TodoService } from './todo.service';
import { PrismaService } from '../services/prisma.service';
import { Todo } from '../../dist/todo/entities/todo.entity';
import { TodoResolver } from './todo.resolver';

describe('TodoResolver', () =>{
  let todoService: TodoService;
  let prismaService: PrismaService
  let resolver: TodoResolver

  beforeEach( () => {
    prismaService = new PrismaService()
    todoService = new TodoService(prismaService);
    resolver = new TodoResolver(todoService);
  });

  describe('findAll', () => {
    it('should return an array of todos', async () => {
      const result = [{id: 1,title: 'title', text: 'text', icon:'icon', completedAt: null }];
      jest.spyOn(todoService, 'findAll').mockImplementation(() => Promise.resolve(result));

      await expect( resolver.findAll()).resolves.toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return one todo', async () => {
      const result = {id: 1,title: 'title', text: 'text', icon:'icon', completedAt: null };
      jest.spyOn(todoService, 'findOne').mockImplementation(() => Promise.resolve(result))

      await expect( resolver.findOne("1")).resolves.toBe(result);
    });
  })
})