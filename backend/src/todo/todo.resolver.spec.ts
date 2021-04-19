import { PrismaService } from '../services/prisma.service';

import { TodoService } from './todo.service';
import { TodoResolver } from './todo.resolver';

describe('TodoResolver', () => {
  let todoService: TodoService;
  let resolver: TodoResolver;

  beforeEach(() => {
    todoService = new TodoService(new PrismaService());
    resolver = new TodoResolver(todoService);
  });

  describe('findAll', () => {
    it('should return an array of todos', async () => {
      const result = [{ id: '1', title: 'title', text: 'text', icon: 'icon', completedAt: null }];
      jest.spyOn(todoService, 'findAll').mockImplementation(() => Promise.resolve(result));

      await expect(resolver.findAll()).resolves.toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return one todo', async () => {
      const result = { id: '1', title: 'title', text: 'text', icon: 'icon', completedAt: null };
      jest.spyOn(todoService, 'findOne').mockImplementation(() => Promise.resolve(result));

      await expect(resolver.findOne('1')).resolves.toBe(result);
    });
  });

  describe('create', () => {
    it('should create a todo', async () => {
      const result = { id: '1', title: 'title', text: 'text', icon: 'icon', completedAt: null };
      jest.spyOn(todoService, 'create').mockImplementation(() => Promise.resolve(result));

      await expect(resolver.create({ title: 'title', text: 'text', icon: 'icon' })).resolves.toBe(result);
    });
  });

  describe('remove', () => {
    it('should remove a todo', async () => {
      const result = { id: '1', title: 'title', text: 'text', icon: 'icon', completedAt: null };
      jest.spyOn(todoService, 'remove').mockImplementation(() => Promise.resolve(result));

      await expect(resolver.remove('1')).resolves.toBe(result);
    });
  });
});
