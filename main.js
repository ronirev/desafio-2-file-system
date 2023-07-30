import Product from "./class/Product.js";
import ProductManager from "./class/ProductManager.js";

const manager = new ProductManager();
const product = new Product('Producto1','Test',10,'Test','CODPROD01',12);


//Test addProduct:
manager.addProduct(product);

//Test getProducts:
  //console.log(manager.getProducts());

//Test getProductById:
  //console.log(manager.getProductByid())

//Test deleteById:
    //console.log(manager.deleteById(1))

//Test deleteAll:     
    //manager.deleteAll()

    
// Test Update : 
//const productToUpdated = manager.getProductByid(1)
//productToUpdated.description = 'Description updated'
//manager.updateProduct(productToUpdated)
//console.log(productToUpdated)




