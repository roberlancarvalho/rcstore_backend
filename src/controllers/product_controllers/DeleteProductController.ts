import { Request, Response } from "express";
import { DeleteProductService } from "../../services/product_services/DeleteProductService";

export class DeleteProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteProductService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json("Produto removido com sucesso").end();
  }
}
