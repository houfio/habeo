import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './services/prisma.service';
import { TodoModule } from './todo/todo.module';
import {GraphQLModule} from "@nestjs/graphql";

@Module({
  imports: [TodoModule, GraphQLModule
      .forRoot({ typePaths: ['./**/*.graphql'],})
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService]
})
export class AppModule {
}
