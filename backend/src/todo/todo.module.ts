import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoResolver } from './todo.resolver';
import {PrismaService} from "../services/prisma.service";

@Module({
  providers: [TodoResolver, TodoService, PrismaService]
})
export class TodoModule {}
