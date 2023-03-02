import fs  from "fs";

export default class ProductManager {
    constructor (){
         this.path = "./files/Productos.json";    
    }
    getproducts = async () => {

        if(fs.existsSync(this.path)) {
            const data = await fs.promises.readFile(this.path, "utf-8");
            const result = JSON.parse(data);
            console.log(result);
            return result;
        } else {
            return [];
        }
     
    };// getProducts

    addProduct =  async (producto) => {
        const product = await this.getproducts();
        if (product.length === 0) {
            producto.id = 1;
        } else {
            producto.id = product[product.length - 1].id + 1;
        }
        product.push(producto);
        await fs.promises.writeFile(this.path, JSON.stringify(product, null, "\t")); // convirtiendo a String el array product, y dandole formato al string
        return producto;
    };  // addProduct
        
    getProductById = async (id) => {

        const products = await this.getproducts();
         
        const buscarIdIndex = products.findIndex((product) => product.id === id); // devuelve siempre 0 si es positivo y -1 si es negativo
        const mostrarId = products.find((product) => product.id === id);// devuelve el producto que coincida con el id.

        if (buscarIdIndex === -1) {

            console.log(`Error, id not found`);
            return;

        }else {
            console.log(mostrarId);
        }
    }
    
// leer spread operator investigar crud
    updateProduct = async (id, stock) => {
     
    fs.existsSync(this.path);
    const products = await this.getproducts();
    const buscarId = products.findIndex((product) => product.id === id); // me muestra el producto de acuerdo al id 
    
    if(buscarId === -1) {
        console.error("product not found");
        return[]; 
    }else{

        for (var i = 0; i < products.length; i++){
            if( products[i].id ===id){
                products.stock = stock;
                i--;
            }    

        }
    
        this.addProduct(products);
        await fs.promises.writeFile(this.path, JSON.stringify(this.products, null, "\t"));
    
        console.log(`updated succesfull`);

    } // else
   

} // updateProduct

deleteProduct = async (id) => {
    fs.existsSync(this.path)
        console.log("Delete product");
        const Productos = await this.getproducts();
        const indiceProducto = Productos.findIndex(producto => producto.id === id);

        if (indiceProducto === -1){
            console.log("product not found");
            return[];
        }else{

            for (var i = 0; i < Productos.length; i++ ){
                if( Productos[i].id ===id){
                    Productos.splice(i, 1);
                    i--;
                }
                
            }// for
            await fs.promises.writeFile(this.path, JSON.stringify(Productos, null, "\t"));
            return Productos;
        }// else
    
};
    

       

    /*recibe dos parametros (id, cambios)
    const 
    buscar el libro clean code

    deleteproduts: googlear como borrar un elemento de un array en una posicion especifica.


    */
} // Class

