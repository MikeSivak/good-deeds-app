import { Module } from '@nestjs/common';
import { DeedsService } from './deeds.service';
import { DeedsController } from './deeds.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DeedSchema } from './entities/deed.entity';

@Module({
  controllers: [DeedsController],
  providers: [DeedsService],
  imports: [
    MongooseModule.forFeature([
      { name: 'Deed', schema: DeedSchema },
    ]),
  ]
})
export class DeedsModule {}
