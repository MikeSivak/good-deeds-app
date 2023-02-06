import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Comment {
    @Prop()
    username: string;
    @Prop()
    content: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);