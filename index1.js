import ProductManager from "./ProductManager.js";

const product = new ProductManager();

const env = async () => {
   // let primerConsulta = await product.getproducts();
   //console.log(primerConsulta);

  const producto = {

        title:"huevo",
        description:"32 unidades",
        Price:10,
        thumbnail:"no podemos",
        code:"abc798",
        stock: 100

    };

    

    //let result = await product.addProduct(producto); // Agrega el primer producto
   // console.log(result);


   await product.updateProduct(1, 10);

   //await product.deleteProduct(2);

   // await product.getproducts();
    
};


env();

//let consutaId = await product.getProductById(1);
//console.log(consutaId);