const model = require ('../models/init-models');
const sequelize = require('../database');
const { Op } = require('sequelize');
const Products = model(sequelize);
class ProductRepository{
    async findById(id){
        return Products.product.findOne({
            where:{
                idProduct: id
            }
        });
    }

    async findAll(){
        return Products.product.findAll();
    }

    async save(newProduct){
        return Products.product.create(newProduct);
    }

    async update(newProduct){

        return Products.product.update({
            nameProduct: newProduct["nameProduct"],
            provider: newProduct["provider"],
            category: newProduct["category"],
            price: newProduct["price"],
            stock: newProduct["stock"]
        },
        {
            where:{
                idProduct: newProduct["idProduct"]
            }
        });
    }

    async delete(id){
        return Products.product.destroy({
            where:{
                idProduct: id
            }
        });
    }

    async findByNameProduct(name){
        return Products.product.findAll({
            where:{
                nameProduct:{
                    [Op.like]: name
                }
            }
        });
    }

    async findByProvider(provider){
        return Products.product.findAll({
            where:{
                provider: provider
            }
        })
    }
}

module.exports = ProductRepository;