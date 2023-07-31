# Desafio 2 : File System

### Run desafio : 
Ejecutar el siguiente comando : 

```sh
node main.js
```
Para realizar las pruebas se puede descomentar en main las diferentes funciones implementadas. 

```js 
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

```





### Diseño del desafio :

Se crea la clase **ProductManager** , la cual contiene los siguientes metodos publicos : 

```
- addProduct
- getProducts
- getProductByid
- deleteById
- deleteAll
```
<br>

Se crea la clase **Product** , la cual contiene los siguientes propiedades:

```
- id,
- title, 
- description, 
- price, 
- thumbnail,
- code 
- stock
```
El campo **id** se genera automaticamente de manera incremental a medida que se instancia la clase.Para ello se utilza el metodo privado **idGenerate** del **ProducManager**. 

<br>

```js
export default class Product {
    constructor(title, description, price, thumbnail, code, stock){
        this.id ;
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code; 
        this.stock = stock 
    }
}
```
<br>

###  Estrategia de persistencia 

Al momento de instanciar la clase **ProductManager** se debe pasar el parametro path, el cual debe ser la ruta y el nombre del file donde se desea persistir la creacion de los productos.

Para la configuracion del path se creo una funcion llamada **setPathData** la cual recibe un path , antes de crear el directorio y el file , implementa la funcion **splitPathAndFileName**, para poder dividir del parametro lo correspondiente a ruta y a nombre de file. 
**setPathData**  valida si el path ya existe , en ese caso no crea el directorio, de esta forma no se reescribe el file. 


