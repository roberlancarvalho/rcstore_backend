import { getRepository } from "typeorm";
import { Product } from "../../entities/Products";

type ProductUpdateRequest = {
  id: string;
  name: string;
  image: string;
  description: string;
  stock: number;
  status: boolean;
  price: number;
};

export class UpdateProductService {
  async execute({
    id,
    name,
    image,
    description,
    stock,
    status,
    price,
  }: ProductUpdateRequest) {
    const repo = getRepository(Product);

    const product = await repo.findOne(id);

    if (!product) {
      return new Error("Essa categoria não existe");
    }

    product.name = name ? name : product.name;
    product.image = image ? image : product.image;
    product.description = description ? description : product.description;
    product.stock = stock ? stock : product.stock;
    product.status = status ? status : product.status;
    product.price = price ? price : product.price;

    await repo.save(product);

    return product;
  }
}
