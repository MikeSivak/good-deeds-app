import { Module } from '@nestjs/common';
import { DeedsService } from './deeds.service';
import { DeedsController } from './deeds.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DeedSchema } from './entities/deed.entity';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [DeedsController],
  providers: [DeedsService],
  imports: [
    MongooseModule.forFeature([
      { name: 'Deed', schema: DeedSchema },
    ]),
    UsersModule
  ]
})
export class DeedsModule { }
