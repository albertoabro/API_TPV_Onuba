const ProductService = require('../../../application/services/productService');
const ProductRepository = require('../../../infrastructure/persistence/repositories/productRepository');
const productService = new ProductService(new ProductRepository());

async function findById(req, res){
    const {id} = req.params;
    const product = await productService.findById(id);
    if(!product){
        res.status(404).send();
    }
    else{
        res.json(product);
    }
}

async function findAll(req, res) {
    const products = await productService.findAll();
    res.json(products);
}

async function create(req, res){
    const dataProduct = req.body;
    const product = await productService.create({
        nameProduct: dataProduct.nameProduct,
        provider: dataProduct.provider,
        category: dataProduct.category,
        price: dataProduct.price
    });
    res.status(201).json(product);
}

async function update(req, res){
    const {id} = req.params;
    const dataProduct = req.body;
    const product = await productService.findById(id);

    if(!product){
        res.status(404).send;
        return;
    }

    product.nameProduct = dataProduct.nameProduct;
    product.provider = dataProduct.provider;
    product.category = dataProduct.category;
    product.price = dataProduct.price;
    const updatedProduct = productService.update(product);
    res.json(updatedProduct);
}

async function remove(req, res){
    const {id} = req.params;
    const deleted = await productService.delete(id);

    if(deleted){
        res.send();
    }
    else{
        res.status(404).send();
    }

}

module.exports={
    findById,
    findAll,
    create,
    update,
    remove,
};