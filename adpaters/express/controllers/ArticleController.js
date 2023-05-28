const ArticleService = require('../../../application/services/articleService');
const ArticleRepository = require('../../../infrastructure/persistence/repositories/articleRepository');
const articleService = new ArticleService(new ArticleRepository());

async function findById(req, res){
    const {id} = req.params;
    const article = await articleService.findById(id);
    if(!article){
        res.status(404).send();
    }
    else{
        res.json(article);
    }
}

async function findAll(req, res) {
    const articles = await articleService.findAll();
    res.json(articles);
}

async function create(req, res){
    const dataArticle = req.body;
    const article = await articleService.create({
        idArticle: dataArticle.idArticle,
        nameSales: dataArticle.nameSales,
        priceSales: dataArticle.priceSales,
        units: dataArticle.units,
        family: dataArticle.family,
        numBatch: dataArticle.numBatch,
        stock: dataArticle.stock
    });
    res.status(201).json(article);
}

async function update(req, res){
    const {id} = req.params;
    const dataArticle = req.body;
    const article = await articleService.findById(id);

    if(!article){
        res.status(404).send;
        return;
    }
    
    article.idArticle = id;
    article.nameSales = dataArticle.nameSales;
    article.priceSales = dataArticle.priceSales;
    article.units = dataArticle.units;
    article.family = dataArticle.family;
    article.numBatch = dataArticle.numBatch;
    article.stock = dataArticle.stock;
    
    const updatedArticle = articleService.update(article);
    res.json(updatedArticle);
}

async function remove(req, res){
    const {id} = req.params;
    const deleted = await articleService.delete(id);

    if(deleted){
        res.send();
    }
    else{
        res.status(404).send();
    }

}

async function findByNameArticle(req, res){
    const {nameArticle} = req.params;
    const articles = await articleService.findByNameArticle(nameArticle);
    res.json(articles);
}

async function findByFamily(req, res){
    const{idFamily} = req.params;
    const articles = await articleService.findByFamily(idFamily);
    res.json(articles);
}

module.exports={
    findById,
    findAll,
    findByNameArticle,
    findByFamily,
    create,
    update,
    remove,
};