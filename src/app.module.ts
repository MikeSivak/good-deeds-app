import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeedsModule } from './deeds/deeds.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    DeedsModule,
    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: 'deedsdb'
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
