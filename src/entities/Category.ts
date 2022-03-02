import { Product } from './Products';
import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("categories")
export class Category {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Product, product => product.category)
  product: Product;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
