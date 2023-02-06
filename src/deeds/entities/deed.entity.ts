import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Comment } from 'src/comments/entities/comment.entity';

@Schema()
export class Deed {
    @Prop()
    name: string;
    @Prop()
    description: string;
    @Prop()
    status: boolean;
    @Prop({ type: [Types.ObjectId], ref: 'Comment' })
    comments: Comment[];
}

export const DeedSchema = SchemaFactory.createForClass(Deed);