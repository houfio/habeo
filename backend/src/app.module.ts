import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    TodoModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql']
    })
  ]
})
export class AppModule {
}
