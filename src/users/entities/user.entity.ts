import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Deed } from "src/deeds/entities/deed.entity";
import { Types } from "mongoose";

@Schema()
export class User {
    @Prop({ required: true })
    firstName: string;
    @Prop({ required: true })
    lastName: string;
    @Prop({ required: true })
    username: string;
    @Prop({ required: true })
    password: string;
    @Prop({ type: [Types.ObjectId], ref: 'Deed' })
    deeds: Deed[];
    @Prop({ type: [Types.ObjectId], ref: 'User' })
    friends: User[];
    @Prop({ required: false })
    rate: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
