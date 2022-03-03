import { Request, Response } from "express";
import { CreateProductService } from "../../services/product_services/CreateProductService";

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, image, description, stock, status, price } =
      request.body;

    const service = new CreateProductService();

    const result = await service.execute({
      name,
      image,
      description,
      stock,
      status,
      price,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}
