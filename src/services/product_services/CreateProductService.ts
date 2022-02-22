import { getRepository } from "typeorm";
import { Category } from "../../entities/Category";
import { Product } from "../../entities/Products";

type ProductRequest = {
  name: string;
  image: string;
  description: string;
  stock: number;
  status: boolean;
  price: number;
  category_id: string;
};

export class CreateProductService {
  async execute({
    name,
    image,
    description,
    stock,
    status,
    price,
    category_id,
  }: ProductRequest): Promise<Error | Product> {
    const repo = getRepository(Product);

    const repoCategory = getRepository(Category);

    if (!(await repoCategory.findOne(category_id))) {
      return new Error("Essa categoria não existe");
    }

    const product = repo.create({
      name,
      image,
      description,
      stock,
      status,
      price,
      category_id,
    });

    await repo.save(product);

    return product;
  }
}
