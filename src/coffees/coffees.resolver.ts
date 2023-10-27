import { Args, Query, Resolver } from '@nestjs/graphql';
import { Coffee } from '../graphql';
import { ParseIntPipe } from '@nestjs/common';

@Resolver()
export class CoffeesResolver {
  @Query('coffees')
  async findAll(): Promise<Coffee[]> {
    return [];
  }

  @Query('coffee')
  async findOne(@Args('id', ParseIntPipe) id: number): Promise<Coffee> {
    return null;
  }
}
