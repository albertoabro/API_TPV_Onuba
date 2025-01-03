const Article = require('../../domain/article');

class ArticleService{
    constructor(articleRepository){
        this.articleRepository=articleRepository;
    }

    async findById(id){
        const articleModel = await this.articleRepository.findById(id);
        if(!articleModel){
            return null;
        }

        return new Article(articleModel);
    }

    async findAll(){
        const articleModel = await this.articleRepository.findAll();
        return articleModel;
    }

    async create(article){
        const articleModel = await this.articleRepository.save(article);
        return new Article(articleModel);
    }

    async update(article){
        console.log(article);
        const articleModel = await this.articleRepository.update(article);
        console.log(articleModel);
        return new Article(articleModel);
    }

    async delete(id){
        const articleModel = await this.findById(id);
        if(!articleModel){
            return null;
        }

        await this.articleRepository.delete(id);
        return true;
    }

    async findByNameArticle(nameArticle){
        const articleModel = this.articleRepository.findByNameArticle(nameArticle);
        if(!articleModel)
            return null;

        return articleModel;
    }

    async findByFamily(family){
        const articleModel = this.articleRepository.findByFamily(family);
        return articleModel;
    }
}

module.exports = ArticleService;