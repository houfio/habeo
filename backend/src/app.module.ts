import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaServiceService } from './prisma-service/prisma-service.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaServiceService, PrismaService]
})
export class AppModule {
}
