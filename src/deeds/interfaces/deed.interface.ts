import { Document } from 'mongoose';
import { Comment } from 'src/comments/entities/comment.entity';

export interface IDeed extends Document {
    readonly name: string,
    readonly description: string,
    readonly status: boolean,
    readonly comments: Comment[],
}