const Product = require('../../domain/product');

class ProductService{
    constructor(productRepository){
        this.productRepository=productRepository;
    }

    async findById(id){
        const productModel = await this.productRepository.findById(id);
        if(!productModel){
            return null;
        }

        return new Product(productModel);
    }

    async findAll(){
        const productModel = await this.productRepository.findAll();
        return productModel;
    }

    async create(product){
        const productModel = await this.productRepository.save(product);
        return new Product(productModel);
    }

    async update(product){
        console.log(product);
        const productModel = await this.productRepository.update(product);
        console.log(productModel);
        return new Product(productModel);
    }

    async delete(id){
        const productModel = await this.findById(id);
        if(!productModel){
            return null;
        }

        await this.productRepository.delete(id);
        return true;
    }

    async findByNameProduct(nameProduct){
        const productModel = this.productRepository.findByNameProduct(nameProduct);
        if(!productModel)
            return null;
            
        return productModel;
    }
}

module.exports = ProductService;