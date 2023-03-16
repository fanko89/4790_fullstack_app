

import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export declare class Product {
  readonly id: string;
  readonly name: string;
  constructor(init: ModelInit<Product>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}

export declare const ProductSchema: {
  "name": string;
  "pluralName": string;
  "syncable": boolean;
  "attributes": {
    "id": {
      "type": "string",
      "isRequired": true,
      "primaryKey": true
    },
    "name": {
      "type": "string",
      "isRequired": true
    }
  };
  "fieldGroups": [

  ];
  "indexs": [

  ]
};
