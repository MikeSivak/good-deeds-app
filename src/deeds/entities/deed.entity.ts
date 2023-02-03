import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

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