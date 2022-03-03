import { Router } from "express";

import { CreateProductController } from "./controllers/product_controllers/CreateProductController";
import { GetAllProductsController } from "./controllers/product_controllers/GetAllProductsController";
import { DeleteProductController } from "./controllers/product_controllers/DeleteProductController";
import { UpdateProductController } from "./controllers/product_controllers/UpdateProductController";

const routes = Router();

routes.post("/products", new CreateProductController().handle);
routes.get("/products", new GetAllProductsController().handle);
routes.delete("/products/:id", new DeleteProductController().handle);
routes.put("/products/:id", new UpdateProductController().handle);
routes.get("/products/:id", new UpdateProductController().handle);

export { routes };
