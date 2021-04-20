import { Injectable } from '@nestjs/common';

import { TodoModel } from '../models/todo.model';
import { PrismaService } from '../services/prisma.service';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {
  }

  async create(data: TodoModel) {
    return await this.prisma.todo.create({ data });
  }

  async findAll() {
    return await this.prisma.todo.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.todo.findFirst({
      where: { id }
    });
  }

  async toggle(id: string) {
    const todo = await this.prisma.todo.findFirst({
      where: { id }
    });

    return await this.prisma.todo.update({
      where: { id },
      data: {
        completedAt: todo.completedAt ? null : new Date()
      }
    });
  }

  async delete(id: string) {
    return await this.prisma.todo.delete({
      where: { id }
    })
  }
}
