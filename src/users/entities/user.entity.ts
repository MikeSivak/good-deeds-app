import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Deed } from "src/deeds/entities/deed.entity";
import { Types } from 'mongoose';

@Schema()
export class User {
    @Prop()
    firstName: string;
    @Prop()
    lastName: string;
    @Prop()
    username: string;
    @Prop()
    email: string;
    @Prop()
    password: string;
    @Prop({ type: [Types.ObjectId], ref: 'Deed' })
    deeds: Deed[];
}

export const UserSchema = SchemaFactory.createForClass(User);
