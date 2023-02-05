import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Deed } from "src/deeds/entities/deed.entity";

@Schema()
export class User {
    @Prop()
    firstName: string;
    @Prop()
    lastName: string;
    @Prop()
    username: string;
    @Prop()
    password: string;
    @Prop({ type: [], ref: 'Deed' })
    deeds: Deed[];
    @Prop()
    friends: User[];
    @Prop()
    rate: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
