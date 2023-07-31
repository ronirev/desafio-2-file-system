import Product from "./class/Product.js";
import ProductManager from "./class/ProductManager.js";

const path = 'data/file.json'

const manager = new ProductManager(path);
const product = new Product('Producto1','Test',10,'Test','CODPROD01',12);


//Test addProduct:
 // console.log(await manager.addProduct(product));

//Test getProducts:
 // console.log(await manager.getProducts());

//Test getProductById:
  //console.log(await manager.getProductByid(2))

//Test deleteById:
   // console.log(await manager.deleteById(1))
   // console.log(await manager.getProducts())

//Test deleteAll:     
 //   manager.deleteAll()
 //  console.log(await manager.getProducts())

    
// Test Update : 
//const productToUpdated = await manager.getProductByid(1)
//productToUpdated.description = 'Description updated'
//await manager.updateProduct(productToUpdated)
//console.log(await manager.getProductByid(2))




