import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { TodoModel } from '../models/todo.model';

import { TodoService } from './todo.service';

@Resolver('Todo')
export class TodoResolver {
  constructor(private readonly todo: TodoService) {
  }

  @Query('todos')
  findAll() {
    return this.todo.findAll();
  }

  @Query('todo')
  findOne(@Args('id') id: string) {
    return this.todo.findOne(id);
  }

  @Mutation('createTodo')
  create(@Args('data') data: TodoModel) {
    return this.todo.create(data);
  }

  @Mutation('toggleCompleted')
  toggle(@Args('id') id: string) {
    return this.todo.toggle(id);
  }

  @Mutation('deleteTodo')
  delete(@Args('id') id: string) {
    return this.todo.delete(id);
  }
}
