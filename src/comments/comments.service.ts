import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DeedsService } from 'src/deeds/deeds.service';
import { IUserRequest } from 'src/users/interfaces/user-req.interface';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Model } from 'mongoose';
import { IComment } from './interfaces/comment.interface';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel('Comment')
    private readonly commentsModel: Model<IComment>,
    private readonly deedsService: DeedsService,
  ) { }
  async createComment(user: IUserRequest, createCommentDto: CreateCommentDto) {
    const deed = await this.deedsService.getDeedById(createCommentDto.deedId);
    const newComment = { username: user.username, content: createCommentDto.content };
    const savedComment = await this.commentsModel.create(newComment);
    deed.comments.push(savedComment);
    await deed.save();

    return savedComment;
  }

  findAll() {
    return `This action returns all comments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
