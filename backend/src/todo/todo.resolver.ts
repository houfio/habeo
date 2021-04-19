import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TodoService } from './todo.service';

@Resolver('Todo')
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query('todos')
  findAll() {
    return this.todoService.findAll();
  }

  @Query('todo')
  findOne(@Args('id') id: string) {
    return this.todoService.findOne(id);
  }

  @Mutation('createTodo')
  create(@Args('data') data: any) {
    return this.todoService.create(data);
  }

  @Mutation('toggleCompleted')
  toggle(@Args('id') id: string) {
    return this.todoService.toggle(id);
  }

  @Mutation('removeTodo')
  remove(@Args('id') id: string) {
    return this.todoService.remove(id);
  }
}
