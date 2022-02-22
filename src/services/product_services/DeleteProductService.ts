import { getRepository } from "typeorm";
import { Product } from "../../entities/Products";

export class DeleteProductService {
  async execute(id: string) {
    const repo = getRepository(Product);

    if (!(await repo.findOne(id))) {
      return new Error("Este produto não existe");
    }

    await repo.delete(id);
  }
}
