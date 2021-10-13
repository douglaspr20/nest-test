import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

/**
 * Mongoose Document that represents the 'domain' collection in the DB.
 */
@Schema({ timestamps: true, versionKey: false })
export class Domain extends Document {
  @Prop({ required: true, unique: true })
  domainName: string;

  @Prop({ required: true })
  ownerName: string;

  @Prop()
  ownerId: string;
}

/**
 * Create Mongoose AuthSchema from Auth document.
 */
export const DomainSchema = SchemaFactory.createForClass(Domain);
