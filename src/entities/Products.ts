import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("products")
export class Product {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  description: string;

  @Column()
  stock: number;

  @Column()
  status: boolean;

  @Column()
  price: number;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
