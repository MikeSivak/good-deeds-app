import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { GetUser } from 'src/deeds/decorators/get-user.decorator';
import { IUserRequest } from 'src/users/interfaces/user-req.interface';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comments')
@UseGuards(JwtAuthGuard)
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) { }

  @Post()
  createComment(@GetUser() user: IUserRequest, @Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.createComment(user, createCommentDto);
  }
}
