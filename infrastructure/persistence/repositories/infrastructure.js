const model = require ('../models/init-models');
const sequelize = require('../database');
const Articles = model(sequelize);

class ArticleRepository{
    async findById(id){
        return Articles.article.findOne({
            where:{
                idArticle: id
            }
        });
    }

    async findAll(){
        return Articles.article.findAll();
    }

    async save(newArticle){
        return Articles.article.create(newArticle);
    }

    async update(newArticle){

        return Articles.article.update({
            nameSales: newArticle["nameSales"],
            priceSales: newArticle["priceSales"],
            units: newArticle["units"],
            family: newArticle["family"],
            numBatch: newArticle["numBatch"]
        },
        {
            where:{
                idArticle: newArticle["idArticle"]
            }
        });
    }

    async delete(id){
        return Articles.article.destroy({
            where:{
                idArticle: id
            }
        });
    }
}

module.exports = ArticleRepository;