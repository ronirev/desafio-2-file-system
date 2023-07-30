import fs from "fs"
const data = fs.readFileSync('data/products.json')
let products = JSON.parse(data)

export default class ProductManager {
    constructor(){
        this.products = products;
    }

    //addProduct
     addProduct(newProduct) {
       newProduct.id=this.#idGenerate(products);
        products.push(newProduct);
       
        const json_products=JSON.stringify(products);
         fs.writeFileSync('data/products.json',json_products,'utf-8');
       
         return newProduct;
     
}
    //getProdcuts
    getProducts(){
        return this.products;
    }

    //getProductById
    getProductByid(id){
        const product = this.products.filter(product => product.id == id);
        if(product != ''){
            return product[0];
        }else{
            throw new Error("Not found");
        }
    }

    //delete by id 
    deleteById = (id)=>{
        const findId = this.getProductByid(id)
        if(findId != ''){
            products= this.products.filter(product => product.id !== id)
            const json_products=JSON.stringify(products)
            fs.writeFileSync('data/products.json',json_products,'utf-8')
             
            return {message:"Product deleted"}
            
           }else{
            throw new Error("Not found");
           }
      }

    //delete all 
    deleteAll = ()=>{
        this.products = [];
        const json_products=JSON.stringify(this.products);
        fs.writeFileSync('data/products.json',json_products,'utf-8');
      }
    
    //update by id
    updateProduct = async (productUpdate) =>{
        const findProduct = this.getProductByid(productUpdate.id)

        if(findProduct != ''){
              this.deleteById(productUpdate.id)
              products.push(findProduct);
              const json_products=JSON.stringify(products);
             fs.writeFileSync('data/products.json',json_products,'utf-8');
            
             return findProduct;
           }else{
                 throw new Error("Not found");
           }
    }
    
    // Metodo privado que genera un id incremental desde el largo de un array
    #idGenerate = (array)=>{
        return array.length + 1;
    }
}
