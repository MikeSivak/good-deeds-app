import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Comment } from 'src/comments/entities/comment.entity';

@Schema()
export class Deed {
    @Prop({ required: true })
    name: string;
    @Prop({ required: false })
    description: string;
    @Prop({ required: true })
    status: boolean;
    @Prop({ type: [], ref: 'Comment' })
    comments: Comment[];
}

export const DeedSchema = SchemaFactory.createForClass(Deed);