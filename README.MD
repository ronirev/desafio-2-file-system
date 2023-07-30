# Desafio 2 : File System

### Run desafio : 
Ejecutar el siguiente comando : 

```sh
node main.js
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