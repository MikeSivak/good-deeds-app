import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Comment } from 'src/comments/entities/comment.entity';

@Schema()
export class Deed {
    @Prop()
    name: string;
    @Prop()
    description: string;
    @Prop()
    status: boolean;
    @Prop({ type: [], ref: 'Comment' })
    comments: Comment[];
}

export const DeedSchema = SchemaFactory.createForClass(Deed);