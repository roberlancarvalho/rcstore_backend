import { Router } from "express";

import { CreateCategoryController } from "./controllers/category_controllers/CreateCategoryController";
import { GetAllCategoriesController } from "./controllers/category_controllers/GetAllCategoriesController";
import { DeleteCategoryController } from "./controllers/category_controllers/DeleteCategoryController";
import { UpdateCategoryController } from "./controllers/category_controllers/UpdateCategoryController";

import { CreateProductController } from "./controllers/product_controllers/CreateProductController";
import { GetAllProductsController } from "./controllers/product_controllers/GetAllProductsController";
import { DeleteProductController } from "./controllers/product_controllers/DeleteProductController";
import { UpdateProductController } from "./controllers/product_controllers/UpdateProductController";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);

routes.post("/products", new CreateProductController().handle);
routes.get("/products", new GetAllProductsController().handle);
routes.delete("/products/:id", new DeleteProductController().handle);
routes.put("/products/:id", new UpdateProductController().handle);

export { routes };
