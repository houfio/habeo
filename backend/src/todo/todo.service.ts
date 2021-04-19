import { Injectable } from '@nestjs/common';
import {PrismaService} from "../services/prisma.service";

@Injectable()
export class TodoService {
  constructor(private readonly prismaService: PrismaService) {
  }

  create(data: any) {
    const todo = this.prismaService.todo.create({
      data:{
        title: data.title,
        icon:  data.icon,
        text:  data.text,
      },
    })
    return todo
  }

  findAll() {
    return this.prismaService.todo.findMany();
  }

  findOne(id: string) {
    return this.prismaService.todo.findFirst({
      where: { id: parseInt(id) },
    })
  }

  async toggle(id: string) {
    const todo = await this.prismaService.todo.findFirst({
      where: { id: parseInt(id) },
    })

    return this.prismaService.todo.update({
      where: {id: parseInt(id)},
      data: {completedAt: todo.completedAt? null: new Date()},
    });

    return todo;
  }

  remove(id: string) {
    return `This action removes a #${id} todo`;
  }
}
