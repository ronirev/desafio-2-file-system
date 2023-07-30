import Product from "./class/Product.js";
import ProductManager from "./class/ProductManager.js";

const manager = new ProductManager();
const product = new Product('Producto1','Test',10,'Test','COD02',12);

manager.addProduct(product);



console.log(manager.getProducts());

//manager.deleteAll()

//console.log(manager.getProducts());


