import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/users/entities/user.entity';
import { Types } from 'mongoose';

@Schema()
export class Deed {
    @Prop()
    name: string;
    @Prop()
    description: string;
    @Prop()
    status: boolean;
}

export const DeedSchema = SchemaFactory.createForClass(Deed);