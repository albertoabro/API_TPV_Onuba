const ArticleService = require('../../../application/services/articleService');
const ArticleRepository = require('../../../infrastructure/persistence/repositories/infrastructure');
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
        nameSales: dataArticle.nameSales,
        priceSales: dataArticle.priceSales,
        units: dataArticle.units,
        family: dataArticle.family,
        numBatch: dataArticle.numBatch
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

    article.nameSales = dataArticle.nameSales;
    article.priceSales = dataArticle.priceSales;
    article.units = dataArticle.units;
    article.family = dataArticle.family;
    article.numBatch = dataArticle.numBatch;
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

module.exports={
    findById,
    findAll,
    create,
    update,
    remove,
};