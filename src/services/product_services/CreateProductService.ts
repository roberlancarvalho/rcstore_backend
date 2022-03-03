import { getRepository } from "typeorm";
// import { Category } from "../../entities/Category";
import { Product } from "../../entities/Products";

type ProductRequest = {
  name: string;
  image: string;
  description: string;
  stock: number;
  status: boolean;
  price: number;
};

export class CreateProductService {
  async execute({
    name,
    image,
    description,
    stock,
    status,
    price,
  }: ProductRequest): Promise<Error | Product> {
    const repo = getRepository(Product);

    const product = repo.create({
      name,
      image,
      description,
      stock,
      status,
      price,
    });
    console.log(product);
    await repo.save(product);

    return product;
  }
}
