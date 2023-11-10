import { IsOptional, MinLength } from 'class-validator';
import * as GraphQLTypes from '../../graphql-types';

export class UpdateCoffeeInput extends GraphQLTypes.UpdateCoffeeInput {
  @MinLength(3)
  @IsOptional()
  name: string;
}
