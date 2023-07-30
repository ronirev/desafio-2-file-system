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
       
        const json_products=JSON.stringify(products)
         fs.writeFileSync('data/products.json',json_products,'utf-8')
       
         return newProduct;
     
}
    //getProdcuts
    getProducts(){
        return this.products;
    }

    //getProductById
    getProductByid(id){
        const product = this.products.filter(product => product.code == id);
        if(product != ''){
            return product;
        }else{
            throw new Error("Not found");
        }
    }

    //delete all 
    deleteAll = ()=>{
        this.products=[]
        const json_products=JSON.stringify(this.products)
        fs.writeFileSync('data/products.json',json_products,'utf-8')
      }

    

    // Metodo privado que genera un id incremental desde el largo de un array
    #idGenerate = (array)=>{
        return array.length + 1;
    }

}
