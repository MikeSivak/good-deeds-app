import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentSchema } from './entities/comment.entity';
import { DeedsModule } from 'src/deeds/deeds.module';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService],
  imports: [
    MongooseModule.forFeature([
      { name: 'Comment', schema: CommentSchema }
    ]),
    DeedsModule,
  ]
})
export class CommentsModule { }
