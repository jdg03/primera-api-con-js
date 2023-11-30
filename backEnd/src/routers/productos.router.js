import express from "express";
import { getProducts, getProduct, updateProducts, createProduct, deleteProducts } from "../controllers/productos.controller.js";


const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.put("/:id", updateProducts);
router.post("/", createProduct);
router.delete("/:id", deleteProducts);

export default router;