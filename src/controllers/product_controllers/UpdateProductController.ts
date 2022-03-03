import { Request, Response } from "express";
import { UpdateProductService } from "../../services/product_services/UpdateProductService";

export class UpdateProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const { name, image, description, stock, status, price } =
      request.body;

    const service = new UpdateProductService();

    const result = await service.execute({
      id,
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
