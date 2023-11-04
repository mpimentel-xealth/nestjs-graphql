
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateCoffeeInput {
    name: string;
    brand: string;
    flavors: string[];
}

export class Coffee {
    id: number;
    name: string;
    brand: string;
    flavors: string[];
}

export abstract class IQuery {
    coffees: Coffee[];
    coffee?: Coffee;
}

export abstract class IMutation {
    createCoffee?: Coffee;
}

type Nullable<T> = T | null;
